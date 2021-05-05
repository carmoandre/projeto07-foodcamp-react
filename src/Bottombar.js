export default function Bottombar() {
    return (
        <div class="bottomBar">
            <button
                class="bottomBarButton"
                onclick="resquestClientInfo()"
                disabled
            >
                Selecione os 3 itens para fechar o pedido
            </button>
        </div>
    );
}
