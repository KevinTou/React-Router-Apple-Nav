import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            {/* Apple Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="44"
              viewBox="0 0 16 44"
            >
              <path
                d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31"
                fill="#fff"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link to="/mac">Mac</Link>
        </li>

        <li>
          <Link to="/ipad">iPad</Link>
        </li>

        <li>
          <Link to="/iphone">iPhone</Link>
        </li>

        <li>
          <Link to="/watch">Watch</Link>
        </li>

        <li>
          <Link to="/tv">TV</Link>
        </li>

        <li>
          <Link to="/music">Music</Link>
        </li>

        <li>
          <Link to="/support">Support</Link>
        </li>

        <li>
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="44"
            viewBox="0 0 16 44"
          >
            <path
              d="M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 0 1-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z"
              fill="#fff"
            />
          </svg>
        </li>

        <li>
          {/* Bag Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="44"
            viewBox="0 0 14 44"
          >
            <path
              d="M12.5 15h-1.81c-.28-1.86-2.04-3-3.69-3s-3.42 1.14-3.69 3H1.5c-.83 0-1.5.67-1.5 1.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5zM7 13c1.18 0 2.43.75 2.7 2H4.3c.27-1.25 1.52-2 2.7-2zm6 14.5c0 .28-.22.5-.5.5h-11c-.28 0-.5-.22-.5-.5v-11c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11z"
              fill="#fff"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
