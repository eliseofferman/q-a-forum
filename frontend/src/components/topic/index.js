import React from "react"

export default class Topic extends React.Component {



  render() {

    {
      const svar = this.props.answers.filter( x => {
        // console.log("X", x)
        return x.topicId === this.props.answersId
      })
      console.log("svarX", svar);
    }
    
    return (
      <div>
        <h1>{this.props.headline}</h1>
        <div>
          <p>{this.props.content}</p>
          <p>{this.props.name}</p>
          {/* <p>{this.props.answer}</p> */}
          {/* <p>{this.props.date}</p> */}
          <p>{this.props.answersId}</p>
          {/* <p>{this.svar.answer}</p> */}

        </div>
      </div>
    )
  }
}
