import React from "react"

export default class TopicForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      headline: "",
      content: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewTopic(this.state)
    fetch("http://localhost:8080/faq", {
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
      <div>
        <form onSubmit={this.handleSubmit} >
          <div>
            <label>
              <h3>Name:</h3>
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleName} />
            </label>
            <label>
              <h3>Topic:</h3>
              <input
                name="headline"
                type="text"
                value={this.state.headline}
                onChange={this.handleHeadline} />
            </label>
            <label>
              <h3>Message:</h3>
              <textarea
                name="content"
                value={this.state.content}
                onChange={this.handleContent} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
