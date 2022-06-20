var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var operator = document.getElementById('operator');
var result = document.getElementById('result');
var button =  document.getElementById("btn");
var button2 = document.getElementById("btn2");

function calculate(){
  console.log(num1Input.value);
  console.log(num2Input.value);

  if(num1Input.value ==="" || num2Input.value===""){
    alert('Make surenyou have selected a number');
    result.innerHTML="Please enter both numbers";
  }
  else{
    if(operator.value==='-'){
      result.innerHTML = parseInt(num1Input.value) - parseInt(num2Input.value);
    }
    else if(operator.value===""){
      result.innerHTML = parseInt(num1Input.value) * parseInt(num2Input.value);
    }
    else if(operator.value==="/"){
        result.innerHTML = parseInt(num1Input.value) / parseInt(num2Input.value);
        }
    else{
      result.innerHTML = parseInt(num1Input.value) + parseInt(num2Input.value);
    }
  }
}

function changeTextOfDivTag(){
  var xyz = document.getElementsByClassName('division');
  console.log(xyz);
  xyz[0].innerHTML='Bye';
  xyz[1].innerHTML='Good Day';
  xyz[2].innerHTML='To';
  xyz[3].innerHTML='Your';
  xyz[4].style.color='red';
}