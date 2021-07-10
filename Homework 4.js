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
