import React from "react";
import StaggerAnimation from "./StaggerAnimation";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import useCursor from "@/hooks/useCursor";
import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const cursorRef = useCursor();

  const handleMouseEnter: MouseEventHandler = (e) => {
    e.preventDefault();
    if (cursorRef.current == null) return;
    cursorRef.current.classList.add("hover");
  };

  const handleMouseLeave: MouseEventHandler = (e) => {
    e.preventDefault();
    if (cursorRef.current == null) return;
    cursorRef.current.classList.remove("hover");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        <div>
          <StaggerAnimation customNumber={0}>
            <h1>Krishna Singh</h1>
          </StaggerAnimation>
          <StaggerAnimation customNumber={1}>
            <h2>Frontend developer</h2>
          </StaggerAnimation>
        </div>
        <div className={styles.contactContainer}>
          <StaggerAnimation customNumber={0}>
            <h1>
              Phone : <Link href="tel:+917225965651">+917225965651</Link>
            </h1>
          </StaggerAnimation>
          <StaggerAnimation customNumber={1}>
            <h1>
              Email :{" "}
              <Link href="mailto:krishnasingh200113@gmail.com">
                krishnasingh200113@gmail.com
              </Link>
            </h1>
          </StaggerAnimation>
        </div>
      </div>

      <ul>
        <StaggerAnimation customNumber={0}>
          <li>
            <Link
              href="https://www.linkedin.com/in/krishna-singh13/"
              rel="noreferrer"
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaLinkedinIn />
            </Link>
          </li>
        </StaggerAnimation>

        <StaggerAnimation customNumber={1}>
          <li>
            <Link
              href="https://twitter.com/Krishna53549410"
              rel="noreferrer"
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaXTwitter />
            </Link>
          </li>
        </StaggerAnimation>

        <StaggerAnimation customNumber={2}>
          <li>
            <Link
              href="https://github.com/Krishnasingh13"
              rel="noreferrer"
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FaGithub />
            </Link>
          </li>
        </StaggerAnimation>
      </ul>

      <div className={styles.contactContainer}>
        <h1>
          Phone : <Link href="tel:+917225965651">+917225965651</Link>
        </h1>
        <h1>
          Email :{" "}
          <Link href="mailto:krishnasingh200113@gmail.com">
            krishnasingh200113@gmail.com
          </Link>
        </h1>
      </div>
      <div className={styles.bottomContainer}>
        <div style={{ width: "100%" }}>
          <StaggerAnimation customNumber={0}>
            <span className={styles.developer}>DEVELOPER</span>
          </StaggerAnimation>
        </div>
        <div className={styles.actionContainer}>
          <StaggerAnimation customNumber={0}>
            <Link
              href="#home"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Back To Top <FaArrowUp />
            </Link>
          </StaggerAnimation>
          <StaggerAnimation customNumber={1}>
            <span
              style={{
                float: "right",
                fontWeight: "bold",
                marginTop: "0",
                textWrap: "nowrap",
              }}
            >
              ©2024 Krishna Singh. all rights reserved.
            </span>
          </StaggerAnimation>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
