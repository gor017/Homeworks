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