import React from "react"
import "./topicForm.css"

export default class TopicForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      headline: "",
      content: ""
    }
  }

  handleSubmitTopic = event => {
    event.preventDefault()
    this.props.onNewTopic(this.state)
    fetch("https://q-a-forum.herokuapp.com/faq", {
      method: "POST",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.status === 201) {
        this.setState({
          name: "",
          headline: "",
          content: ""
        })
      }
    }).catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleHeadline = event => {
    this.setState({
      headline: event.target.value
    })
  }

  handleContent = event => {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div className="topic-form-container">

        <h1 className="question-logo"> [ QUESTION THIS ]</h1>

        <form onSubmit={this.handleSubmitTopic} >
          <div className="topic-form-box">
            <label>
              <h3 className="topic-headline">name &not;</h3>
              <input
                placeholder="Your name, pls!"
                className="topicform-inputbox"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleName} />
            </label>
            <label>
              <h3 className="topic-headline">topic &not;</h3>
              <input
                className="topicform-inputbox"
                placeholder="Type topic here"
                name="headline"
                type="text"
                value={this.state.headline}
                onChange={this.handleHeadline} />
            </label>
            <label>
              <h3 className="topic-headline">message &not;</h3>
              <textarea
                className="topicform-inputbox--message"
                placeholder="🚀?"
                name="content"
                value={this.state.content}
                onChange={this.handleContent} />
            </label>
          </div>
          <button className="topicform-submitbutton">Submit</button>
        </form>

      </div>
    )
  }
}
