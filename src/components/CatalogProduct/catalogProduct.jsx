import style from './catalogProduct.module.css';

export const CatalogProduct =({item})=>(
    <article className={style.product}>
        <img src="../../assets/img/photo-5.jpg" alt={item} className="product__image"/>

        <p className={style.price}>{item.price}<span className="currency">₽</span></p>

        <h3 className={style.title}>
            <button className={style.detail}>{item}</button>
        </h3>

        <p className={style.weight}>{item.weight}</p>

        <button className={style.add} type="button">Добавить</button>
    </article>
);
