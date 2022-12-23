import React, { useEffect, useState } from 'react'

const Snake = ({left, top, temp, food}) => {
    const [row, setrow] = useState([])
useEffect(() => {
    const rows = [];
    let counter=0;
    for (let i = 0; i < 46; i++) {
        let col = []
        for (let j = 0 ; j< 26; j++){
            let foodflag = false;
            let flag = false;
            temp.map((element)=>{
                if (element.left===i && element.top===j){
                    flag = true;
                    // console.log(element.left, element.top);
                }
                if (food.left===i && food.top===j){
                    foodflag = true;
                }
            }
            )
            if (foodflag) col.push( <div style={{display:'flex', width:10, height:10, backgroundColor:'red', borderRadius:100}}></div>)
            else if (flag) col.push( <div style={{display:'flex', width:10, height:10, backgroundColor:'black'}}></div>)
            else col.push( <div style={{display:'flex', width:10, height:10}}></div>)
            counter++;
        }
        rows.push(<div style={{display:'flex',width:10, flexDirection:'column'}}>
        {col}
        </div>);
    }
    setrow(rows)
})

  return (
    // <div style={{ display:'inline-flex', width:10, height:10, border:'1px solid',position:'relative', left:`${left}%`, top:`${top}%`}}></div>
  <>
    {row}
    
    </>
  )
}

export default Snake