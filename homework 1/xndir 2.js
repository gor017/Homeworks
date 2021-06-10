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