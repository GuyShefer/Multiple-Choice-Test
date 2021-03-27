import React from 'react'
import data from '../data'
import RenderQuestionByCondition from './RenderQuestionByCondition';
import './TestBoard.css'

export class TestBoard extends React.Component {
    state = { data, currentQuestion: 1, answersArr: [], testResult: -1 }

    increaseCurrentQuestion = (answer) => {
        const answersArray = this.state.answersArr;
        answersArray.push(answer);

        this.setState({ currentQuestion: this.state.currentQuestion + 1, answersArr: answersArray })

        if (this.state.currentQuestion === this.state.data.length) {
            this.calcTestResult(answersArray);
        }
    }

    calcTestResult = (arr) => {
        const truthAnswers = arr.reduce((accumlator, currentAnswer) => {
            return currentAnswer === true ? accumlator + 1 : accumlator;
        }, 0);
        const testResult = Math.floor(truthAnswers / this.state.data.length * 100);
        this.setState({ testResult: testResult })
    }

    restartTest = () => {
        console.log('restart');
    }

    render() {
        return <>
            {this.state.data.map((question, index) => {
                if (index + 1 === this.state.currentQuestion) {
                    return (<RenderQuestionByCondition key={index} question={question} currQ={index} setNextQ={this.increaseCurrentQuestion} />)
                }
            })}
            {(this.state.testResult > -1) ?
                <div><h2> Your Test Result Is : {this.state.testResult}</h2>
                    <input type="button" onClick={this.restartTest} value="Restart" />
                </div>
                : null}
        </>
    }
}