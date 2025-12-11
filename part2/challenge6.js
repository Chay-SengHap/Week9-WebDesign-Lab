
function checkWinner(a , b , c){
    if(a > b && a > c){
        return "A is the Winner"
    }else if(b> a && b > c){
        return "B is the Winner"
    }else if(c > a && c > b){
        return "C is the Winner"
    }else if(a== b){
        return "A and B are both winner"
    }else if( a == c){
        return "A and C are both winner"
    }else if( b == c){
        return "B and C are both winner"
    }else{
        return "A and B and C are all winner"
    }
}


function challenge6(arr){
    if(arr == []){
        return "There is not a vote yet"
    }

    let numberVoteofA = 0
    let numberVoteofB = 0
    let numberVoteofC = 0

    for(let i of arr){
        switch(i){
            case 'A' : numberVoteofA++
            break
            case 'B' : numberVoteofB++
            break
            case 'C' : numberVoteofC++
            break

        }
    }
    let winner = checkWinner(numberVoteofA , numberVoteofB , numberVoteofC)

    return winner;
    

    
}


console.log(challenge6(['A' , 'B' , 'C' , 'B' , 'A'])) // A and B are both Winner 