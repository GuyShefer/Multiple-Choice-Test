import React from 'react'
import { Question } from './Question';

const RenderQuestionByCondition = ({ question, currQ, setNextQ }) => {
    return <Question key={currQ} question={question} setNextQ={setNextQ} />
}

export default RenderQuestionByCondition;

{/* NOT NEED ALL THIS COMPONENT*/}