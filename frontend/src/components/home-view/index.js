import React from "react"
import TopicForm from "../topic-form"
import Topic from "../topic"

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topicList: [],
      answerList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/faq").then(response => (
      response.json()
    )).then(json => {
      console.log("Topics", json);
      this.setState({ topicList: json })
    })
    fetch("http://localhost:8080/answer").then(response => (
      response.json()
    )).then(json => {
      console.log("answers ", json)
      this.setState({ answerList: json })
    })
  }

  // handleNewAnswer = answer => {
  //   this.setState({
  //     answerList: s
  //   })
  // }

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
          {this.state.topicList.map((topic, index) => (
            <Topic
              key={index}
              headline={topic.headline}
              content={topic.content}
              name={topic.name}
              answers={this.state.answerList}
              answersId={topic._id}
              //  date={topic.date}
            />
          ))}
        </section>
      </div>
    )
  }
}
