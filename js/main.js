// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "theme-1");    
});
  
const changeTheme = ()=>{
    // Get our button switcher
    var themeSwitcher = document.querySelector(".calculator-number");

    // When our button gets clicked
    themeSwitcher.onclick = function() {
      var currentTheme = document.documentElement.getAttribute("data-theme");
      var switchToTheme = currentTheme === "theme-1" ? "theme-2" :
                          currentTheme === "theme-2" ? "theme-3" :
                          currentTheme === "theme-3" ? "theme-1" : 'theme-3'
      document.documentElement.setAttribute("data-theme", switchToTheme);
      var range = document.querySelector('#theme');
      if(range.value == 1){
          range.value = 2;
        }else if(range.value == 2){
            range.value = 3;
      }else{
          range.value = 1;
      }
    }
}

changeTheme();

const addEventToButton = ()=>{
    let calculator = document.querySelectorAll(".calculator-numbers input");

    calculator.forEach(i => {
        i.addEventListener('click', operate)
    });

}

function operate(){
    let result = document.querySelector("#result")
    if(result.innerHTML == '0'){
        result.innerHTML = this.value; 
    }else if(result.innerHTML.length >= 10){
        alert("I can't trade a higher number")
    }else if(this.value == "DEL"){
        if(result.innerHTML){
            result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
        }
    }else if(this.value == "+" || this.value == "-"||this.value == "/" || this.value == "X"){
        result.innerHTML += " " + this.value + " ";
    }else if(this.value == "RESET"){
        result.innerHTML = "0"
    }
    else if(this.value == "="){
        let data = result.innerHTML.split(" ")
        let one = parseInt(data[0])
        let two = parseInt(data[2])
        let operate = data[1];
        switch(operate) {
            case "+":
                result.innerHTML = one + two;      
                break;
            case '-':
                result.innerHTML = one - two;          
                break;
            case 'X':
                result.innerHTML = one * two;          
                break;
            case '/':
                result.innerHTML = one / two;          
                break;
            default:
              // code block
          }

    }
    else{
        result.innerHTML += this.value;
    }    
}

addEventToButton();