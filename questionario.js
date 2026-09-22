const GABARITO = {
  q1: 'q1c',
  q2: 'q2b',
  q3: 'q3b',
  q4: 'q4b',
  q5: 'q5a',
  q6: 'q6b',
  q7: 'q7b',
  q8: 'q8a',
  q9: 'q9a',
  q10: 'q10b',
  q11: 'q11b',
  q12: 'q12b',
  q13: '1964'
};

function calcularAcertos() {
  let acertos = 0;

  Object.entries(GABARITO).forEach(([pergunta, respostaCorreta]) => {
    if (pergunta === 'q13') {
      const resposta = document.getElementById(pergunta).value.trim();
      if (resposta === respostaCorreta) {
        acertos++;
      }
      return;
    }

    const respostaSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
    if (respostaSelecionada && respostaSelecionada.id === respostaCorreta) {
      acertos++;
    }
  });

  return acertos;
}

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('quiz-form');
  const resultado = document.getElementById('resultado');

  if (!formulario || !resultado) {
    return;
  }

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('username')?.value.trim() || 'Jogador';
    const totalPerguntas = Object.keys(GABARITO).length;
    const acertos = calcularAcertos();

    resultado.textContent = `${nome}, você acertou ${acertos} de ${totalPerguntas} perguntas.`;
    resultado.style.display = 'block';

    if (acertos === totalPerguntas) {
      resultado.style.color = '#7ef29a';
      resultado.textContent += ' Perfeito! Você respondeu tudo corretamente!';
    } else if (acertos >= totalPerguntas * 0.7) {
      resultado.style.color = '#ffd166';
    } else {
      resultado.style.color = '#ff8a80';
    }
  });
});
