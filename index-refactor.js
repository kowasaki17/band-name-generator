const arrBandNames = [];

function generateBandName(clothingColour, lastFoodEaten){

  let clothingColorFirst = clothingColour.charAt(0).toUpperCase();
  let clothingColorRest = clothingColour.substr(1).toLowerCase();
  let lastFoodEatenFirst = lastFoodEaten.charAt(0).toUpperCase();
  let lastFoodEatenRest = lastFoodEaten.substr(1).toLowerCase();

  let color = `${clothingColorFirst}${clothingColorRest}`;
  let food = `${lastFoodEatenFirst}${lastFoodEatenRest}`;

  let bandName = `The ${color} ${food}`;

  arrBandNames.push(bandName);

  console.log(arrBandNames);

    return bandName;

}


console.log(generateBandName('green', 'sausage'));