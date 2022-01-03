import {useState} from "react";
import OnlineOrdersChild from "./OnlineOrdersChild";

const OnlineOrders =(props)=>{
    console.log(props);
    const status=[
        "Order Placed",
        "Pending",
        "preparing",
        "out of delivery",
        "delivered",
    ];

    const [value ,setValue] = useState (0);
    const onClickHandler=()=>{
        setValue(value +1);
    };
    return(
        <>
        <h1>Online Orders</h1>
        <div>Current Status: {status[value]}</div>
        <button onClick={onClickHandler} >Next Status</button>
        <OnlineOrdersChild onClickHandler ={onClickHandler} />
        </>
    );
};

export default OnlineOrders;
