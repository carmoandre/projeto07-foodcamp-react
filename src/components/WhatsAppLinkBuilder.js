function callConfirmationScreen() {
    const totalPrice =
        Number(selectedMeal[3].replace(",", ".")) +
        Number(selectedDrink[3].replace(",", ".")) +
        Number(selectedDessert[3].replace(",", "."));

    document.querySelector(".meal p:first-child").innerHTML = selectedMeal[2];
    document.querySelector(".meal p:last-child").innerHTML = selectedMeal[3];
    document.querySelector(".drink p:first-child").innerHTML = selectedDrink[2];
    document.querySelector(".drink p:last-child").innerHTML = selectedDrink[3];
    document.querySelector(".dessert p:first-child").innerHTML =
        selectedDessert[2];
    document.querySelector(".dessert p:last-child").innerHTML =
        selectedDessert[3];

    orderPrice = "R$ " + totalPrice.toFixed(2).toString().replace(".", ",");

    document.querySelector(".total p:last-child").innerHTML = orderPrice;

    document
        .querySelector(".confimationScreen")
        .classList.remove("hiddingClass");

    buildOrderLink();
}

function buildOrderLink() {
    document.querySelector("a").href =
        "https://wa.me/5531991600044?text=" + buildOrderEncodedText();
}

function buildOrderEncodedText() {
    const url =
        "Olá, gostaria de fazer o pedido:\n- Prato: " +
        selectedMeal[2] +
        "\n- Bebida: " +
        selectedDrink[2] +
        "\n- Sobremesa: " +
        selectedDessert[2] +
        "\n\nTotal: " +
        orderPrice +
        "\n\nNome: " +
        personalClientInfo[0] +
        "\nEndereço: " +
        personalClientInfo[1];
    const encodedURL = encodeURIComponent(url);

    return encodedURL;
}
