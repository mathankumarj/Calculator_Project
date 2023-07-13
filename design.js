var a=parseInt(prompt("Enter the first number"));
var b=parseInt(prompt("Enter the second number"));
var op= prompt("Enter the operator");
switch(op){
    case'+':document.getElementById("result").textContent=(a+b);
    break;
    case'-':document.getElementById("result").textContent=(a-b);
    break;
    case'*':document.getElementById("result").textContent=(a*b);
    break;
    case'/':document.getElementById("result").textContent=(a/b);
    break;
}
