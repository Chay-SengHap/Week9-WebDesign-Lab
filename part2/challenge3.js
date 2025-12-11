function challenge3(arr){
    let total = 0
    let avg = 0

    for(i of arr) total += i;

    avg = total/arr.length;

    return avg

}


console.log(challenge3([85 , 90 , 78 , 92 ])) // 86.25