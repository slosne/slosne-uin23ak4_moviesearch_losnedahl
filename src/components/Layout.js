import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <header>
        <Link to="/" className="link">
          <h1>Moviefinder</h1>
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; Stine Losnedahl</p>
      </footer>
    </div>
  );
}
