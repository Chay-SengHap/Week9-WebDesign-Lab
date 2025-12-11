
function challenge1(width , height ){

    let rectangele = ''

    if(width<0 || height < 0){
        return;
    }

    for (let i = 0 ; i < height ; i++){

        for(let j = 0 ; j <  width ; j++){
            rectangele += '*'
            
        }
        rectangele+='\n'
        
    }

    return rectangele

}


console.log(challenge1(4, 4))