import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate a recipe in JSON format based on the following inputs:\n•\tRecipe Name: Garlic Butter Pasta\n•\tServings: 4\n•\tCooking Time: 30 minutes\n•\tDietary Restrictions: Gluten-Free, Dairy-Free\n•\tCuisine: Italian\n•\tDifficulty: Medium\n•\tIngredients to Include: Garlic, Butter, Olive Oil, Parmesan, Pasta, Parsley\n•\tIngredients to Avoid: Dairy, Gluten\nOutput the recipe in JSON format, containing the following fields:\n•\trecipeName: The name of the recipe.\n•\tservings: The number of servings.\n•\tcookingTime: The total time to cook.\n•\tdietaryRestrictions: Dietary needs considered for the recipe.\n•\tcuisine: Type of cuisine.\n•\tdifficulty: Difficulty level of the recipe.\n•\tingredients: List of ingredients to use.\n•\tinstructions: Step-by-step cooking instructions.\n•\tnutritionalInfo: Nutritional information (calories, protein, carbs, fat).\n•\timageUrl: A relevant image of the dish.\n•\trating: A user rating for the recipe.\"\n" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"recipeName\": \"Garlic Butter Pasta (Dairy-Free & Gluten-Free)\",\n  \"servings\": 4,\n  \"cookingTime\": 30,\n  \"dietaryRestrictions\": [\"Gluten-Free\", \"Dairy-Free\"],\n  \"cuisine\": \"Italian\",\n  \"difficulty\": \"Medium\",\n  \"ingredients\": [\n    { \"item\": \"Gluten-free pasta\", \"amount\": \"1 pound\" },\n    { \"item\": \"Olive oil\", \"amount\": \"2 tablespoons\" },\n    { \"item\": \"Garlic\", \"amount\": \"4 cloves, minced\" },\n    { \"item\": \"Dairy-free butter\", \"amount\": \"4 tablespoons\" },\n    { \"item\": \"Nutritional yeast (for cheesy flavor)\", \"amount\": \"2 tablespoons\" },\n    { \"item\": \"Fresh parsley\", \"amount\": \"1/4 cup, chopped\" },\n    { \"item\": \"Salt\", \"amount\": \"To taste\" },\n    { \"item\": \"Black pepper\", \"amount\": \"To taste\" }\n  ],\n  \"instructions\": [\n    \"Cook gluten-free pasta according to package directions until al dente.\",\n    \"While pasta is cooking, heat olive oil in a large skillet over medium heat.\",\n    \"Add minced garlic and sauté for about 1 minute, until fragrant. Be careful not to burn the garlic.\",\n    \"Stir in dairy-free butter until melted.\",\n    \"Add nutritional yeast for a cheesy flavor.\",\n    \"Drain the cooked pasta and add it to the skillet with the garlic butter sauce.\",\n    \"Toss to coat the pasta evenly.\",\n    \"Stir in chopped parsley, salt, and pepper.\",\n    \"Serve immediately and garnish with extra parsley if desired.\"\n  ],\n  \"nutritionalInfo\": {\n    \"calories\": \"Approximately 400-500 per serving (depending on pasta type and brand)\",\n    \"protein\": \"15-20g per serving\",\n    \"carbs\": \"60-70g per serving\",\n    \"fat\": \"15-20g per serving\" \n  },\n  \"imageUrl\": \"https://example.com/garlic-butter-pasta.jpg\", \n  \"rating\": 4.5\n}\n```\n" },
            ],
        },
    ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// // TODO: Following code needs to be updated for client-side apps.
// const candidates = result.response.candidates;
// for (let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
//     for (let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
//         const part = candidates[candidate_index].content.parts[part_index];
//         if (part.inlineData) {
//             try {
//                 const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
//                 fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
//                 console.log(`Output written to: ${filename}`);
//             } catch (err) {
//                 console.error(err);
//             }
//         }
//     }
// }
// console.log(result.response.text());


