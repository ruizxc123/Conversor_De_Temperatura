
(function() {
    'use strict';

    // Elementos do DOM
    const valorInput = document.getElementById('valor');
    const deSelect = document.getElementById('de');
    const paraSelect = document.getElementById('para');
    const btnConverter = document.getElementById('btn-converter');
    const resultadoSpan = document.getElementById('resultado-texto');

    // Função principal de conversão
    function converter() {
        let valor = parseFloat(valorInput.value);
        
       
        if (isNaN(valor)) {
            resultadoSpan.textContent = 'Digite um número válido';
            return;
        }

        const de = deSelect.value;
        const para = paraSelect.value;

       
        if (de === para) {
            resultadoSpan.textContent = formatarResultado(valor, para);
            return;
        }

        
        let emCelsius;
        switch (de) {
            case 'c': emCelsius = valor; break;
            case 'f': emCelsius = (valor - 32) * 5/9; break;
            case 'k': emCelsius = valor - 273.15; break;
            default: emCelsius = valor;
        }

        let resultado;
        switch (para) {
            case 'c': resultado = emCelsius; break;
            case 'f': resultado = (emCelsius * 9/5) + 32; break;
            case 'k': resultado = emCelsius + 273.15; break;
            default: resultado = emCelsius;
        }

        resultadoSpan.textContent = formatarResultado(resultado, para);
    }

    
    function formatarResultado(valor, unidade) {
        
        const valorFormatado = parseFloat(valor.toFixed(4));
        
        let simbolo = '';
        switch (unidade) {
            case 'c': simbolo = '°C'; break;
            case 'f': simbolo = '°F'; break;
            case 'k': simbolo = 'K'; break;
        }
        return `${valorFormatado} ${simbolo}`;
    }


    function inicializar() {
        valorInput.value = '0';
        deSelect.value = 'c';
        paraSelect.value = 'f';
        converter(); 
    }

    
    btnConverter.addEventListener('click', converter);
    
    valorInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            converter();
        }
    });


    window.addEventListener('DOMContentLoaded', inicializar);
})();