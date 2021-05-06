export default function Counter(props) {
    function addOne() {}
    function removeOne() {}
    return (
        <div>
            <span onClick>-</span>
            <span>{props.quantity}</span>
            <span onClick>+</span>
        </div>
    );
}
