import styles from './FooterView.module.css';
import {useContext} from "react";
import { MobileViewContext } from "../../index";
import { Link } from 'react-router-dom';

function FooterView() {
    const isMobile = useContext(MobileViewContext);
    return (
        <>
            <img className={styles.FooterLogo} src={require('../../assets/food-truck.png')} alt='website-logo' />

            <section className={styles.ContactUs}>
                <h1 className={styles.FooterH1}>Contact Us</h1>
                <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                <p>example2020@gmail.com</p>
                <p>(904) 443-0343</p>
            </section>

            <section className={styles.MoreOptions}>
                <h1 className={styles.FooterH1}>More</h1>
                <Link href='/'>About Us</Link>
                <Link href='/'>Products</Link>
                <Link href='/'>Career</Link>
                <Link href='/'>Contact Us</Link>
            </section>

            {isMobile ?
                <section className={styles.Socials}>
                    <p className={styles.CopyrightText}>© 2022 Food Truck Example</p>
                    <div className={styles.SocialsRow}>
                        <Link><img src={require('../../assets/insta.svg').default} alt='instagram-link' /></Link>
                        <Link><img src={require('../../assets/twitter.svg').default} alt='instagram-link' /></Link>
                        <Link><img src={require('../../assets/fb.svg').default} alt='instagram-link' /></Link>
                    </div>
                </section> :
                <section className={styles.Socials}>
                    <h1 className={styles.FooterH1}>Social Links</h1>
                    <div className={styles.SocialsRow}>
                        <Link><img src={require('../../assets/insta.svg').default} alt='instagram-link' /></Link>
                        <Link><img src={require('../../assets/twitter.svg').default} alt='instagram-link' /></Link>
                        <Link><img src={require('../../assets/fb.svg').default} alt='instagram-link' /></Link>
                    </div>

                    <p className={styles.CopyrightText}>© 2022 Food Truck Example</p>
                </section>
            }
        </>
    );
}

export default FooterView;
