import React from "react";
import './Game.css';
import './Game'

export default class Content extends React.Component {
  render() {
    if (this.props.question === undefined) {
      return <h1>FIN DEL QUIZ: PRESS SUBMIT</h1>;
    } else {
      return (
        <center className = "center">

          <div>

            <input className="imagen"
              type="image"
              src={this.props.question.attachment.url}
              width="400"
              heigth="400"
            />

            <p><h2>
              <strong>{this.props.currentQuestion + 1} . {this.props.question.question}</strong>
            </h2></p>

            <input
              type="text"
              value={this.props.question.userAnswer || ""}
              onChange={e => {
                this.props.onQuestionAnswer(e.target.value);
              }}
            />

            <div className="caja" >
              <img className="autor" src={this.props.question.author.photo.url} alt={""} />
              <p className= "usuario"> {this.props.question.author.username}</p>

            </div>

            
                
            

            <div>
              <strong>Tips:</strong>
              {this.props.question.tips.length === 0 ? (
                <p>{"No tips"}</p>
              ) : (
                this.props.question.tips.map(function(t) {
                  return <p>{t}</p>;
                })
              )}
            </div>
            
            <div id="timer"><b>Tiempo restante:</b> {this.props.timer} </div>

          </div>


        </center>
      );
    }
  }
}