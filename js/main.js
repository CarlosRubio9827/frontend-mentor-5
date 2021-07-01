// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "theme-1");

    // Get our button switcher
    var themeSwitcher = document.querySelector(".calculator-number");
    console.log(themeSwitcher)

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
  });