import React from "react"
import "./topic.css"

export default class Topic extends React.Component {

  render() {
    const svar = this.props.answers.filter(x => {
      // console.log("X", x)
      return x.topicId === this.props.topicId
    })
    console.log("svarX", svar)

    return (
      <div>

        <div className="headline-delete-container">
          <h1 className="topic-headline-question">topic: {this.props.headline}</h1>
          <div className="delete-button-box">
            <div className="delete-button-box--x-1" />
            <div className="delete-button-box--x-2" />
          </div>
        </div>
        <div className="qa-container">
          <p className="question-txt">🚀 {this.props.content}</p>
          <p className="topic-p question-txt">posted by: {this.props.name}</p>

          <p className="topic-p question-txt">answer:</p>
          {svar.map((x, index) => (
            <p key={index}>Input: {x.answer}</p>
          ))}

        </div>
      </div>
    )
  }
}
