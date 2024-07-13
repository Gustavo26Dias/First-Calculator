function insert(num) {
    let number = document.getElementById ("result").innerHTML;
    document.getElementById ("result").innerHTML = number + num;
}
function clean() {
    document.getElementById ("result").innerHTML = "";
}
function calculate() {
    let result = document.getElementById ("result").innerHTML;
    if (result) {
        document.getElementById ("result").innerHTML = eval(result);
    }
    else {
        document.getElementById ("result").innerHTML = "Nothing insert!";
    }
}