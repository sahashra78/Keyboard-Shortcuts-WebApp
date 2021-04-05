import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { Helmet } from 'react-helmet';
import Windows from './Static/Images/microsoft.svg';
import Mac from './Static/Images/apple.svg';


export const Home = () => {
    return (
        <>
            <Helmet>
                <title>Keyboard Shortcuts</title>
            </Helmet>
            <header className="heroSection">
                <div className="heroContent">
                    <p className="subContent">Be Efficient and Save Time with</p>
                    <div className="mainContent">Short <span className="sign">+</span> Cut <span>+</span> Keys</div>
                </div>
                <Scroll to="os" spy={true} smooth={true}>
                    <div class="scrollDownBox">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Scroll>
            </header>
            <section id="os">
                <Link to="/windows">
                    <aside>
                        <img src={Windows} alt="Microsoft logo" />
                        <h2>Windows</h2>
                    </aside>
                </Link>
                <Link to="/mac">
                    <aside>
                        <img src={Mac} alt="Apple logo" />
                        <h2>MacOS</h2>
                    </aside>
                </Link>
            </section>
        </>
    )
}
