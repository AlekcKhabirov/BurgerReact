import classNames from 'classnames';
import style from './navigation.module.css';

export const Navigation =()=>(
    return(
    <nav className={style.navigation}>
        <div className={style.container}>
            <ul className={style.list}>
            <li className={style.item}>
                <button className={classNames(style.button,button_burger, style.button_active)}>Бургеры</button>
            </li>
            <li className={style.item}>
                <button className={classNames(style.button,button__snack)}>Закуски</button>
            </li>
            <li className={style.item}>
                <button className={classNames(style.button,button_hotdog)}>Хот-доги</button>
            </li>
            <li className={style.item}>
                <button className={classNames(style.button,button__combo)}>Комбо</button>
            </li>
            <li className={style.item}>
                <button className={classNames(style.button,button__shawarma)}>Шаурма</button>
            </li>
            <li className={style.item}>
                <button className={classNames(style.button,button__pizza)}>Пицца</button>
            </li>
            <li className={style.item}>
                <button className={classNames(style.button,button__wok)}>Вок</button>
            </li>
            <li className={style.item}>
                <button className={classNames(style.button,button__dessert)}>Десерты</button>
            </li>
            <li className={style.item}>
                <button className={classNames(style.button,button__sauce)}>Соусы</button>
            </li>
            </ul>
        </div>
    </nav>
    )
)