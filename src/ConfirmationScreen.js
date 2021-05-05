export default function ConfirmationScreen() {
    return (
        <div class="confimationScreen hiddingClass">
            <div class="confirmationModal">
                <p>Confirme seu pedido</p>
                <span class="meal">
                    <p>Refeição</p>
                    <p>Valor</p>
                </span>
                <span class="drink">
                    <p>Bebida</p>
                    <p>Valor</p>
                </span>
                <span class="dessert">
                    <p>Sobremesa</p>
                    <p>Valor</p>
                </span>
                <span class="total">
                    <p>TOTAL</p>
                    <p>R$ Valor</p>
                </span>
                <button class="sentOrderButton">
                    <a href="" target="_blank">
                        Tudo certo, pode pedir!
                    </a>
                </button>
                <button onclick="cancelModalAction()">Cancelar</button>
            </div>
        </div>
    );
}
