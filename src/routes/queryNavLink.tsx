import React from "react";
import { useLocation, NavLink, NavLinkProps } from "react-router-dom";

type Props = {
  to: string;
};

const QueryNavLink = ({ to, ...props }: Props & NavLinkProps) => {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
};

export default QueryNavLink;
