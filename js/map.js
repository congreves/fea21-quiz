// Skriv en funktion som tar den givna arrayen
// och julifierar den genom att lägga till "Jul"
// framför allt.
// Använd dig av .map()

function christmasify(array) {
  // Skriv din kod här
  return array.map((food) => "Jul" + food);
}

const result = christmasify(["Sill", "Julmust", "Korv", "Janssons", "Svill"]);
console.log(result); // ["JulSill", "JulJulmust", "JulKorv", "JulJanssons", "JulSvill"]

module.exports = christmasify;
