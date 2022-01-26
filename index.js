function solve() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value)
    }catch(error){
        display.value ="error"
        alert(error)
    }
}
