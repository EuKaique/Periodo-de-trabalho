//ESSA FUNÇÃO REALIZA O CALCULO DO VALOR DA HORA E RETORNA O QUANTO O COLABORADOR RECEBEU NO DIA

function Calcular() {
  //Declaração das variáveis
  let hora_entrada = parseInt(document.getElementById("Hentrada").value);
  let hora_saida = parseInt(document.getElementById("Hsaida").value);
  let msg1 = document.getElementById("msg1");
  let msg2 = document.getElementById("msg2");
  //Condições
  if (
    hora_entrada >= 05 ||
    (hora_entrada <= 22 && hora_saida >= 5) ||
    hora_saida <= 22
  ) {
    //Se o colaborador trabalhou no período diurno ele vai receber 20R$ por hora
    total = (hora_entrada - hora_saida) * 20;
  } else if (
    hora_entrada > 22 ||
    (hora_entrada < 5 && hora_saida > 22) ||
    hora_saida
  ) {
    //Se o colaborador trabalhou no período noturno ele vai receber 40R$ por hora
    total = (hora_entrada - hora_saida) * 40;
  } else {
    //Se o colaborador trabalhou nos dois períodos ele vai receber o valor da hora dos dois horários
    total = ((hora_entrada - hora_saida) * 20) / 2;
  }

  //Resultado
  msg1.innerHTML = `O colaborador trabalhou das ${hora_entrada.toFixed(2)}h ás ${hora_saida.toFixed(2)}h e vai receber :`;
  msg2.innerHTML = `${Math.abs(total)}R$ no dia`;
}
