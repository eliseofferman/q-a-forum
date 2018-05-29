import React from "react"
import AnswerInput from "../answer-input/index"

export default class AdminView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      topicList: [],
      answerList: []
    }
  }

  componentDidMount() {
    fetch("https://q-a-forum.herokuapp.com/faq").then(response => (
      response.json()
    )).then(json => (
      this.setState({
        topicList: json
      })
    ))
    fetch("https://q-a-forum.herokuapp.com/answer").then(response => (
      response.json()
    )).then(json => (
      this.setState({ answerList: json })
    ))
  }

  deleteQuestion = index => {
    const topics = this.state.topicList
    topics.splice(index, 1)
    this.setState({
      topicList: topics
    })
  }

  showNewAnswer = addedAnswer => {
    const answers = this.state.answerList
    answers.push(addedAnswer)
    this.setState({
      answerList: answers
    })
  }

  render() {
    return (
      <div className="admin-container">
        <h1 className="admin-headline">[ Admin this ]</h1>
        {this.state.topicList.map((topic, index) => (
          <AnswerInput
            index={index}
            key={index}
            object={topic}
            answers={this.state.answerList}
            topicId={topic._id}
            callbackDelete={this.deleteQuestion}
            callbackNewAnswer={this.showNewAnswer} />
        ))}

      </div>
    )
  }
}
