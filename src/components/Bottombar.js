export default function Bottombar(props) {
    return (
        <div class="bottomBar">
            <button className={props.buttonClass}>
                <a href={props.link} target="_blank">
                    {props.text}
                </a>
            </button>
        </div>
    );
}
