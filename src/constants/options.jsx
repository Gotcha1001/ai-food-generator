// options.jsx
export const SelectDietaryOptions = [
  {
    id: 1,
    title: "Vegetarian",
    desc: "No meat, but may include dairy and eggs",
    icon: "🥦",
  },
  {
    id: 2,
    title: "Vegan",
    desc: "No animal products whatsoever",
    icon: "🌱",
  },
  {
    id: 3,
    title: "Gluten-Free",
    desc: "No wheat or gluten-containing ingredients",
    icon: "🌾",
  },
  {
    id: 4,
    title: "Keto",
    desc: "Low carb, high fat",
    icon: "🥑",
  },
  {
    id: 5,
    title: "No Restrictions",
    desc: "All ingredients welcome",
    icon: "🍽️",
  },
];

export const SelectCuisineOptions = [
  {
    id: 1,
    title: "Italian",
    desc: "Pasta, pizza, and more",
    icon: "🍝",
  },
  {
    id: 2,
    title: "Mexican",
    desc: "Spicy, flavorful dishes",
    icon: "🌮",
  },
  {
    id: 3,
    title: "Asian",
    desc: "From stir-fries to sushi",
    icon: "🍜",
  },
  {
    id: 4,
    title: "Mediterranean",
    desc: "Healthy and flavorful",
    icon: "🫒",
  },
  {
    id: 5,
    title: "American",
    desc: "Classic comfort foods",
    icon: "🍔",
  },
  {
    id: 6,
    title: "Surprise Me",
    desc: "Chef's choice from around the world",
    icon: "🌍",
  },
];

export const SelectDifficultyOptions = [
  {
    id: 1,
    title: "Easy",
    desc: "Simple recipes for beginners",
    icon: "🥄",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Some cooking experience helpful",
    icon: "👨‍🍳",
  },
  {
    id: 3,
    title: "Advanced",
    desc: "Complex techniques for experienced cooks",
    icon: "🏆",
  },
];


export const RECIPE_PROMPT = 'Generate a recipe in JSON format based on the following inputs: ' +
  '• Recipe Name: {recipeName} ' +
  '• Servings: {servings} ' +
  '• Cooking Time: {cookingTime} ' +
  '• Dietary Restrictions: {dietaryRestrictions} ' +
  '• Cuisine: {cuisine} ' +
  '• Difficulty: {difficulty} ' +
  '• Ingredients to Include: {ingredientsInclude} ' +
  '• Ingredients to Avoid: {ingredientsAvoid} ' +
  'Output the recipe in JSON format, containing the following fields: ' +
  '• recipeName: The name of the recipe. ' +
  '• servings: The number of servings. ' +
  '• cookingTime: The total time to cook. ' +
  '• dietaryRestrictions: Dietary needs considered for the recipe. ' +
  '• cuisine: Type of cuisine. ' +
  '• difficulty: Difficulty level of the recipe. ' +
  '• ingredients: List of ingredients to use. ' +
  '• instructions: Step-by-step cooking instructions. ' +
  '• nutritionalInfo: Nutritional information (calories, protein, carbs, fat). ' +
  '• imageUrl: A relevant image of the dish. ' +
  '• rating: A user rating for the recipe.';
