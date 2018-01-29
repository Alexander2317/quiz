import React, {Component} from "react";
import "./style.css";
import QuestionTitle from './QuestionTitle';
import Question from './Question';
import PropTypes from "prop-types";

export default function Quiz(props) {
    const {
        data: {
            title,
            answers
        },
        idCorrectAnswer,
        idWrongAnswer,
        handleClick
    } = props;

    return <div className="quiz">
        <QuestionTitle title={title}/>
        <Question answers={answers}
                  idCorrectAnswer = {idCorrectAnswer}
                  idWrongAnswer = {idWrongAnswer}
                  handleClick={handleClick}/>
    </div>
}

Quiz.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        answers: PropTypes.array.isRequired
    }),
    handleClick: PropTypes.func.isRequired,
    idCorrectAnswer: PropTypes.any,
    idWrongAnswer: PropTypes.any
};