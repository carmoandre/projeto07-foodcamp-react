import React from "react";
import Counter from "./Counter";

export default function Option(props) {
    const [counter, setCounter] = React.useState(props.option.quantity);
    const [selection, setSelection] = React.useState("whiteBorder");
    function selectOption() {
        if (counter === 0) {
            setCounter(1);
            props.option.quantity = 1;
            props.setOrder([...props.order]);
            setSelection("");
        }
    }
    return (
        <li onClick={selectOption} className={selection}>
            <img src={props.option.image} alt={props.option.alt} />
            <p>{props.option.name}</p>
            <p>{props.option.description}</p>
            <div>
                <p>
                    R$ <span>{props.option.price}</span>
                </p>
                <Counter
                    option={props.option}
                    order={props.order}
                    setOrder={props.setOrder}
                    counter={counter}
                    setCounter={setCounter}
                    counterClass={selection === "" ? true : false}
                    setSelection={setSelection}
                />
            </div>
        </li>
    );
}
