import style from './catalogProduct.module.css';

export const CatalogProduct =(props)=>(
    <article className={style.product}>
        <img src="../../assets/img/photo-5.jpg" alt={props.title} className="product__image"/>

        <p className={style.price}>{props.price}<span className="currency">₽</span></p>

        <h3 className={style.title}>
            <button className={style.detail}>{props.title}</button>
        </h3>

        <p className={style.weight}>{props.weight}</p>

        <button className={style.add} type="button">Добавить</button>
    </article>
);
