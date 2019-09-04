let arrBandNames = [];

function generateName(clothingColour){
  return (clothingColour.charAt(0).toUpperCase() + clothingColour.substr(1).toLowerCase())

/*    let color = function() { 
    return (clothingColour.charAt(0).toUpperCase() + clothingColour.substr(1).toLowerCase()
    );
  }; 

   const food = function() { 
    return (lastFoodEaten.charAt(0).toUpperCase() + lastFoodEaten.substr(1).toLowerCase()
    );
  }; 

  let bandName = `The ${color()} ${food()}`;

  arrBandNames = [color(), food()]; 

  return color; */
}

console.log(generateName('grEEn') + ' ' + generateName('sAnDwich'));
