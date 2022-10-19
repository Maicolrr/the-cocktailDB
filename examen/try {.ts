try {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass", {
    "method": "GET",
    "headers": {}
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}