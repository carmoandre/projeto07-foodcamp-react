function buildOrderLink(order) {
    return "https://wa.me/5531991600044?text=" + buildOrderEncodedText(order);
}

function buildOrderEncodedText(order) {
    let orderPrice = calculateTotalPrice(order);

    console.log(`Preço total: ${orderPrice}`);
    orderPrice = orderPrice.toFixed(2).toString().replace(".", ",");
    console.log(`Preço convertido pra string: ${orderPrice}`);

    const url = `
        Olá, gostaria de fazer o pedido:\n- Pratos: 
        ${order[0].map(printChosen)} 
        \n\n- Bebidas:
        ${order[1].map(printChosen)}
        \n\n- Sobremesas:
        ${order[2].map(printChosen)}
        \n\nTOTAL: R$ ${orderPrice}
    `;

    const encodedURL = encodeURIComponent(url);

    return encodedURL;
}

function calculateTotalPrice(order) {
    const list = [...order[0], ...order[1], ...order[2]];
    const totalPrice = list.reduce(
        (total, item) =>
            (total += Number(item.price.replace(",", ".")) * item.quantity),
        0
    );
    console.log(list);
    return totalPrice;
}

function printChosen(item) {
    const moreThenOne = item.quantity > 1 ? `(${item.quantity}x)` : "";
    return `\n    - ${item.name}  ${moreThenOne}`;
}

export { buildOrderLink };
