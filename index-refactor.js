function generateBandName(clothingColour, lastFoodEaten){

    clothingColour = clothingColour.charAt(0).toUpperCase() + clothingColour.slice(1);
    lastFoodEaten = lastFoodEaten.charAt(0).toUpperCase() + lastFoodEaten.slice(1);
    

    return `The ${clothingColour} ${lastFoodEaten}`;

}

console.log(generateBandName('black', 'spaghetti'));