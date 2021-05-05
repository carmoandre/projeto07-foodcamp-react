export default function Option() {
    return (
        <li
            onclick="selectUnicOption('.mealOptions', '.first')"
            class="mealOptions first whiteBorder"
        >
            <img src="images/feijoada.jpg" alt="Panela com feijoada" />
            <p>Feijoada</p>
            <p>Feijão preto com carne de porco</p>
            <p>
                R$ <span>19,90</span>
            </p>
            <ion-icon
                name="checkmark-circle"
                class="hiddingClass first"
            ></ion-icon>
        </li>
    );
}
