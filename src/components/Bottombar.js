export default function Bottombar(props) {
    return (
        <div className="bottomBar">
            <button className={props.buttonClass}>
                <a href={props.link} target="_blank" rel="noreferrer">
                    {props.text}
                </a>
            </button>
        </div>
    );
}
