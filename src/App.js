import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import {questionAnswer, changeQuestion, initQuestions,submit, download, timer,} from './redux/actions'
import NavBar from './Navbar';


class App extends Component{

  
    downloadQuestions(){
      fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=7a59787b4a3230fee7fc")

          .then(function(res){
            return res.json();
          })

          .then(downloaded=>{
            this.props.dispatch(download(downloaded));
          })
        }
         
      
    componentDidMount() {
          this.downloadQuestions();
          var intervalo = setInterval(() =>{
            this.props.dispatch(timer(this.props.timer-1));
            if (this.props.timer===0){
                this.props.dispatch(submit(this.props.questions))
            }

        },1000);
      }


    render(){     
    return (
      //todos los estados o reducers que vamos a utilizar los abreviamos nombrando la funcion con nombres
      //para hacer mas sencillo el codigo
      // curentQuestion es ahora la funcion de currentQuestion
      //DE APP SALE NAVBAR Y GAME
    <div>
        <NavBar/>
        
        <Game 
        question={this.props.questions[this.props.currentQuestion]}//la question en si, capital de españa? de italia? questions[i]
        currentQuestion={this.props.currentQuestion} //en que numero de pregunta vamos, primera segunda i ,, es un reducer
        finished={this.props.finished}//llamamos a la funcion y la utilizamos desde la palabra finished,, es un reducer
        score={this.props.score} //reducer
        timer={this.props.timer}
        onQuestionAnswer={(answer)=>{
        this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
        }} //al parecer este lo daban hay que analizarlo, hace dispach a questionANSWER metiendo currentQuestion como indice y answer como el parametro answer
        // dispatch se utiliza cuando es una accion?,, es una accion
        onChangeQuestion={(change)=>{
          this.props.dispatch(changeQuestion(this.props.currentQuestion, change))
        }}//accion chanqueQuestion
        onSubmit={()=>{this.props.dispatch(submit(this.props.questions))}}
        // onSubmit={()=>this.props.dispatch(resetCounter())}
        onReset={()=>{this.props.dispatch(initQuestions(this.props.questions));this.downloadQuestions()}}
        // onReset={()=>this.timer = this.createTimer()}
        questionsLength ={this.props.questions.length} // cantidad de preguntas,,, accion submit
        />  
        
    </div>
    );
    }
  }
    
    
  
function mapStateToProps(state) {
  return {
  ...state
  };
}

export default connect(mapStateToProps)(App);

