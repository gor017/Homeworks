// xndir 1
let num = 123
if((num % 2 === 0) && (num !== 2)) {
    //grel em yndhanur parz ev bard tveri bandzev(qani vor 2y nuynpes parz tiv e)
    console.log('even')
} else {
    console.log('odd')
}



// xndir 2
let num = 250
let newNum = 9
if((num % 10 !== 0 && num > 10)) {
    newNum = String((num % 10)) + String(((num - (num % 10)) / 10))
} else {
    newNum = num
}
console.log(Number(newNum))
// xndri pahanji axyusaki 2rd toxy chem haskanum



// xndir 3
let a = 45
let b = -12
let c = 0
let d = 3
let e = -15
let avg = (a + b + c + d + e) / 5


//xndir 4
let c = -23
let b = -456
let a = 0
let qwe = a
if ((a < b) && (b < c)){
    qwe = `${a}, ${b}, ${c}`
} else if ((b < a) && (a < c)) {
    qwe = `${b}, ${a}, ${c}`    
} else if ((b < c) && (c < a)) {
    qwe = `${b}, ${c}, ${a}`
} else if ((a < c) && (c < b)) {
    qwe = `${a}, ${c}, ${b}`
} else if ((c < a) && (a < b)) {
    qwe = `${c}, ${a}, ${b}`
} else {
    qwe = `${c}, ${b}, ${a}`
}
console.log(qwe)



//xndir 5
var n = +prompt();

var i = 0;
var j = 0;

if ((n % 2 === 0) && (Math.floor(n / 10))) {
        i += 1;
}


if ((n % 3 === 0) && (n % 10 === 1)) {
        j += 1;
}