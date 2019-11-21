import React from 'react';
import "./redux/reducers";
import './Game.css';


export default class Actionbar extends React.Component {
    
    render(){
        return (

          
            <center>
           
            <div className={"actionBarContainer"}>
                <button className="Boton" onClick = {()=> {
                    if ((this.props.currentQuestion)!==0){
                        this.props.onChangeQuestion('Anterior')
                    }
          
                }  
               
            }
  
            
           >Anterior</button>

            <button className={"Boton"} onClick ={()=> {
                this.props.onSubmit()
            }
             } >Submit</button>

            <button className={"Boton"} onClick ={()=> {
                this.props.onReset()
            }
             } >Reset</button>
        


        <button className="Boton" onClick={()=>{
            if ((this.props.currentQuestion + 1)!== this.props.questionsLenght){
                this.props.onChangeQuestion('Siguiente')
            }
        }}
    
        >Siguiente</button>
        </div> 
        </center>
        )
       
}
}

