function display(num){
    n1.value+=num
    // n1.value=n1.value+num
}
function allClear(){
    n1.value=""
}
function evaluateExp(){
    // exp=n1.value
    // out=eval(exp)
    // n1.value=out
    n1.value=eval(n1.value)
}
function removeElmnt(){
    curExp=n1.value
    n1.value=curExp.slice(0,-1)
}