import React from "react";
import Counter from "./Counter";

export default function Option(props) {
    const [counter, setCounter] = React.useState(0);
    const [counterClass, setCounterClass] = React.useState(
        "counter hiddingClass"
    );
    const [selection, setSelection] = React.useState("whiteBorder");
    function selectOption() {
        if (counter === 0) {
            setCounter(1);
            setSelection("");
            setCounterClass("counter ");
        }
    }
    return (
        <li onClick={selectOption} class={selection}>
            <img src={props.image} alt={props.alt} />
            <p>{props.name}</p>
            <p>{props.description}</p>
            <div>
                <p>
                    R$ <span>{props.price}</span>
                </p>
                <Counter
                    counter={counter}
                    setCounter={setCounter}
                    counterClass={counterClass}
                    setCounterClass={setCounterClass}
                    setSelection={setSelection}
                />
            </div>
        </li>
    );
}
