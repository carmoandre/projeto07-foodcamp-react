export default function Bottombar(props) {
    console.log(props.finalOrder);
    return (
        <div class="bottomBar">
            <button className={props.buttonClass}>{props.text}</button>
        </div>
    );
}
