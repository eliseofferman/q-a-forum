import React from "react"
import "./answer-input.css"

export default class AnswerInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      answer: ""
    }
  }

  handleAnswerSubmit = event => {
      console.log("TestAnswer")
    event.preventDefault()
    fetch("http://localhost:8080/answer", {
      method: "POST",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.status === 201) {
        this.setState({
          answer: ""
        })
      }
    }).catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })
  }

  handleAnswer = event => {
    this.setState({
      answer: event.target.value,
      topicId: this.props.object._id
    })
  }

  render () {
    const answerInAdmin = this.props.answers.filter(answer => {
      // console.log("X", x)
      return answer.topicId === this.props.topicId
    })
    console.log("answerInAdmin:", answerInAdmin)

    return (
      <div className="answer-admin-container">
        <h3 className="topic-headline-question">Topic: {this.props.object.headline}</h3>
        <p className="question-txt--admin"> 🚀: {this.props.object.content}</p>
        {answerInAdmin.map((x, index) => (
          <p key={index}>Posted answer: {x.answer}</p>
        ))}
        <form onSubmit={this.handleAnswerSubmit}>
          <label className="answer-admin-container--box">
            <p className="topic-headline-question">admin answer goes here: </p>
            <input
              className="topicform-inputbox--message question-txt"
              name="answer"
              type="text"
              value={this.state.answer}
              onChange={this.handleAnswer} />
          </label>
          <button className="answer-admin-button">Send</button>
        </form>
      </div>
    )
  }


}
