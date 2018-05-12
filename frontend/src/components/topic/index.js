import React from "react"
import "./topic.css"

export default class Topic extends React.Component {

  render() {
    const svar = this.props.answers.filter(x => (
      x.topicId === this.props.topicId
    ))

    return (
      <div>
        <h1 className="topic-headline-question">topic: {this.props.headline}</h1>
        <div className="qa-container">
          <p className="question-txt">🚀 {this.props.content}</p>
          <p className="topic-p question-txt">posted by: {this.props.name}</p>
          <p className="topic-p question-txt">answers:
            {svar.map((x, index) => (
              <p key={index} >answer {index}: {x.answer}</p>
            ))}
          </p>

        </div>
      </div>
    )
  }
}
