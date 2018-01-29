import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Result(props) {
    const {
        countCorrectAnswer,
        maxQuestion
    } = props;

    return <div>You answered correctly {countCorrectAnswer} questions of {maxQuestion}</div>
}

Result.propTypes = {
    countCorrectAnswer: PropTypes.number.isRequired,
    maxQuestion: PropTypes.number.isRequired
}