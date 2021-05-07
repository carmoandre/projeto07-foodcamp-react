import React from "react";
import { mealOptions, drinkOptions, dessertOptions } from "./OptionsData";
import Topbar from "./Topbar";
import Content from "./Content";
import Bottombar from "./Bottombar";
import { buildOrderLink } from "./WhatsAppLinkBuilder";

export default function App() {
    const [order, setOrder] = React.useState([
        mealOptions,
        drinkOptions,
        dessertOptions,
    ]);
    const hasAllCategories = canEnableButton();

    function canEnableButton() {
        const mealsOrdered = order[0].filter((option) => option.quantity > 0);
        const drinksOrdered = order[1].filter((option) => option.quantity > 0);
        const dessertsOrdered = order[2].filter(
            (option) => option.quantity > 0
        );
        const finalOrder = [mealsOrdered, drinksOrdered, dessertsOrdered];
        return (
            mealsOrdered.length &&
            drinksOrdered.length &&
            dessertsOrdered.length &&
            finalOrder
        );
    }

    return (
        <>
            <Topbar />
            <Content order={order} setOrder={setOrder} />
            <Bottombar
                buttonClass={
                    hasAllCategories !== 0
                        ? "bottomBarButton enabledButton"
                        : "bottomBarButton"
                }
                text={
                    hasAllCategories !== 0
                        ? "Fechar pedido"
                        : "Selecione os 3 itens para fechar o pedido"
                }
                link={
                    hasAllCategories !== 0
                        ? buildOrderLink(hasAllCategories)
                        : ""
                }
                finalOrder={hasAllCategories}
            />
        </>
    );
}
