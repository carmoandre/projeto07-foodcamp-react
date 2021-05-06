export default function Option(props) {
    return (
        <li
            onClick="selectUnicOption('.mealOptions', '.first')"
            class={props.class}
        >
            <img src={props.image} alt={props.alt} />
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>
                R$ <span>{props.price}</span>
            </p>
            <ion-icon
                name="checkmark-circle"
                class="hiddingClass first"
            ></ion-icon>
        </li>
    );
}
