import React, { useEffect, useState } from 'react'
import Snake from './components/Snake'

const SnakeGame = ({score, setScore, setGameOver}) => {
    const [snakeList, setSnakeList] = useState([])
    // const [showTime, setShowTime] = useState(1)
    const [direction, setDirection] = useState('') 
    const [foodHeight, setFoodHeight] = useState(parseInt(0 + (Math.random() * (25 - 0))))
    const [foodHori, setFoodHori] = useState(parseInt(0 + (Math.random() * (45 - 0))))
    const [left, setLeft] = useState(22)
    const [top, setTop] = useState(12)
    const [temp, setTemp] = useState([])
  
    // useEffect(()=>{
    //   setSnakeList([...snakeList, 1])
    // },[snakeList])
    useEffect(()=>{
      // setSnakeList([...snakeList, 1])
      setTimeout(() => {
        let temp = []
        let snakeelist = [...snakeList, {top:top, left:left}]
        setSnakeList([...snakeList, {top:top, left:left}]);
        if (direction==='ArrowRight' && left<46) setLeft(left+1);
        else if (direction==='ArrowLeft' && left>=0) setLeft(left-1);
        else if (direction==='ArrowDown' && top<26) setTop(top+1);
        else if (direction==='ArrowUp' && top>=0) setTop(top-1);
        else if (left>45 || top >25 || left<0 || top<0) {
            setGameOver(true)
        console.log(left, top)}
        if (Math.abs(foodHeight-top)===0 && Math.abs(foodHori - left)===0) {
          setFoodHeight(parseInt(0 + (Math.random() * (25 - 0))));
          setFoodHori(parseInt(0 + (Math.random() * (45 - 0))));
          setSnakeList([...snakeList, {top:top, left:left}]);
          // setSnakeList([...snakeList, 1])
          // console.log(snakeList)
          setScore(score+1)
          // alert("yehhhh")
          // setSnakeList([snakeList.length-score,snakeList.length])
        }
        // console.log('food:     ', foodHeight, foodHori)
        // console.log('snake:    ',top, left)
        // else alert('Game Over')
        // setShowTime(Number(showTime)+1)
        // left<99 && setLeft(left+1);
        // if (left===99) setLeft(0)
        // console.log(snakeList)

        for (let i=snakeelist.length-1; i>snakeelist.length-1-score; i--){

            temp.push(snakeelist[i]);
        }
        // console.log(temp)
        setTemp(temp)
      }, 100);
      
    })
  
    return (
        <div >
            <input style={{cursor:'default', position:'absolute', width:'100vw', height:'100vh', background:'transparent', right:1, border:'none' }}value="" onKeyDown={(e)=>{console.log(e.code);setDirection(e.code);}}/>
            <h1 style={{textAlign:'center', marginBottom:'0.5rem', paddingTop:'2rem'}}>Snake Game</h1>
            <h3 style={{marginBottom:'2rem', textAlign:'center'}}> Score: {score-1}</h3>
            <div style={{display:'flex', border:'2px solid', width:'50vw', height:'60vh', margin:'auto', boxShadow:'grey 6px 9px 7px 4px'}}>
              {/* <Snake left={left} top={top}/> */}
              {/* <Snake left={left} top={top}/> */}
  
              {/* {temp.map((element, index)=>{ */}
                {/* return  */}
                {/* })} */}
            <Snake left={left} top={top} temp={temp} food={{top:foodHeight, left:foodHori}}/>
            {/* <Snake left={foodHori} top={foodHeight}/> */}
            </div>
            {/* <div style={{border:'2px solid', width:'80vw', height:'60vh', margin:'auto'}}><Snake left={left} top={top}/></div> */}
        <div style={{textAlign:'center', paddingTop:'1rem', marginTop:'1rem', fontWeight:600, color:'gray', }}><span style={{fontWeight:700}}>Created By:</span> Syed Muhammad Murtaza Abidi</div>
        </div>
    );
  }

export default SnakeGame