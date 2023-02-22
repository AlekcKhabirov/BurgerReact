import { Count } from '../Count/count';
import style from './orderGoods.module.css';

export const OrderGoods =(props)=>(
    <li className={style.item}>
                            <img className={style.image} src="../../assets/img/burger_1.jpg" alt={props.title}/>

                            <div className={style.goods}>
                                <h3 className={style.title}>{props.title}</h3>

                                <p className={style.weight}>{props.weight}</p>

                                <p className={style.price}>{props.price}
                                <span className="currency">₽</span>
                                </p>
                            </div>
                            <Count count={1}/>
                        </li>
);