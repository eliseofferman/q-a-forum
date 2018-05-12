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
        this.setState({ answer: "" })
      }
    }).catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })
  }

  handleAnswer = event => {
    this.setState({ answer: event.target.value })
  }

  handleDelete = event => {
    fetch("http://localhost:8080/answer", {
      method: "DELETE",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topicId: this.props.topicId })
    }).then(response => (
      response.status === 201
    )).catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })

    fetch("http://localhost:8080/faq", {
      method: "DELETE",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ _id: this.props.topicId })
    }).then(response => (
      response.status === 201
    )).catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })
  }

  render() {
    const answerInAdmin = this.props.answers.filter(answer => (
      answer.topicId === this.props.topicId
    ))
    return (
      <div className="answer-admin-container">
        <div className="headline-delete-container">
          <h3 className="topic-headline-question">Topic: {this.props.object.headline}</h3>
          <div onClick={this.handleDelete} className="delete-button-box">
            <div className="delete-button-box--x-1" />
            <div className="delete-button-box--x-2" />
          </div>
        </div>
        <p className="question-txt--admin">🚀: {this.props.object.content} </p>
        {answerInAdmin.map((x, index) => (
          <p className="question-txt--admin-white" key={index}>Posted answer: {x.answer}</p>))}
        <form onSubmit={this.handleAnswerSubmit}>
          <label className="answer-admin-container--box">
            <p className="topic-headline-question">admin answer goes here:</p>
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
