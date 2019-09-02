function generateBandName(clothingColour, lastFoodEaten){

  let clothingColorFirst = clothingColour.charAt(0).toUpperCase();
  let clothingColorRest =  clothingColour.substr(1).toLowerCase();
  let lastFoodEatenFirst = lastFoodEaten.charAt(0).toUpperCase();
  let lastFoodEatenRest = lastFoodEaten.substr(1).toLowerCase();

    return `The ${clothingColorFirst}${clothingColorRest} ${lastFoodEatenFirst}${lastFoodEatenRest}`;

}
let bandName = generateBandName('black', 'spaghetti');
let arrBandName = [bandName];

console.log(arrBandName);
console.log(bandName);