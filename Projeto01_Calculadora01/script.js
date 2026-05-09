//Add numbers to code
//equals button is not funcional
var zero = window.document.querySelector('input#btnZero').value
var one = window.document.querySelector('input#btnOne').value
var two = window.document.querySelector('input#btnTwo').value
var three = window.document.querySelector('input#btnThree').value
var four = window.document.querySelector('input#btnFour').value
var five = window.document.querySelector('input#btnFive').value
var six = window.document.querySelector('input#btnSix').value
var seven = window.document.querySelector('input#btnSeven').value
var eight = window.document.querySelector('input#btnEight').value
var nine = window.document.querySelector('input#btnNine').value

var screen = window.document.querySelector('input#screen')

var enter = window.document.querySelector('input#enter')

var err = window.document.querySelector('div#err')

//the ID name is different to the function name
//bellow is added the numbers on the enter input

function add1() {
    enter.value = `${(enter.value) + one}`
}
function add2() {
    enter.value = `${(enter.value) + two}`
}
function add3() {
    enter.value = `${(enter.value) + three}`
}
function add4() {
    enter.value = `${(enter.value) + four}`
}
function add5() {
    enter.value = `${(enter.value) + five}`
}
function add6() {
    enter.value = `${(enter.value) + six}`
}
function add7() {
    enter.value = `${(enter.value) + seven}`
}
function add8() {
    enter.value = `${(enter.value) + eight}`
}
function add9() {
    enter.value = `${(enter.value) + nine}`
}
function add0() {
    enter.value = `${(enter.value) + zero}`
}

function sum() {
    if (screen.value == 0) {
        screen.value = `${Number(enter.value)}`
        enter.value = ``
    } else {
        var soma = Number(screen.value) + Number(enter.value)
        screen.value = ``
        screen.value = `${soma}`
        enter.value = ``
    }

}

function subtract() {
    if (screen.value == 0) {
        screen.value = `${Number(enter.value)}`
        enter.value = ``
    } else {
        var soma = Number(screen.value) - Number(enter.value)
        screen.value = ``
        screen.value = `${soma}`
        enter.value = ``
    }

}

function multiply() {
    if (screen.value == 0) {
        screen.value = `${Number(enter.value)}`
        enter.value = ``
    } else {
        var soma = Number(screen.value) * Number(enter.value)
        screen.value = ``
        screen.value = `${soma}`
        enter.value = ``
    }
}

function divide() {
    //if the number on screen is different to zero in the start
    if (screen.value == 0) {
        screen.value = `${Number(enter.value)}`
        enter.value = ``
        //else if in Javascript
        //in the number on the enter is different to zero
    } else if (enter.value != 0) {
        var soma = Number(screen.value) / Number(enter.value)
        screen.value = ``
        screen.value = `${soma}`
        enter.value = ``
    } else {
        //error
        err.innerHTML = `Err: is not possible divide, please click Eraser`
        enter.value = ``
        screen.value = 403
    }
}

function equality() {
    enter.value = ``
}

function Eraser() {
    enter.value = ``
    screen.value = 0
    err.innerHTML = ``
}