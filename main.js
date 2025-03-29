document.getElementById('comparisonForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obtém os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    
    // Seleciona as mensagens
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    // Esconde ambas as mensagens antes da validação
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // Valida se B é maior que A
    if (campoB > campoA) {
        successMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
});