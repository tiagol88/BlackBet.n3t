
function simularIA() {
    const resultados = [
        "Vitória do Time A com 2 gols",
        "Empate no primeiro tempo",
        "Mais de 2.5 gols",
        "Ambos marcam: SIM",
        "Menos de 3 escanteios no 1º tempo"
    ];
    const aleatorio = resultados[Math.floor(Math.random() * resultados.length)];
    document.getElementById("resultado").innerText = "Previsão da IA: " + aleatorio;
}
