import { Component } from "react";
import styles from './navbar.module.css';


export default class Navbar extends Component{
    render(){
        const {cartCount} = this.props;
        return (
            <>
                <div className={styles.navbar}>
                    <div className={styles.title}>
                        Movie App
                    </div>
                    <div className={styles.cart_container}>
                        <img alt="Cart-Img" 
                            src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png" 
                            className={styles.cart_img_icon}/>
                        <span className={styles.cart_item_count}>{cartCount}</span>
                    </div>
                </div>
            </>
        )
    }
};
