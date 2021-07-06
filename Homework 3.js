//xndir 1  (Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
starting from a to b spaced by step.)
function aaa (a, b, step) {
    let arr = []
        for (let i = a; a < b; a += step) {
            arr.push(a)
        }
    return arr   
    }
    aaa(10, 100, 20)

//xndir 2 (Given an array of numbers. Find the maximum element in array.)
function findMax (arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }   
    }
return max
}
findMax([1, 4, 43, -112])

//xndir 2 nayev minimumy gtnel
function findMin (arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }   
    }
return min
}
findMin([1, 4, 43, -112])


// xndir 3 (Given an array. Reverse it in place.)
function reverseArray (arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
arr = newArr
return arr
}
reverseArray ([5, 3, 7, 2, 9])

// xndir 3 
function reverseArray (arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
arr = newArr
return arr
}
reverseArray ([5, 3, 7, 2, 9])

//xndir 3 (in place)
function reverseArray (arr) {
    for (let i = 0; i < (arr.length / 2); i++) {
        let elem = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = elem
    }
    return arr
}
reverseArray ([5, 3, 7, 2, 9])

//xndir 4 (Given an array. Create the array which elements are products between two neighbours.)
function productOfNeighbours (arr)  {
    let newArr= []
    for (let i = 0; i < arr.length - 1; i++) {
        let a = arr[i] * arr[i + 1]
        newArr.push(a)
    }
return newArr
}
productOfNeighbours ([3, 7, 12, 5, 20, 0])

/*xndir 5 (Write a function that receives an array and an element as arguments and returns the (in
place) array without that element if it’s included or vice versa..)*/
function check (arr) {
    let elem = 4
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            arr.splice(i, 1)
        } else {
            arr.push(elem)
        }
    }
return arr
}

check ([1, 2, 3])




