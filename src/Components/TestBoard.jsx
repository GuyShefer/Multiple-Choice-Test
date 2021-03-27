import React from 'react'
import data from '../data'
import { Question } from './Question';
import './TestBoard.css'

export class TestBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

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
        this.setState(this.getInitialState());
    }

    getInitialState = () => {
        return { data, currentQuestion: 1, answersArr: [], testResult: -1 };
    }

    render() {
        return <>
            {this.state.data.map((question, index) => {
                if (index + 1 === this.state.currentQuestion) {
                    return <Question key= {index} question={question} setNextQ={this.increaseCurrentQuestion} />
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