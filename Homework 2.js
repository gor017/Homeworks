// xndir 1 (Count numbers of digit 9 in a number.)
let num = prompt()
let count = 0
for (i = 0; i < num.length; i++) {
    let char = num[i]
    if (char === '9') {
        count++
    }   
}
console.log(count)



// xndir 2 (Given two numbers. Print powers of 2 between that numbers. (without using Math.pow))
let a = +prompt()
let b = +prompt()
let www = 1
for (i = a; i < b; i++) {
    www *= 2
    if ((www > a) && (www < b)) {
        console.log(www)
    }
}

// xndir 2 mi qich urish lucumov
let a = +prompt()
let b = +prompt()
let www = 1
let result = ''
for (i = a; i < b; i++) {
    www *= 2
    if ((www > a) && (www < b)) {
        result += `${www} `
    }
}
console.log(result)


// xndir 2 (arrayov lucum)
let a = +prompt()
let b = +prompt()
let www = 1
let arr = []
for (i = a; i < b; i++) {
    www *= 2
    if ((www > a) && (www < b)) {
        arr.push(www)
    }
}
console.log(arr)



//xndir 3 (Given a number as input, insert dashes (-) between each two even numbers.)
let num = prompt()
let newStr = ''
for (i = 0; i < num.length; i++) {
    let a = '-'
    newStr += (num[i])
    if((+num[i] % 2 === 0) && (+num[i + 1] % 2 === 0)) {
        newStr += a
    }
}
console.log(newStr)


// xndir 4 (Given a positive number. Print it in reverse order.)

let num = prompt()
let newNum = ''
for (let i = num.length - 1; i >= 0; i--) {
    newNum += (num[i]) 
}
console.log(newNum)

// xndir 5 (Insert a n positive number. Print the n-st prime number.)

let n = +prompt()
let arr = []
for (let i = 0; i < n*n; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0 && i !==1 || i === 2 || i === 3 || i === 5 || i === 7 || i === 11) {
        arr.push(i)
    }
}
console.log(arr[n - 1])

