let result=document.getElementById("result");
function appendToResult(value){
  result.value+=value;
}
function clearResult(){
  result.value="";
}
function calculateResult() {
  try {
    result.value=eval(result.value);
  } 
  catch (error) {
    result.value = "Error";
  }
}
function appendToResult(value) {
  if (value==='\b'){
    result.value=result.value.slice(0, -1);
  } 
  else{
    result.value += value;
  }
}
document.addEventListener("keydown", function(event){
  const key = event.key;
  if (/[\d+\-*/.]/.test(key))
  {
    appendToResult(key);
  }
  else if (key === "Enter")
  {
    calculateResult();
  }
  else if (key === "Backspace")
  {
    event.preventDefault();
    appendToResult("\b");
  }
});