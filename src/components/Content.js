import Option from "./Option";

export default function Content(props) {
    function constructHTMLItems(option, index) {
        return (
            <Option
                key={index}
                option={option}
                order={props.order}
                setOrder={props.setOrder}
            />
        );
    }
    return (
        <div className="content">
            <p>Primeiro, seu prato</p>
            <ul>{props.order[0].map(constructHTMLItems)}</ul>
            <p>Agora, sua bebida</p>
            <ul>{props.order[1].map(constructHTMLItems)}</ul>
            <p>Por fim, sua sobremesa</p>
            <ul>{props.order[2].map(constructHTMLItems)}</ul>
        </div>
    );
}
