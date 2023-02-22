import { useState } from 'react';
import style from './count.module.css';

export const Count =(props)=>(

    const [count,setCount]= useState(props.Count);

    const addCount =() =>{
        setCount(count+1);
    }
    const removeCount =()=>{
        if(count>1){
            setCount(count-1);
        }
        
    }

    return (
    <div className={style.count}>
        <button className={style.count.minus} onClick={removeCount} disaled={count===1}>-</button>
        <p className={style.count.amount}>{props.count}</p>
        <button className={style.count.plus} onClick={addCount}>+</button>
    </div>
    );
);