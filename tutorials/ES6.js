//alert("deneme")

//////////////////
// ## let - const ##
// ES6 variable structure
let number1=44;
number1=50;

const number2=23;


////////////////// 
// ## Template Literal ##
// 1-) multi-line
let multiline="1.satır\n2.satır";
console.log(multiline);

let multilineEs6=`1.satır
2.satır`; //backtick ile yazılabilir
console.log(multilineEs6);

// 2-) Interpolation
let name="Hamit";
let surname="Mızrak";
let nameAndSurname=name+" "+surname;
console.log(nameAndSurname);

let nameAndSurnameES6=`${name} ${surname}`;
console.log(nameAndSurnameES6);

// 3-) Html template
/*
<html>
 <body class="container">
        <div id="html_template"></div>
        <div id="html_template2"></div>
  </body>
</html>
*/
const listem="<ul>"+
"<li>"+name+"</li>"+
"<li>"+surname+"</li>"+
"</ul>";
document.getElementById("html_template").innerHTML=listem;

const listemES6=`
<ul>
    <li>${name}</li>
    <li>${surname}</li>
</ul>`;
document.getElementById("html_template2").innerHTML=listemES6;
