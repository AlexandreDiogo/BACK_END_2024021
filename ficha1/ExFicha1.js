function nota_final(nota_pratica, nota_teorica) {
    var nota = 0.7 * nota_pratica + nota_teorica;
    console.log("A nota final é: " + nota);
    if (nota < 9.5) {
        console.log("Reprovado");
    }
    else {
        console.log("Aprovado");
    }
}

function mes(numero_mes) {
    if (numero_mes == 1) {
        console.log("Janeiro");
    }
    else if (numero_mes == 2) {
        console.log("Fevereiro");
    }
    else if (numero_mes == 3) {
        console.log("Março");
    }
    else if (numero_mes == 4) {
        console.log("Abril");
    }
    else if (numero_mes == 5) {
        console.log("Maio");
    }
    else if (numero_mes == 6) {
        console.log("Junho");
    }
    else if (numero_mes == 7) {
        console.log("Julho");
    }
    else if (numero_mes == 8) {
        console.log("Agosto");
    }
    else if (numero_mes == 9) {
        console.log("Setembro");
    }
    else if (numero_mes == 10) {
        console.log("Outubro");
    }
    else if (numero_mes == 11) {
        console.log("Novembro");
    }
    else if (numero_mes == 12) {
        console.log("Dezembro");
    }
    else if (numero_mes != (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)) {
        console.log("Numero invalido")
    }
}

function operaçoes(a, b) {
    var soma = a + b;
    var subtracao = a - b;
    var multiplicacao = a * b;
    var divisao = a / b
    var elevado = a ** b
    console.log("A soma de " + a + " com " + b + " é " + soma);
    console.log("A subtração de " + a + " com " + b + " é " + subtracao);
    console.log("A multiplicação de " + a + " com " + b + " é " + multiplicacao);
    console.log("A divisão de " + a + " com " + b + " é " + divisao);
    console.log("A potencia de " + a + " com " + b + " é " + elevado);
}


function multiplos(multiplicando, maximo) {
    var multiplo = multiplicando;
    while (multiplo < maximo) {
        console.log(multiplo)
        multiplo += multiplicando;
    }
}

function soma_numeros_inteiros(maximo) {
    var numero_inteiro = 1;
    var soma = 0;
    while (numero_inteiro <= maximo) {
        soma = soma + numero_inteiro;
        console.log(soma);
        numero_inteiro += 1;
    }
    return soma
}

function fatorial(numero_int) {
    var fatorial_res = 1;
    while (numero_int > 1) {
        fatorial_res = fatorial_res * numero_int;
        numero_int -= 1;
    }
    console.log(fatorial_res);
}


function calcular_maximo(sequencia_maximo) {
    var max=sequencia_maximo[0]
    for (var elemento_maximo = 1; elemento_maximo > sequencia_maximo ; elemento_maximo++  ) {
        if(sequencia_maximo[elemento_maximo]>max)
            max = sequencia_maximo[elemento_maximo]
  
    console.log(maximo);
}
}


function calcular_minimo(sequencia_minima) {
    var minimo = undefined;
    for (var elemento_minimo in sequencia_minima) {
        if (elemento_minimo > minimo)
            minimo = elemento_minimo;
    }
    console.log(minimo);
}

function calcular_media(sequencia_media) {
    var soma_elemento = undefined;
    var numero_de_elementos = 0;
    for (var elemento_media in sequencia_media) {
        soma_elemento = soma_elemento + elemento_media;
        numero_de_elementos += 1;
    }
    var media = soma_elemento / numero_de_elementos;
    console.log(media);
}



//nota_final(12,16);
//mes(5);
//operaçoes(2,3);
//multiplos(2,20);
//soma_numeros_inteiros(10);
//fatorial(5);
calcular_maximo([1,2,3,4,5,6,7,8,9,10]);