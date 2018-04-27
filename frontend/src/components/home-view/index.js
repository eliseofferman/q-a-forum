import React from "react"
import TopicForm from "../topic-form"
import Topic from "../topic"

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topicList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/faq").then(response => (
      response.json()
    )).then(json => {
      this.setState({ topicList: json })
    })
  }

  handleNewTopic = topic => {
    this.setState({
      topicList: [topic, ...this.state.topicList]
    })
  }

  render() {
    return (
      <div >
        <h4>Ask your question:</h4>
        <hr />
        <TopicForm onNewTopic={this.handleNewTopic} />
        <section>
          <h4>Most recent questions:</h4>
          <hr />
          {this.state.topicList.map(topic => (
            <Topic
              headline={topic.headline}
              content={topic.content}
              name={topic.name}
              date={topic.date} />
          ))}
        </section>
      </div>
    )
  }
}
