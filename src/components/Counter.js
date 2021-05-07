export default function Counter(props) {
    const { counter, setCounter, counterClass, setSelection } = props;

    function addOne() {
        setCounter(counter + 1);
        props.option.quantity = counter + 1;
        props.setOrder([...props.order]);
    }
    function removeOne() {
        if (counter === 1) {
            setSelection("whiteBorder");
        }
        setCounter(counter - 1);
        props.option.quantity = counter - 1;
        props.setOrder([...props.order]);
    }
    return (
        <p
            className={
                counterClass === true ? "counter" : "counter hiddingClass"
            }
        >
            <span onClick={removeOne}>- </span>
            <span> {counter} </span>
            <span onClick={addOne}> +</span>
        </p>
    );
}
