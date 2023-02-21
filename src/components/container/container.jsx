import style from "./container.module.css";
import classNames from "classnames";

export const Container =({ children,className }) =>(
    console.log('props:',props);
    return( 
        <div className={classNames=([style.container,className])}>
        {children}    
        </div>
    );)
    

