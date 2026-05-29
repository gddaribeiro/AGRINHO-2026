(script.js) function calcularImpacto() {
    // 1. Pega o valor digitado pelo usuário no HTML
    const consumoInput = document.getElementById('consumo').value;
    const resultadoDiv = document.getElementById('resultado');

    // 2. Validação simples: o usuário digitou algo válido?
    if (consumoInput === "" || consumoInput <= 0) {
        resultadoDiv.className = ""; // Remove a classe que esconde
        resultadoDiv.style.borderColor = "#ffcdd2";
        resultadoDiv.style.backgroundColor = "#ffebee";
        resultadoDiv.innerHTML = "<strong style='color: #c62828;'>Por favor, digite um valor de consumo válido maior que zero!</strong>";
        return; 
    }

    // 3. Lógica do Cálculo Ambiental
    // Em média, cada 100 kWh de energia solar economiza CO2 equivalente ao plantio de cerca de 0.5 árvore por ano.
    const consumo = parseFloat(consumoInput);
    const arvoresSalvas = (consumo * 0.005 * 12).toFixed(1); 
    const co2Evitado = (consumo * 0.3).toFixed(1); // Estimativa de kg de CO2 evitados por mês

    // 4. Mostra o resultado na tela alterando o HTML dinamicamente
    resultadoDiv.className = ""; // Mostra a div (remove o 'escondido')
    resultadoDiv.style.borderColor = "#c8e6c9";
    resultadoDiv.style.backgroundColor = "#e8f5e9";
    
    resultadoDiv.innerHTML = `
        <h3>Excelente escolha! 🌱</h3>
        <p>Ao mudar para energia solar, você evitaria a emissão de cerca de <strong>${co2Evitado} kg</strong> de CO₂ por mês.</p>
        <p>Isso equivale a plantar aproximadamente <strong>${arvoresSalvas} árvores</strong> por ano!</p>
        <p><em>O planeta e o Agrinho agradecem o seu cuidado.</em></p>
    `;
}
