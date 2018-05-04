import React from "react"

export default class AdminView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: ""
    }
    }
  handleAnswerSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8081/faq", {
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
      answer: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAnswerSubmit}>
          <label>
            <p>Enter your answer</p>
            <input
              name="answer"
              type="text"
              value={this.state.answer}
              onChange={this.handleAnswer} />
          </label>
          <button>Send</button>
        </form>
      </div>
    )
  }
}
