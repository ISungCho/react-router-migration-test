import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

type Props = {};

const invoices = (props: Props) => {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => {
          return (
            <Link style={{ display: "block", margin: "1rem 0" }} to={`/invoices/${invoice.number}`} key={invoice.name}>
              {invoice.name}
            </Link>
          );
        })}
      </nav>
      <Outlet/>
    </div>
  );
};

export default invoices;
