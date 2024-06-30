"use client"
import styles from "./Footer.module.css";
import React from "react";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a className={styles.styledgithublink}
                target="_blank"
                rel="nofollow noopener noreferrer">
                <div>
                    {/* Designed &amp; Built by <strong>Nitin Sontineni</strong> */}
                    All is well
                </div>
            </a>
        </div>
    );
};

export default Footer;
