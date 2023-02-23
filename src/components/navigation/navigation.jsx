import classNames from 'classnames';
import style from './navigation.module.css';
import { Container } from '../container/container.jsx';
import { useSelector } from 'react-redux';

export const Navigation =()=>{ 
    const {category} = useSelector((state)=> state.category );
        console.log('category:',category);
    

    return (
    <nav className={style.navigation}>
        <Container className={style.container}>
            
                <ul className={style.list}>
                    <li className={style.item}>
                        <button className={classNames(style.button,active.category === i?style.button_active: '',)}
                        style = {{backgroundImage:'url(${item.image})'}}
                        onClick ={()=>{
                            displatch(changeCategory({indexCategory:i}));
                        }}>{item.rus}</button>
                    </li>

                    <li className={style.item}>
                        <button className={classNames(style.button,style.button_snack)}>Закуски</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button,style.button_hotdog)}>Хот-доги</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button,style.button_combo)}>Комбо</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button,style.button_shawarma)}>Шаурма</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button,style.button_pizza)}>Пицца</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button,style.button_wok)}>Вок</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button,style.button_dessert)}>Десерты</button>
                    </li>
                    <li className={style.item}>
                        <button className={classNames(style.button,style.button_sauce)}>Соусы</button>
                    </li>
                </ul>
            
        </Container>
    </nav>
    );
    }