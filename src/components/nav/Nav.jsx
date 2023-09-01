import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import instagram from '../../assets/images/social/1161953_instagram_icon.svg'
import youtube from '../../assets/images/social/5305164_play_video_youtube_youtube logo_icon.svg'
import LOGO from '../../assets/images/pub/Group 213.svg'


const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>

        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
        <Image src={LOGO} width={100} height={100} />
          <ul className="nav-links">
            <li className="nav-item">
              <Link
                href={'landing'}
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                خانه
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                href={'landing'}
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                دوره ها
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                href={'landing'}
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                اخبار  مقالات
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                href={'landing'}
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                تماس با ما
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div
              className="location"
              style={{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.2s" : "0s",
              }}
            >
              <span>تیم ری اکتیو</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0s",
                    }}
                  >
                    <Image src={instagram} width={40} height={40} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.4s" : "0s",
                    }}
                  >
                    <Image src={youtube} width={40} height={40} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;