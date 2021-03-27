import React from 'react'

export class Question extends React.Component {
    state = { question: Object.values(this.props.question)[0] }

    clickHandler = (e) => {
        const answerIndex = Number(e.target.getAttribute("data-index"));
        const correctAnswer = Number(Object.keys(this.props.question)[0]);
        let answer = false;
        if(answerIndex + 1 === correctAnswer) {
            answer = true;
        }
            this.props.setNextQ(answer);
    }

    render() {
        return <>
            <div className="question-box">
                <h3>{Object.keys(this.state.question)}</h3>
                <ol>
                    {Object.values(this.state.question)[0].map((answer, index) => {
                        return <li className="answer" key={index} data-index={index} onClick={this.clickHandler}>{answer}</li>
                    })}
                </ol>
            </div>
        </>
    }
}