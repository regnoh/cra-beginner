import React from "react";
import FilerLink from "../../containers/FilerLink";
export const FILTERS = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};
const Footer = () => {
  return (
    <p>
      Show: <FilerLink filter={FILTERS.SHOW_ALL}>All</FilerLink>{" "}
      <FilerLink filter={FILTERS.SHOW_ACTIVE}>Active</FilerLink>{" "}
      <FilerLink filter={FILTERS.SHOW_COMPLETED}>Completed</FilerLink>
    </p>
  );
};

export default Footer;
