import { Link } from "react-router-dom";
import "./Nav.css"
import { AiFillGithub } from 'react-icons/ai';
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { focusNav, listPageReLoading } from "../atom/Atom";
import navList from "../atom/NavList";

function Navs() {

  let last_known_scroll_position = 0;
  let ticking = false;

  const [changing, setChanging] = useState(false);
  const [scrolling, setScrolling] = useState(false)


  const pageReLoading = useSetRecoilState(listPageReLoading)
  const [focusPath, setFocusPath] = useRecoilState(focusNav);




  window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      this.window.requestAnimationFrame(function () {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });

  const doSomething = (scroll_pos) => {
    if (scroll_pos >= 10) {
      setChanging(true);
      setScrolling(true);
    } else {
      setChanging(false);
      setScrolling(false);
    }
  }


  const onMouseOverOut = () => {
    if (scrolling)
      return;
    setChanging(current => !current);
  }


  const optionOnClick = () => {
    pageReLoading(true);
    console.log(focusPath);
  }


  return <div>
    <nav onMouseOver={onMouseOverOut} onMouseOut={onMouseOverOut} style={changing
      ? { backgroundColor: "#845EC2", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }
      : { backgroundColor: "transparent" }} className="nav_container">
      <div className="nav__title">
        <Link to="/" onClick={() => setFocusPath("")}><strong>NETFLEX</strong></Link>
      </div>
      <ul className="nav__option_list">
        {navList.map(({ title, path }) => {
          return <li>
            <Link to={`/list/${path}/1`} onClick={focusPath !== path?  optionOnClick : null} style={focusPath !== path ? null : {color: "#dcb0ff"}}> 
              {title}
            </Link>
          </li>
        })}
      </ul>

      <ul className="nav__icon_list">
        <li><a href="https://twitter.com/?lang=ko" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
      </ul>
    </nav>
  </div >


}

export default Navs;