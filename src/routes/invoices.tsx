import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";
import QueryNavLink from "./queryNavLink";

type Props = {};

const Invoices = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            const filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => {
            return (
              <QueryNavLink
                style={({ isActive }) => ({ display: "block", margin: "1rem 0", color: isActive ? "red" : "" })}
                to={`/invoices/${invoice.number}`}
                key={invoice.name}
              >
                {invoice.name}
              </QueryNavLink>
            );
          })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
