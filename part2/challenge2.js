

function challenge2(arr){

    let array = arr.reverse();


    return array

}
// or 

function reverseArray(arr){

    let reverse = []

    for(let i = arr.length-1 ; i>=0 ; i-- ){
        reverse.push(arr[i])
    }

    return reverse


}
console.log(challenge2([1 ,2 ,3, 4,5])) // [5 ,4, 3, 2, 1]
console.log(reverseArray([9 , 8 , 7 , 6 , 5])) // [5 ,6, 7, 8, 9]


