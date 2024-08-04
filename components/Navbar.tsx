import Link from "next/link";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";
import useCursor from "@/hooks/useCursor";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(min-width: 768px)");
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

  useEffect(() => {
    if (matches) {
      cursorRef.current?.classList.remove("hidden");
    } else {
      cursorRef.current?.classList.add("hidden");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches]);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navHeight = navRef.current?.offsetHeight;
        const scrollY = window.scrollY;
        const scrollThreshold = navHeight * 0.1;

        if (scrollY >= scrollThreshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    handleScroll(); // Call initially to check if the page is already scrolled
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navRef}
      id="navbar"
      style={{
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
          : undefined,
      }}
      className={styles.header}
    >
      <span>
        <Link
          href="/"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          /KS.
        </Link>
      </span>
      <nav>
        <ul>
          <li>
            <Link
              href="#home"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              experience
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
