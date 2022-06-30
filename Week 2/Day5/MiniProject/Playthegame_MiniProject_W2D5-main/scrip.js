
    function playTheGame(){
        let ask = confirm("do you want to play a game?\nEither OK or Cancel.");
        if (ask === true){
            alert('Cool lets start');
            let num = prompt('select a  number between 1-10!');
            console.log(num);
            num=Number(num);
            if(num > 0 && num <=10 ){
                alert('great!')
                let computerNumber = Math.floor(Math.random()* 11)
                compareNumbers(num,computerNumber)
            }else if(num < 0 && num > 10) {
                alert('Sorry it’s not a good number, Goodbye')
                return
            }else {
                alert('Sorry Not a number, Goodbye')
                return
            }
        }else {
            alert('no problem goodbye!')
            return
        }
        
    }
    function compareNumbers(num,computerNumber){
        console.log(num , computerNumber)
        if(num === computerNumber){
            alert('great sucsses ! WINNER!!!')	
        }else if (num > computerNumber) {
            alert('Your number is bigger then the computers, guess again')
            num =prompt('guess again');
            compareNumbers(num,computerNumber)	
        }else if (num < computerNumber) {
            alert('Your number is smaller then the computers, guess again');
            num = prompt('guess again')
            compareNumbers(num,computerNumber)	
        } else {
            console.log('how did you do it?')
        }
    }
    
    
    
    
    
    
    
    
    
    
