import React from "react";
import { Outlet, Link } from "react-router-dom";
import AuthStatus from "../auth/authStatus";

function PublicPage() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <AuthStatus />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link> | <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default PublicPage;
