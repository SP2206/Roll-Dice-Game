function roll(){
   let noofdices = document.getElementById("noofdices").value;
   let diceimages = document.getElementById("diceimages");
   let diceresult = document.getElementById("diceresult");
   const values = [];
   const images = [];
   for(let i =1; i<= noofdices;i++){
    let value = Math.floor(Math.random(noofdices)*6) + 1;
    values.push(value);
    images.push(`<img src = "diceimages/${value}.jpeg">`);
  }

  diceresult.textContent = `Dice: ${values.join(' , ')}`;
  diceimages.innerHTML = images.join('');

    
  }
