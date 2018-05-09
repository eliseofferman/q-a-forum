import React from "react"
import TopicForm from "../topic-form"
import Topic from "../topic"

import "./home-view.css"

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
      this.setState({ topicList: json })
    })
    fetch("http://localhost:8080/answer").then(response => (
      response.json()
    )).then(json => {
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
      <div className="homeView-container">

        <TopicForm
          className="topic-form-container"
          onNewTopic={this.handleNewTopic} />
        <section className="questionanswer-container">
          <h4>Recent questions &not;</h4>

          {this.state.topicList.map((topic, index) => (
            <Topic
              key={index}
              headline={topic.headline}
              content={topic.content}
              name={topic.name}
              answers={this.state.answerList}
              topicId={topic._id}
              //  date={topic.date}
            />
          ))}
        </section>
      </div>
    )
  }
}
