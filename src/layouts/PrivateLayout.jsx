import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AsideMenuMain from "../Component/aside/AsideMenuMain";

Date.prototype.inString = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [
    (dd > 9 ? "" : "0") + dd,
    "/",
    (mm > 9 ? "" : "0") + mm,
    "/",
    this.getFullYear(),
  ].join("");
};
const PrivateLayout = () => {
  return (
    <>
      <AsideMenuMain />
    </>
  );
};

export default PrivateLayout;
