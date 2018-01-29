import React from 'react'
import PropTypes from "prop-types";

export default function QuestionTitle(props) {
    return <div className="quiz-title">{props.title}</div>
}

QuestionTitle.propTypes = {
    title: PropTypes.string.isRequired
}