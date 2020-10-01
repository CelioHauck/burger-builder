import React , { FunctionComponent } from "react";

import classes from "./style.module.css";

const Layout:FunctionComponent<{}> = (props) => {
    return (
        <React.Fragment>
            <div>
                Toolbar,SideDrawerm, backdrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default Layout;