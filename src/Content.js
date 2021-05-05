import Option from "./Option";

export default function Content() {
    return (
        <div class="content">
            <p>Primeiro, seu prato</p>
            <ul>
                <Option />
                <li
                    onclick="selectUnicOption('.mealOptions', '.second')"
                    class="mealOptions second whiteBorder"
                >
                    <img
                        src="images/isca-de-peixe-frito.jpg"
                        alt="Travessa com peixe empanado em iscas"
                    />
                    <p>Peixe Frito</p>
                    <p>250g de iscas empanadas em fubá</p>
                    <p>
                        R$ <span>21,00</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass second"
                    ></ion-icon>
                </li>
                <li
                    onclick="selectUnicOption('.mealOptions', '.third')"
                    class="mealOptions third whiteBorder"
                >
                    <img
                        src="images/Ometele-de-frios-com-cebolinha-e-salsa-1.jpg"
                        alt="Omelete recheado com presunto, muçarela e temperos frescos"
                    />
                    <p>Omelete de frios</p>
                    <p>Presunto, muçarela, salsa e cebolinha</p>
                    <p>
                        R$ <span>18,60</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass third"
                    ></ion-icon>
                </li>
                <li
                    onclick="selectUnicOption('.mealOptions', '.fourth')"
                    class="mealOptions fourth whiteBorder"
                >
                    <img
                        src="images/bife e batata.jpg"
                        alt="Arroz, feijão, bife de boi e batata frita em palito"
                    />
                    <p>Prato Feito 1</p>
                    <p>Arroz, feijão, bife de boi e batata frita</p>
                    <p>
                        R$ <span>22,00</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass fourth"
                    ></ion-icon>
                </li>
            </ul>
            <p>Agora, sua bebida</p>
            <ul>
                <li
                    onclick="selectUnicOption('.drinkOptions', '.first')"
                    class="drinkOptions first whiteBorder"
                >
                    <img
                        src="images/guarana comum e zero.jpg"
                        alt="Duas latas de guaraná antarctica, uma tradicional e uma zero açúcar"
                    />
                    <p>Guaraná Antarctica</p>
                    <p>Lata 350ml - Comum ou Zero</p>
                    <p>
                        R$ <span>6,50</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass first"
                    ></ion-icon>
                </li>
                <li
                    onclick="selectUnicOption('.drinkOptions', '.second')"
                    class="drinkOptions second whiteBorder"
                >
                    <img
                        src="images/latas-coca-cola-natal_2018_ok-e1543862115938.jpg"
                        alt="Duas latas de coca-cola, uma tradicional e uma zero açúcar"
                    />
                    <p>Coca Cola</p>
                    <p>Lata 350ml - Comum ou Zero</p>
                    <p>
                        R$ <span>7,10</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass second"
                    ></ion-icon>
                </li>
                <li
                    onclick="selectUnicOption('.drinkOptions', '.third')"
                    class="drinkOptions third whiteBorder"
                >
                    <img
                        src="images/mate-couro.jpg"
                        alt="Duas garrafas pet de mate couro, uma tradicional e uma zero açúcar"
                    />
                    <p>Mate Couro</p>
                    <p>Pet 1L - Comum ou Zero</p>
                    <p>
                        R$ <span>4,90</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass third"
                    ></ion-icon>
                </li>
                <li
                    onclick="selectUnicOption('.drinkOptions', '.fourth')"
                    class="drinkOptions fourth whiteBorder"
                >
                    <img
                        src="images/guaraná-jesus.jpg"
                        alt="uma lata de guaraná jesus"
                    />
                    <p>Guaraná Jesus</p>
                    <p>Lata 350ml - Produto Maranhense</p>
                    <p>
                        R$ <span>5,50</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass fourth"
                    ></ion-icon>
                </li>
            </ul>
            <p>Por fim, sua sobremesa</p>
            <ul>
                <li
                    onclick="selectUnicOption('.dessertOptions', '.first')"
                    class="dessertOptions first whiteBorder"
                >
                    <img
                        src="images/bolo de pote sensação.jpg"
                        alt="bolo de chocolate com creme de morango enformado em pode plastico cilíndrico"
                    />
                    <p>Bolo de pote</p>
                    <p>Sensação (morango com chocolate)</p>
                    <p>
                        R$ <span>12,40</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass first"
                    ></ion-icon>
                </li>
                <li
                    onclick="selectUnicOption('.dessertOptions', '.second')"
                    class="dessertOptions second whiteBorder"
                >
                    <img
                        src="images/petit-gateau-1200x774.jpg"
                        alt="uma cola de sorvete de creme sevida em um brato com bolo de chocolate"
                    />
                    <p>Petit Gâteau</p>
                    <p>Sorvete de creme, bolo de chocolate</p>
                    <p>
                        R$ <span>14,20</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass second"
                    ></ion-icon>
                </li>
                <li
                    onclick="selectUnicOption('.dessertOptions', '.third')"
                    class="dessertOptions third whiteBorder"
                >
                    <img
                        src="images/torta de limão.jpg"
                        alt="fatia de torta de limão com merengue em um prato"
                    />
                    <p>Torta de Limão</p>
                    <p>Torta de limão com merengue (fatia)</p>
                    <p>
                        R$ <span>13,60</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass third"
                    ></ion-icon>
                </li>
                <li
                    onclick="selectUnicOption('.dessertOptions', '.fourth')"
                    class="dessertOptions fourth whiteBorder"
                >
                    <img
                        src="images/mousse de maracujá.jpg"
                        alt="mousse de maracujá com calda de maracujá por cima enformada em vasilha plástica em formado similar a uma meia esfera"
                    />
                    <p>Mousse de Maracujá</p>
                    <p>Mousse e calda feitas da fruta</p>
                    <p>
                        R$ <span>11,80</span>
                    </p>
                    <ion-icon
                        name="checkmark-circle"
                        class="hiddingClass fourth"
                    ></ion-icon>
                </li>
            </ul>
        </div>
    );
}
