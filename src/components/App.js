import React from "react";
import Topbar from "./Topbar";
import Content from "./Content";
import Bottombar from "./Bottombar";
import ConfirmationScreen from "./ConfirmationScreen";

export default function App() {
    const [order, setOrder] = React.useState([]);
    const [confimationVisibility, setConfirmationVisibility] = React.useState(
        "confimationScreen hiddingClass"
    );
    return (
        <>
            <Topbar />
            <Content order={order} setOrder={setOrder} />
            <Bottombar setConfirmationVisibility={setConfirmationVisibility} />
            <ConfirmationScreen
                confimationVisibility={confimationVisibility}
                setConfirmationVisibility={setConfirmationVisibility}
            />
        </>
    );
}
