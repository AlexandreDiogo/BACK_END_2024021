//Ex.1
function massa_corporal(peso, altura) {
    var imc = peso / (altura) ** 2;
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    }
    else if (imc > 18.5 && imc < 25) {
        console.log("No peso normal");
    }
    else if (imc >= 25 && imc < 30) {
        console.log("acima do peso");
    }
    else if (imc >= 30) {
        console.log("obeso");
    }
}

//massa_corporal(75, 1.80)


//Ex.2
function frase_inversa(frase) {
    var splittedStr = frase.split(" ");
    var reversedStr = "";
    for (var palavra = 0; palavra < splittedStr.length; palavra++) {
        var word = splittedStr[palavra];

        for (var j = word.length - 1; j >= 0; j--) {
            var letter = word[j];
            reversedStr += letter;
        }
        reversedStr += " ";
    }
    return reversedStr
}

//var str= frase_inversa("Hoje é Domingo");
//console.log(str);



//Ex.3






//Ex.4
function countletter(str, letter) {
    var count = 0;
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count++;
        }
    }
    return count;
}

// var str= countletter("Hoje é Domingo","o");
// console.log(str);



//Ex.5
function hora_de_emprego(hora_de_entrada, minuto_de_entrada, segundo_de_entrada, hora_de_saida, minuto_de_saida, segundo_de_saida) {
var totaltimeES= hora_de_entrada * 3600 + minuto_de_entrada*60+segundo_de_entrada
var totaltimeSS= hora_de_saida * 3600 + minuto_de_saida*60+segundo_de_saida

var diffinseconds = totaltimeSS - totaltimeES;

var hours= Math.floor(diffinseconds/3600);
var hoursremainder= diffinseconds%3600;

var minutes= Math.floor (hoursremainder/60);
var secunds= hoursremainder%60;

console.log("trabalhou: "+hours+"h: "+minutes+"m: "+secunds+"s")

}
//hora_de_emprego(8,0,0,9,1,1)




//Ex.6
function retangulo(largura, altura){
    console.log("Desenha retangulo");
    console.log("largura", largura);
    console.log("altura", altura);
    asterisco_largura = "";
    ciclo=0;
    construçao=0;
    while (ciclo < largura){
        asterisco_largura +="*";
        ciclo++;
    }
    while (construçao < altura){
        console.log(asterisco_largura);
        construçao++;
    }
}
//retangulo(50,100)




//Ex.7
function triangulo(altura){
    console.log("Desenha triangulo");
    console.log("altura:", altura);
    asterisco_largura = "";
    ciclo=0;
    while (ciclo < altura){
        asterisco_largura +="*";
        console.log(asterisco_largura);
        ciclo++;
    }
}

//triangulo(20)


 
//Ex.8
function caixa(lado){
    console.log("Desenha caixas");
    console.log("lado:", + lado);
    asterisco_lado = "*";
    asterisco_top="";
    ciclo=0;
    while(ciclo<lado-1){
        asterisco_lado += " ";
        asterisco_top += "*";
        ciclo ++
    }
    ciclo = 0;
    asterisco_lado +="*";
    asterisco_top +="*";
    console.log(asterisco_top);
    while(ciclo<lado-2){
        console.log(asterisco_lado);
        ciclo ++;
    }
    console.log(asterisco_top);
}

// caixa(10)



//Ex.9
var students= [];

//9.a
for(i=0;i<100;i++){
    var student= {numero: Math.ceil(Math.random() *1000), nota: Math.random()*20};
    students.push(student);
}
function listall(students){
    for (let i = 0; i < students.length; i++){
        var student = students[i];
        console.log("numero: " + student.numero + " nota: " +student.nota);
    }
}

// 9.c
function bestGrade(students){
    var best = 0;
    var bestnum = 0;
    for (let i = 0; i < students.length; i++){
        var student = students[i];
        if(student.nota > best){
            best=student.nota;
            bestnum=student.numero;
        }
    }
    console.log("a melhor nota: ", best, " aluno: ", bestnum);
}


//9.d
function worstGrade(students){
    var worst = 0;
    var bestnum = 0;
    for (let i = 0; i < students.length; i++){
        var student = students[i];
        if(student.nota < worst){
            worst=student.nota;
            bestnum=student.numero;
        }
    }
    console.log("a pior nota: ", worst, " aluno: ", bestnum);
}


//9.e
function media(students){
    var med=0;
    for (let i = 0; i < students.length; i++){
        med+=student.nota;
    }
    med=med/i;
    console.log("media:",med);
}

//9.f
function negativas(students){
    var count = 0;
    for (let i = 0; i < students.length; i++){
        var student = students[i];
        if(student.nota <9.5){
            count ++
            console.log("numero: " + student.numero + " nota: " +student.nota);   
        }
        
    }
    return count
}

//9.g
function positiva(students){
    for (let i = 0; i < students.length; i++){
        var student = students[i];
        if(student.nota >9.6){
            console.log("numero: " + student.numero + " nota: " +student.nota);   
        }
        
    }
}



function notas(students, Option){ 
switch (Option) {
    case 1:
        listall(students);
        break;
    case 2:
        bestGrade(students);
        break;
    case 3:
        worstGrade(students);
        break;
    case 4:
        negativas(students);
        break;
    case 5:
        positiva(students);
        break
    case 6:
        media(students);
        break;
    default:
        console.log("Invalido")
        break;
}
}

notas(students, 4);