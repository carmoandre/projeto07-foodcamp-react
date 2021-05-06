import Option from "./Option";
import { mealOptions, drinkOptions, dessertOptions } from "./OptionsData";

export default function Content() {
    return (
        <div class="content">
            <p>Primeiro, seu prato</p>
            <ul>
                {mealOptions.map((option) => (
                    <Option
                        image={option.image}
                        alt={option.alt}
                        name={option.name}
                        description={option.description}
                        price={option.price}
                    />
                ))}
            </ul>
            <p>Agora, sua bebida</p>
            <ul>
                {drinkOptions.map((option) => (
                    <Option
                        image={option.image}
                        alt={option.alt}
                        name={option.name}
                        description={option.description}
                        price={option.price}
                    />
                ))}
            </ul>
            <p>Por fim, sua sobremesa</p>
            <ul>
                {dessertOptions.map((option) => (
                    <Option
                        image={option.image}
                        alt={option.alt}
                        name={option.name}
                        description={option.description}
                        price={option.price}
                    />
                ))}
            </ul>
        </div>
    );
}
