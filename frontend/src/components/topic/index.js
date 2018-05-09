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
        <h1 className="topic-headline">question: {this.props.headline}</h1>
        <div className="qa-container">
          <p className="question-txt">question: {this.props.content}</p>
          <p className="topic-p">posted by: {this.props.name}</p>

          <p className="topic-p">answer:</p>
          {svar.map((x, index) => (
            <p key={index}>Input: {x.answer}</p>
          ))}

        </div>
      </div>
    )
  }
}
