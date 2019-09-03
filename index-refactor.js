const arrBandNames = [];

function generateClothingColor(clothingColour){

  let clothingColorFirst = clothingColour.charAt(0).toUpperCase();
  let clothingColorRest = clothingColour.substr(1).toLowerCase();

  let color = `${clothingColorFirst}${clothingColorRest}`;

    return color;

}
function generateFoodName(lastFoodEaten){

  let lastFoodEatenFirst = lastFoodEaten.charAt(0).toUpperCase();
  let lastFoodEatenRest = lastFoodEaten.substr(1).toLowerCase();

  let food = `${lastFoodEatenFirst}${lastFoodEatenRest}`;

  return food;
}

//let bandName = `The ${color} ${food}`;
//arrBandNames.push(bandName);
//console.log(arrBandNames);

console.log(generateClothingColor('green'));
console.log(generateFoodName('sausage'));