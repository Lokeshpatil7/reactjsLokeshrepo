import React , {Component} from "react";

export default class ResultClass extends Component{
    state ={
                 
        percentage:0,
        result:"Invalid",
        color:"skyblue",
    };                                      

    onCalculateHandler =(event) =>{ 
        this.setState({percentage:event.target.value } );
    };                                                           

    onClickHandler =()=>{
        const {result, color}=this.onCalculateResult(this.state.percentage);
        this.setState({result, color}); //same as above
      //  this.setState({result: this.onCalculateResult(this.state.percentage)})
    
    };

    onCalculateResult =(percentage) =>{
    //  let result="Invalid";
      let resultObject ={
          result:"Invalid",
          color:"skyblue",    
      };

      if(percentage >= 0 && percentage <35){
         // result="Fail" ;
         resultObject ={
             result:"Fail",
             color:"red",
         };
      }else if(percentage >=35 && percentage <=50){
          //result ="Just pass";
          resultObject ={
            result:"just pass",
            color:"orange",
        };

      }else if (percentage >50 && percentage <=60){
         // result="Second Class"
         resultObject ={
            result:"Second class",
            color:"yellow",
        };
      }else if (percentage >=60 && percentage <=70){
         // result="First Class";
         resultObject ={
            result:"First class",
            color:"green",
        };
      }else if ( percentage >=70 && percentage <=100){
         // result= "Distinction";
         resultObject ={
            result:"Distinction",
            color:"violet",
        };
      }
      return resultObject;

    };
    
    
 render(){
     return(
         <>
        <h1>From ResultClass</h1>

        <h2>Check your result</h2>
        
        <input 
       value ={this.state.percentage}
       onChange={this.onCalculateHandler} 
        />  
        
        <button  onClick={this.onClickHandler}>Calculate Result</button>
        <br></br><br></br>
        <div style={{backgroundColor: this.state.color}} >
                  Your Result is : {this.state.result}
        </div>
        <br></br>
       
         </>
     );
 }
}