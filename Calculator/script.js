document.addEventListener("DOMContentLoaded", function() {
  const display = document.querySelector(".Display");
  const buttons = document.querySelectorAll("button");
  const specialChars = ["%", "*", "/", "-", "+","√"];
  let output = "";

  const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "" && (output[output.length-1]==="%" || !specialChars.includes(output[output.length-1]))) {
      if (output.includes("√")){
          output = output.substring(1);
          output =  Math.sqrt(parseFloat(output));
      }
      else output = eval(output.replace("%", "/100"));
      
    }
    else if (btnValue === "AC") output = "";
    else if (btnValue === "DEL") output = output.toString().slice(0, -1);
    else {
      if(output !== "" && specialChars.includes(output[output.length-1]) && specialChars.includes(btnValue))output = output.toString().slice(0, -1);
      if(output !== "" && output[output.length-1]==="%" && !specialChars.includes(btnValue))return ;
      if(output==="" && (btnValue === "/" || btnValue==="%" || btnValue==="*"))return;
      if(output !== "" && btnValue==="=" && output[output.length-1]!=="%" && specialChars.includes(output[output.length-1]))return;
      output += btnValue;
    }
    display.value = output;

  };

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
  });
});
