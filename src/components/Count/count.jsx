import style from './count.module.css';

export const Count =(props)=>(
    <div className={style.count}>
    <button className={style.count.minus}>-</button>
    <p className={style.count.amount}>1</p>
    <button className={style.count.plus}>+</button>
</div>
)