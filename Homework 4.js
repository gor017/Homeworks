/* xndir 1 (Given an array of numbers. Write a function to separate odd and even numbers in different
arrays.) */
function array (arr) {
    let arr1 = []
    let arr2 = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr1.push(arr[i])
        } else {
            arr2.push(arr[i])
        }
    }
    console.log(arr1, arr2)
}

//xndir 4 (Given an array of numbers. Create an array containing only unique elements.)
function unique (arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let isIncluded = false
        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                isIncluded = true
                break
            }
        }
        if (isIncluded !== true) {
            res.push(arr[i])
        }
    }
return res 
}
unique([1, 4, 5, 3, 7, 8, 5, 4, 2, 4, 3])



//xndir 5 (Given a string and symbols. Change first symbol by the second one in the string.)
function newArr (str, el1, el2) {
    let a = ''
    for (i = 0; i < str.length; i++) {
        if (str[i] === el1) {
            a += el2
        } else {
            a += str[i]
        }
    }
    return a
}
newArr('The results are not recorded yet', 't', 'w')
