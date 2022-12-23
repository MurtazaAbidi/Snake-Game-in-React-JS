import React, { useState } from 'react'
import SnakeGame from './SnakeGame';
import Temp from './temp';

const App = () => {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(1);
  
  return (
      <>
          {gameOver?
          (
            <>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontWeight:900, fontSize:'5rem', height:'100vh', flexDirection:'column'}}>
              Game Over
              <div style={{fontSize:'2rem', border:'2px solid', padding:'1rem', boxShadow:'grey 5px 4px 7px 3px'}}>Score: {score-1}</div>
            </div>
            </>
          )
          :<SnakeGame setGameOver={setGameOver} score={score} setScore={setScore}/>}
          {/* <Temp/> */}
      </>
  );
}

export default App