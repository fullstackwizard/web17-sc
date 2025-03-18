//Calculando um sorteio de 1 a 10 



 /* export default function Aleatorio({ min, max }: AleatorioProps) {  // Desestruturando as props
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    const numberDrawn = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

    return (
        <div>
            <h1>Calculando e Sorteando</h1>
            <div>
                <h2>Número mínimo: {minValue}</h2>
                <h2>Número máximo: {maxValue}</h2>
            </div>
            <div>
                <h1>O Número Sorteado da vez é: {numberDrawn}</h1>
            </div>
        </div>
    );
}
*/

import './layouts/Aleatorio.css'

const Aleatorio = (props: { min: number; max: number }) => {
    const { min, max } = props;
    const numberDrawn = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div>
            <h2>Calculando e Sorteando</h2>
            <div>
                <h2>Número mínimo: {min}</h2>
                <h2>Número máximo: {max}</h2>
            </div>
            <div>
                <h1>O Número Sorteado da vez é: {numberDrawn}</h1>
            </div>
        </div>
    );
};

export default Aleatorio;

