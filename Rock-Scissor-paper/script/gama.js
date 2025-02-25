 let score = {
  computer : 0,
  user:0,
  tie: 0,
  updateScore: function(){
    this.saveScore();
    document.querySelector('#score').innerHTML =`
    Score:computer:${this.computer},user:${this.user},tie:${this.tie}`;

  },
  saveScore: function(){
    let scoreStr = JSON.stringify(this);
    localStorage.setItem('score',scoreStr);
    console.log(`Score save:${scoreStr}`);
  }
 };
  function resetScore(){
    console.log('resetting score');
    score.computer = 0;
      score.user = 0;
      score.tie = 0;
     score.updateScore();

  }


  function initialize(){
    let scoreStr=localStorage.getItem('score');
    if(scoreStr){
      console.log(`previous score found:${scoreStr}`);
      let scoreVal = JSON.parse(scoreStr);
      score.computer = scoreVal.computer;
      score.user = scoreVal.user;
      score.tie = scoreVal.tie;
      score.updateScore();
    }
  }
 
  
  function getRandomChoice(){
    let randomChoice = Math.floor(Math.random()* 3 + 1);
    return randomChoice;
  }
  function getComputerChoice(){
   let randomChoice =  getRandomChoice();
   let computerChoiceText;
     if (randomChoice === 1){
    computerChoiceText = `👊Rock`;
    } else if (randomChoice === 2){
    computerChoiceText = `✋Paper`;
    } else {
    computerChoiceText =`✌Scissors`;
    }
    return computerChoiceText;

  }
   function updateResult(userChoice,computerChoice,result){
       document.querySelector('#result').innerHTML =`you chose ${userChoice}.<br>
       computer chose ${computerChoice}.<br>
       And the result is:${result}`;

   }

   function computerResult(userChoice,computerChoice){
      let result='unknown'

    if(userChoice === computerChoice){
    result ='tie';
    score.tie++;
    } else if((computerChoice === '👊Rock' && userChoice === '✋Scissors') ||
             (computerChoice === '✋Scissors' && userChoice === '✋Paper') ||
             (computerChoice === '✋Paper' && userChoice === '👊Rock')
    ){
      result = 'I Win';
      score.computer++;
    } else {
      result='you win';
      score.user++;
    }
    score.updateScore();
      return result;
   }
function rockClicked(){
   const userChoice = '👊Rock';
   let computerChoice = getComputerChoice();
   let result = computerResult('👊Rock',computerChoice);
    updateResult('👊Rock',computerChoice,result);   
 }

function paperClicked(){
    const userChoice = '✋Paper';
    let computerChoice=getComputerChoice();
    let result = computerResult('✋Paper',computerChoice);   
    updateResult('✋Paper',computerChoice,result);
 }
 function ScissorsClicked(){
   const userChoice = '✋Scissors';
     let computerChoice=getComputerChoice();
     let result =computerResult('✋Scissors',computerChoice);
       updateResult('✋Scissors',computerChoice,result);
       
  
}
initialize();
