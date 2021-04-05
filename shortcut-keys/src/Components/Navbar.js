import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export const Navigation = () => {
    const [logoColor, setLogoColor] = useState("#94e4fb");

    onscroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            setLogoColor("#272727");
        }
        else {
            setLogoColor("#94e4fb");
        }
    }
    return (
        <>
            <nav>
                <Link to="/" className="link">
                    <p className="logo" style={{ color: logoColor }}>Shortcut<br />Keys</p>
                </Link>
            </nav>
        </>
    )
}

