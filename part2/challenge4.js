function challenge4(text , char){
    let count = 0
    for(let i of text){
        if(i === char){
            count++
        }
    }

    return count
}


console.log(challenge4("Hello" , 'l')) //2