const nota1 =5;
const nota2 = 3;
const nota3 = 7;
const media = ((nota1+ nota2+ nota3)/3).toFixed(2);

console.log(`A média é ${media}`);

if(media >=7){
    console.log("Aprovado");
}else if(media<7 && media>=5){
    console.log("Recuperação");
}else {
    console.log("Reprovado");    
}
