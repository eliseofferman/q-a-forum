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
    fetch("http://localhost:8080/faq").then(response => (
      response.json()
    )).then(json => (
      this.setState({
        topicList: json
      })
    ))
    fetch("http://localhost:8080/answer").then(response => (
      response.json()
    )).then(json => (
      this.setState({ answerList: json })
    ))
  }

  render() {
    return (
      <div className="admin-container">
        <h1 className="admin-headline">[ Admin this ]</h1>
        {this.state.topicList.map(topic => (
          <AnswerInput
            object={topic}
            answers={this.state.answerList}
            topicId={topic._id} />
        ))}

      </div>
    )
  }
}
