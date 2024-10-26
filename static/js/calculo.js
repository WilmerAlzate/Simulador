// Definir los porcentajes de la matriz energética en Colombia (valores aproximados)
const matrizEnergetica = {
    hidroelectrica: 70, // 70% de la energía proviene de hidroeléctricas
    termica: 20,        // 20% proviene de plantas térmicas (carbón, gas, etc.)
    eolica: 5,          // 5% proviene de energía eólica
    solar: 3,           // 3% proviene de energía solar
    otras: 2            // 2% de otras fuentes (biomasa, geotérmica, etc.)
};

function calcularPorcentajes() {
    // Obtenengo el dato que me da el usuario en kws
    const consumo = parseFloat(document.getElementById("consumo").value);
    if (isNaN(consumo) || consumo <= 0) {
        alert("Por favor, ingrese un valor de consumo válido.");
        return;
    }

    // Sacando  el calculo en base a los datos
    const hidroelectrica = (consumo * matrizEnergetica.hidroelectrica) / 100;
    const termica = (consumo * matrizEnergetica.termica) / 100;
    const eolica = (consumo * matrizEnergetica.eolica) / 100;
    const solar = (consumo * matrizEnergetica.solar) / 100;
    const otras = (consumo * matrizEnergetica.otras) / 100;

    // Aqui se le meten los datos al  Html con inner
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
       
    <div id="resultadoscalc">
    <h2>Resultados del Consumo Energético</h2>
        <p>Consumo total ingresado: ${consumo} kWh</p>
        <ul>
            <li>Hidroeléctrica: ${hidroelectrica.toFixed(2)} kWh (${matrizEnergetica.hidroelectrica}%)</li>
            <li>Térmica: ${termica.toFixed(2)} kWh (${matrizEnergetica.termica}%)</li>
            <li>Eólica: ${eolica.toFixed(2)} kWh (${matrizEnergetica.eolica}%)</li>
            <li>Solar: ${solar.toFixed(2)} kWh (${matrizEnergetica.solar}%)</li>
            <li>Otras fuentes: ${otras.toFixed(2)} kWh (${matrizEnergetica.otras}%)</li>
        </ul>
        </div>
    `;


}

// Cuando se aprieta submit. se hace los calculos llamando a la funcion
document.getElementById("simulador-form").addEventListener("submit", function(event) {
    event.preventDefault(); //  evita que se envie el formulario
    calcularPorcentajes();  // llama la funcion que se ejecuta.
});
