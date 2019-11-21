import React from 'react';
import './Game.css';
import Actionbar from "./Actionbar";
import { styles } from 'ansi-colors';
import { questionAnswer ,submit } from './redux/actions';
import Content from './Content';



export default class Game extends React.Component{
    render(){
        if( this.props.finished == false){

    return (

        //DE GAME SALE CONTENT Y ACTIONBAR
        //tenemos que meter en cada uno las actions y reducers que vayamos a utilizar
        <div>
        
        <Content 
            question= {this.props.question}//estas acciones no se para que se utilizan en content , SI SE UTILIZA ACCEDER PREGUNTA
            onQuestionAnswer={(e)=>this.props.onQuestionAnswer(e)}//SE UTILIZA PARA ESCRIBIR
            currentQuestion={this.props.currentQuestion}// en un principio no se utiliza en content
            style={styles.content}//idem
            score={this.props.score}//idem
            timer = {this.props.timer}
        /> 
        <Actionbar 
            onChangeQuestion={this.props.onChangeQuestion} //para el boton de siguiente y atras
            onSubmit={this.props.onSubmit} // boton submit
            currentQuestion={this.props.currentQuestion}// tanto currentquestion como length lo utiliza pra el clickable
            styles={styles.Actionbar}
            questionsLength={this.props.questionsLength}
            onReset={this.props.onReset}
        />

        
        </div>
    
    );
    
        }    
     else {

    return(
        <div>
          <h1> RESULTADO: {this.props.score}</h1>
    <p>{this.props.score<5?<h2>FAIL: TRY NEXT TIME : (</h2>:<h2>PASS: CONGRATULATIONS</h2>}</p>
          <button className="Boton" onClick ={()=> {
                this.props.onReset()
            }
             } >Reset</button>
        
        </div>)
     }
}
}