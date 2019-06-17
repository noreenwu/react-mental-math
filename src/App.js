import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const value2 = Math.floor(Math.random() * 100);
//const value3 = Math.floor(Math.random() * 100);

class App extends Component {
  state = {
	numQuestions : 0,
	numCorrect : 0,
	value1 : 5,
    value2 : 5,
    value3 : 5,
    proposedAnswer : 15,
    correctAnswer : 15,
    shownAnswerCorrect: true
  };

  createQuestion = () => {
    let v1 = Math.floor(Math.random() * 100);
    let v2 = Math.floor(Math.random() * 100);
    let v3 = Math.floor(Math.random() * 100);
    this.setState((currentState) => ({
      numQuestions : currentState.numQuestions + 1,   
      value1 : v1,
      value2 : v2,
      value3 : v3,
      proposedAnswer : v1 + v2 + v3 + Math.floor(Math.random() * 6),
	  correctAnswer : v1 + v2 + v3        
    }));
  }; 
  gradeTrue = () => {
    if (this.state.proposedAnswer === this.state.correctAnswer) { 
      // console.log("updating numCorrect and numQuestions");
      this.setState((currentState) => ({
        // numQuestions : currentState.numQuestions + 1,
        numCorrect : currentState.numCorrect + 1
      }));
    }
    this.createQuestion();    
  }
  gradeFalse = () => {
    if (this.state.proposedAnswer !== this.state.correctAnswer) {
      // console.log("update numCorrect and numQuestions");
      this.setState((currentState) => ({
        numCorrect : currentState.numCorrect + 1
      }));    
    }
    this.createQuestion();      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button
				onClick={() => this.gradeTrue()}>True</button>
          <button
				onClick={() => this.gradeFalse()}>False</button>
		  <button
				onClick={() => this.createQuestion()}>New Question</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
		  <p className="fineprint"> Actual answer: {this.state.correctAnswer}
		  </p>
        </div>
      </div>
    );
  }
}

export default App;
