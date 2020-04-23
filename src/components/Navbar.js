import React, { Component } from 'react';
import { Link } from 'gatsby';
import donateButton from '../img/donate.svg';

import ggLogo from '../img/gg-logo.png';

class Navbar extends Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <div>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="navbar-brand">
            <Link to="/" title="Logo" class="navbar-item">
              <img
                src={ggLogo}
                alt="gathering growth logo"
                className="gg-logo"
              />
            </Link>
            <div
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to="/archive">
                Archive
              </Link>
              <Link className="navbar-item" to="/video">
                Video
              </Link>
              <Link className="navbar-item" to="/search">
                Search
              </Link>
              <Link className="navbar-item" to="/info">
                About
              </Link>
              <Link className="navbar-item" to="/donate">
                <img
                  className="donateButton"
                  src={donateButton}
                  alt="donate button"
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
