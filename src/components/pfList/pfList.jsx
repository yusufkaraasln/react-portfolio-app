import React from "react";
import "./pfList.scss";
function pfList({ item, active, setSelected,id }) {
  return <li onClick={()=>setSelected(id)} className={active ? "active" : ""}>{item.title}</li>;
}

export default pfList;
