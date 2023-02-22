import classNames from "classnames";
import style from "./container.module.css";


export const Container =({className, children}) =>{
    //console.log('props:',props);
    return( 
        <div className={classNames(style.Container,className)}>
            {children}    
        </div>
    );
    }

