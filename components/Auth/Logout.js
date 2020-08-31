import React from "react";
import Router from "next/router";

const LogoutBtn = ({ logoutHandler }) => (
  <button id="qsLogoutBtn" onClick={() => Router.push("/api/logout")}>
    Log Out
  </button>
);

export default LogoutBtn;
