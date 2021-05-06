export default function Counter(props) {
    const {
        counter,
        setCounter,
        counterClass,
        setCounterClass,
        setSelection,
        optionClass,
    } = props;

    function addOne() {
        setCounter(counter + 1);
    }
    function removeOne() {
        if (counter === 1) {
            setSelection("whiteBorder");
            setCounterClass("counter hiddingClass");
        }
        setCounter(counter - 1);
    }
    return (
        <p class={counterClass}>
            <span onClick={removeOne}>- </span>
            <span> {counter} </span>
            <span onClick={addOne}> +</span>
        </p>
    );
}
