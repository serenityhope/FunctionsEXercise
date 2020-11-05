function spookyGhost() {
    console.log(`Boo!!!`);
  }
  
  spookyGhost();
  
  
  function candy(goal) {
    console.log(`${goal}, ${goal}, ${goal}, ${goal}`);
  }
  
  candy(`Get Candy`);
  
  function werewolf(a, b) {
    if (a === "Full" && b === "Moon") {
      console.log("ARH-WOOO!");
    }
  }
  werewolf("Full", "Moon");
  
  function halloween() {
    return `October 31st`;
  }
  console.log(halloween());
  
  function isEnoughCandy(pieces) {
    if (pieces >= 31) {
      return true;
    } else {
      return false;
    }
   
  }
  console.log(isEnoughCandy(31));
  
  function candyCounter(num) {
    let total = 0;
    for (n of num) {
      total = total + n;
    }
  
    return total;
  }
  console.log(candyCounter([2, 3, 4, 5]));
  console.log(candyCounter([2, 3, 4, 5, 6, 6]));
  
  const hauntedMansion = function(){
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
  }
  hauntedMansion();
  
  const ghostbusters = () => ("Who You Gonna Call?")
  
  console.log(ghostbusters());
  
  const costumes = [`Ghost`, `Hobo`, `Superman`];
  
  
  const upperCostumes = costumes.map(function (parameter){
     return parameter.toUpperCase();
  });
  
  console.log(upperCostumes);
  
  