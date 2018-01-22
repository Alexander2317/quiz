import React, {Component} from 'react'

export default class QuestionTitle extends Component {

    render(){
        return <div className="quiz-title">{this.props.title}</div>
    }
}