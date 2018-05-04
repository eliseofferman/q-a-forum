import React from "react"
import AnswerInput from "../answer-input/index"

export default class AdminView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      topicList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/faq").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        topicList: json
      })
      console.log(this.state.topicList)
    })
  }




  render() {
    return (
      <div>
        {this.state.topicList.map((topic) => {
          return <AnswerInput
            object={topic}/>
        })}

      </div>
    )
  }
}
