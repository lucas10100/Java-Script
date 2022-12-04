let num1 = prompt("digite um numero");
document.body.innerHTML += `seu numero é ${num1} <br>` ;
document.body.innerHTML +=`a raiza quadrada desse numero é ${num1 ** 0.5}
<br>`;




document.body.innerHTML+= `${num1} é inteiro: <br>`;

document.body.innerHTML+= ` É Nan: 
<br>

`
document.body.innerHTML += `arrendondando para baixo é:  ${Math.floor (num1)}<br>`;

document.body.innerHTML += `arrendondando para cima é:  ${Math.ceil (num1)} <br>`;

document.body.innerHTML += `Com duas casas decimais é:  ${Math. (num1)}`;