


function challenge5(text){
    let count = 1;
    if(text === ''){
        return;
    }

    for(let i = 0 ; i < text.length ; i++){
        if(text[i] == ' '){
            count++
        }
    }
    return count
}


console.log(challenge5("Hello world from Javascript web design"))