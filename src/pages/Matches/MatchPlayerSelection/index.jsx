import React from "react";
import { useLocation } from "react-router-dom";

export default function MatchPlayerSelection() {
  const location = useLocation();
  console.log(location);
  return <div>MatchPlayerSelection</div>;
}
