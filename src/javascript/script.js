//ESSA FUNÇÃO REALIZA O CALCULO DO VALOR DA HORA E RETORNA O QUANTO O COLABORADOR RECEBEU NO DIA
function Calcular(){
    //ESSA FUNÇÃO FILTRA OS CARACTERES PARA CONVERSÃO DE UM VALOR
    filtro = function(value){
        if(/^(\-|\+)?([0-9]+|Infinity)$/){
            return Number(value)
        }
        return NaN
    }
    //Declaração das variáveis
    var agora = new Date()
    var tempo = agora.getHours()
    var entrada = parseInt(document.getElementsByClassName('H-entrada').value, 10)
    var saida = parseInt(document.getElementsByClassName('H-saida').value, 10)
    var resultado = document.getElementById('resultado')
    //Condições
    if(tempo >= 5 && tempo <= 22){
        //Se o colaborador trabalhou no período diurno ele vai receber 20R$ por hora
        tempo = parseInt(entrada - saida)*20
    }else if(tempo > 22 && tempo < 5){
        //Se o colaborador trabalhou no período noturno ele vai receber 40R$ por hora
        tempo = parseInt(saida - entrada)*40
    }else{
        //Se o colaborador trabalhou nos dois períodos ele vai receber o valor da hora dos dois horários
        tempo = parseInt(saida - entrada)
    }
    //Resultado
    resultado.innerHTML = `O colaborador vai receber no dia: ${tempo} R$`
}