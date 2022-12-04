
        const nome=prompt ('digite seu nome');
        document.body.innerHTML += `seu nome é: ${nome} <br>`;
        document.body.innerHTML += `seu nome tem : ${nome.length}  de letras <br>`;
        document.body.innerHTML += `A segunda letra do seu nome é  : ${nome[1]}  <br>`;
        document.body.innerHTML += `Qual é o primeiro indice  do seu nome : ${nome.indexOf('a')}  de letras <br>`;
        document.body.innerHTML += `Qual é o ultimo indice  do seu nome : ${nome.lastIndexOf('a')}  de letras <br>`;
        document.body.innerHTML += `as palavras do seu nome são : ${nome.split(' ')} <br>`;
        document.body.innerHTML += `seu nome em letras maiusculas é  : ${nome.toUpperCase()}   <br>`;
        document.body.innerHTML += `seu nome em letras minisculas  é : ${nome.toLowerCase()}   <br>`;
