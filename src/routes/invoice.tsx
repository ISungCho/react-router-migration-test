import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

type Props = {};

const Invoice = (props: Props) => {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId || "", 10)) || {
    amount: "",
    name: "",
    number: 0,
    due: 0,
  };
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
};

export default Invoice;
