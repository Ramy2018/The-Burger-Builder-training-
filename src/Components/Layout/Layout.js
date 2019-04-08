import React from "react";
import Auxilary from "../../hoc/Auxilary";
import Classes from "./Layout.module.css";

const layout = props => (
  <Auxilary>
    <div>Tool, SideDrawer,Backdrop</div>
    <main className={Classes.content}>{props.children}</main>
  </Auxilary>
);

export default layout;
