import React, { useState } from 'react';
import Icon from './Components/Icon.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button,Container,Card,CardBody,Row,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';



const tiktackArray =new Array(9).fill("");
function App(){
    let [isCross,setIsCross]=useState(true)
    let [winMessage,setWinMessage]=useState("");

    const playAgain=()=>{
        setIsCross(true);
        setWinMessage("")
        tiktackArray.fill("");

    }
    const findWinner=()=>{
        if(tiktackArray[0]==tiktackArray[1] &&tiktackArray[0]==tiktackArray[2] && tiktackArray[0]!=""){
            setWinMessage(tiktackArray[0]+" has won");
        }
        else if(tiktackArray[3]==tiktackArray[4] && tiktackArray[3]==tiktackArray[5] &&tiktackArray[3]!="" ){
            setWinMessage(tiktackArray[3]+ " has won");
        }
        else if(tiktackArray[6]==tiktackArray[7] && tiktackArray[6]==tiktackArray[8] &tiktackArray[7]!="" ){
            setWinMessage(tiktackArray[6]+" has won");
        }
        else if(tiktackArray[0]==tiktackArray[3] && tiktackArray[0]==tiktackArray[5] &tiktackArray[3]!="" ){
            setWinMessage(tiktackArray[0]+ " has won");
        }
        else if(tiktackArray[1]==tiktackArray[4] && tiktackArray[1]==tiktackArray[7] &tiktackArray[1]!="" ){
            setWinMessage(tiktackArray[1]+ " has won");

        }
        else if(tiktackArray[2]==tiktackArray[5] && tiktackArray[2]==tiktackArray[7] &tiktackArray[2]!="" ){
            setWinMessage(tiktackArray[2]+ " has won");
        }
        else if(tiktackArray[0]==tiktackArray[4] && tiktackArray[0]==tiktackArray[8] &tiktackArray[0]!="" ){
            setWinMessage(tiktackArray[0]+ " has won");
        }
        else if(tiktackArray[2]==tiktackArray[4] && tiktackArray[2]==tiktackArray[6] &tiktackArray[2]!="" ){
            setWinMessage(tiktackArray[2]+ " has won");
        }
        else{
            var flag=0;
            for(var i=0;i<9;i++){
                if(tiktackArray[i]==""){
                    flag=1
                    break;
                }
            }
            if(flag==0){
                setWinMessage("Game Drawn")
            }
        }

    }
    const changeItem =(index)=>{
        if(winMessage){
            return toast("Game has got over",{type: "success"})

        }
        if(tiktackArray[index]==""){
            tiktackArray[index]=isCross?"cross":"circle";
            setIsCross(!isCross);

        }
        else{

            return toast("Occupied",{type: "error"});

        }
        findWinner()


    }

    return(
        <div>
           <Container className="p-5">
               <ToastContainer position="bottom-center"></ToastContainer>
               <Row>
               <Col  md={6} className="offset-md-3">

{
    //to display winner message
    winMessage?
   
    (
     <div>
            <h1 className="text-center" style={{color:"lightblue"}}>{winMessage}</h1>
            <center><Button onClick={playAgain}  > Play Again</Button></center>
    </div>
    ):(
        <h1 style={{color:"#32a8a4"}}>{isCross?"cross's turn":"circles turn"}</h1>
    )
}
<div className="grid">{
    tiktackArray.map((value,index) => (
        <Card onClick={()=>changeItem(index)} className="sma"> 
        <CardBody className="box">
            <Icon choice={tiktackArray[index]}/>

        </CardBody>
    </Card>

    ))
 
}
</div>


</Col>

               </Row>
               


           </Container>
        </div>
    )
}



export default App;
