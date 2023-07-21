/******  Seccion para convertir las formulas matematicas en latex******/

let formula = document.querySelector("#formula");
let latex = document.querySelector("#latex");
let button = document.querySelector("#test");

let copybtn1 = document.querySelector('.btnCpy') 
let copybtn2 = document.querySelector('.btnCpy2') 

console.log(copybtn1);
latex.addEventListener("input", () => formula.setValue(latex.value));

function onMathfieldInput() {
  console.clear();
  // console.log('MathJSON expression', formula.expression.json);

  latex.value = formula.value;
}




formula.addEventListener("input", onMathfieldInput);
onMathfieldInput();
console.log();

button.addEventListener("click", (e) => {
  let val = formula.value.replace(new RegExp(/\$/gi), "");
  console.log(val, "aqui esta la cosa");
});

copybtn1.addEventListener('click',(e)=>{
  latex.select();
  document.execCommand("copy");
  console.log('hi');
})

copybtn2.addEventListener('click',(e)=>{
})