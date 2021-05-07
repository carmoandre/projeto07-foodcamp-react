export default function Bottombar(props) {
    function showCofnirmationScreen() {
        props.setConfirmationVisibility("confimationScreen");
    }
    return (
        <div class="bottomBar">
            <button class="bottomBarButton" onclick="resquestClientInfo()">
                Selecione os 3 itens para fechar o pedido
            </button>
        </div>
    );
}
