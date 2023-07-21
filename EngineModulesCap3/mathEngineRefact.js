/******  Seccion para convertir las formulas matematicas en latex******/

let formula = document.querySelector("#formula");
let latex = document.querySelector("#latex");
let button = document.querySelector("#test");



let copybtn2 = document.querySelector('.btnCpy2') 


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
