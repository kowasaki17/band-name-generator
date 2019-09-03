let arrBandNames = [];

function generateBandName(clothingColour, lastFoodEaten){
 
  const color = function() { 
    return (clothingColour.charAt(0).toUpperCase() + clothingColour.substr(1).toLowerCase()
    );
  };

  const food = function() { 
    return (lastFoodEaten.charAt(0).toUpperCase() + lastFoodEaten.substr(1).toLowerCase()
    );
  };

  let bandName = `The ${color()} ${food()}`;

  arrBandNames = [color(), food()];

  return bandName;
}

console.log(generateBandName('green', 'sandwich'));
