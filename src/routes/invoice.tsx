import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Invoice = (props: Props) => {
  let params = useParams();
  return <h2>Invoice: {params.invoiceId}</h2>;
};

export default Invoice;
