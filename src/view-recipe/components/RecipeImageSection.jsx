// function RecipeImageSection({ imageUrl, recipe }) {
//     return (
//         <div className="rounded-lg overflow-hidden shadow-md">

//             {/* TEMP IMAGE */}
//             <img
//                 src={'/placeholder2.jpg'}
//                 alt={recipe.recipeData?.recipeName}
//                 className="w-full h-72 object-cover"
//             />
//             {/* END OF TEMP IMAGE REMOVE LATER  */}

//             {/* {imageUrl ? (
//                 <img
//                     src={imageUrl}
//                     alt={recipe.recipeData?.recipeName}
//                     className="w-full h-64 object-cover"
//                 />
//             ) : (
//                 <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
//                     <span className="text-gray-500">No image available</span>
//                 </div>
//             )} */}
//         </div>
//     )
// }
// export default RecipeImageSection


// import { useState, useEffect } from 'react';

// function RecipeImageSection({ recipe }) {
//     const [imageUrl, setImageUrl] = useState('/placeholder2.jpg');

//     useEffect(() => {
//         const fetchImage = async () => {
//             try {
//                 // Get the recipe name
//                 const recipeName = recipe.recipeData?.recipeName || 'food';

//                 // Simplify the search term by extracting main dish name
//                 const mainDishKeywords = recipeName.split(' ');
//                 const mainDishName = mainDishKeywords.length > 1 ?
//                     mainDishKeywords.slice(-2).join(' ') :
//                     recipeName;

//                 console.log("Original recipe name:", recipeName);
//                 console.log("Simplified search term:", mainDishName);

//                 // Using the exact API key you provided
//                 const PEXELS_API_KEY = 'Fl5okNcJJlpHMGfJ8vXvppY52D1PVjQTAHijm2PnGL4uBiPpq5arWbAa';

//                 const response = await fetch(
//                     `https://api.pexels.com/v1/search?query=${encodeURIComponent(mainDishName)}+food&per_page=3&size=medium`,
//                     {
//                         headers: {
//                             'Authorization': PEXELS_API_KEY
//                         }
//                     }
//                 );

//                 if (!response.ok) {
//                     throw new Error(`Pexels API error: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.photos && data.photos.length > 0) {
//                     const photo = data.photos[0];
//                     console.log("Image found:", photo.src.medium);
//                     console.log("Image description:", photo.alt || "No description");

//                     setImageUrl(photo.src.medium);
//                 } else {
//                     console.log("No images found on Pexels, trying Unsplash as fallback");
//                     await fetchFromUnsplash(mainDishName);
//                 }
//             } catch (error) {
//                 console.error("Error fetching image from Pexels:", error);
//                 // Try Unsplash as fallback
//                 try {
//                     const mainDishName = recipe.recipeData?.recipeName?.split(' ').slice(-2).join(' ') || 'food';
//                     await fetchFromUnsplash(mainDishName);
//                 } catch (unsplashError) {
//                     console.error("Error fetching from Unsplash fallback:", unsplashError);
//                 }
//             }
//         };

//         const fetchFromUnsplash = async (searchTerm) => {
//             const API_KEY = import.meta.env.VITE_IMAGE_API_KEY;

//             const response = await fetch(
//                 `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}+food+dish&per_page=1&client_id=${API_KEY}`
//             );

//             if (!response.ok) {
//                 throw new Error(`Unsplash API error: ${response.status}`);
//             }

//             const data = await response.json();

//             if (data.results && data.results.length > 0) {
//                 console.log("Fallback image found from Unsplash");
//                 setImageUrl(data.results[0].urls.regular);
//             }
//         };

//         if (recipe.recipeData?.recipeName) {
//             fetchImage();
//         }
//     }, [recipe.recipeData?.recipeName]);

//     return (
//         <div className="rounded-lg overflow-hidden shadow-md">
//             <img
//                 src={imageUrl}
//                 alt={recipe.recipeData?.recipeName || "Recipe"}
//                 className="w-full h-72 object-cover"
//                 onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = '/placeholder2.jpg';
//                 }}
//             />
//         </div>
//     );
// }

// export default RecipeImageSection;


//IF ALL ELSE FAILS USE THIS ONE


// import { useState, useEffect } from 'react';

// function RecipeImageSection({ recipe }) {
//     const [imageUrl, setImageUrl] = useState('/placeholder2.jpg');

//     useEffect(() => {
//         const fetchImage = async () => {
//             try {
//                 // Get the recipe name
//                 const recipeName = recipe.recipeData?.recipeName || 'food';

//                 // Simplify the search term by extracting main dish name
//                 const mainDishKeywords = recipeName.split(' ');
//                 const mainDishName = mainDishKeywords.length > 1 ?
//                     mainDishKeywords.slice(-2).join(' ') :
//                     recipeName;

//                 console.log("Original recipe name:", recipeName);
//                 console.log("Simplified search term:", mainDishName);

//                 // You'll need to get a Pexels API key from: https://www.pexels.com/api/
//                 const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY || 'YOUR_PEXELS_API_KEY';

//                 const response = await fetch(
//                     `https://api.pexels.com/v1/search?query=${encodeURIComponent(mainDishName)}+food&per_page=3&size=medium`,
//                     {
//                         headers: {
//                             'Authorization': PEXELS_API_KEY
//                         }
//                     }
//                 );

//                 if (!response.ok) {
//                     throw new Error(`Pexels API error: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.photos && data.photos.length > 0) {
//                     const photo = data.photos[0];
//                     console.log("Image found:", photo.src.medium);
//                     console.log("Image description:", photo.alt || "No description");

//                     setImageUrl(photo.src.medium);
//                 } else {
//                     console.log("No images found on Pexels, trying Unsplash as fallback");
//                     await fetchFromUnsplash(mainDishName);
//                 }
//             } catch (error) {
//                 console.error("Error fetching image from Pexels:", error);
//                 // Try Unsplash as fallback
//                 try {
//                     const mainDishName = recipe.recipeData?.recipeName?.split(' ').slice(-2).join(' ') || 'food';
//                     await fetchFromUnsplash(mainDishName);
//                 } catch (unsplashError) {
//                     console.error("Error fetching from Unsplash fallback:", unsplashError);
//                 }
//             }
//         };

//         const fetchFromUnsplash = async (searchTerm) => {
//             const API_KEY = import.meta.env.VITE_IMAGE_API_KEY;

//             const response = await fetch(
//                 `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}+food+dish&per_page=1&client_id=${API_KEY}`
//             );

//             if (!response.ok) {
//                 throw new Error(`Unsplash API error: ${response.status}`);
//             }

//             const data = await response.json();

//             if (data.results && data.results.length > 0) {
//                 console.log("Fallback image found from Unsplash");
//                 setImageUrl(data.results[0].urls.regular);
//             }
//         };

//         if (recipe.recipeData?.recipeName) {
//             fetchImage();
//         }
//     }, [recipe.recipeData?.recipeName]);

//     return (
//         <div className="rounded-lg overflow-hidden shadow-md">
//             <img
//                 src={imageUrl}
//                 alt={recipe.recipeData?.recipeName || "Recipe"}
//                 className="w-full h-72 object-cover"
//                 onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = '/placeholder2.jpg';
//                 }}
//             />
//         </div>
//     );
// }

// export default RecipeImageSection;



// import { useState, useEffect } from 'react';

// function RecipeImageSection({ recipe }) {
//     const [imageUrl, setImageUrl] = useState('/placeholder2.jpg');
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchImage = async () => {
//             if (!recipe.recipeData?.recipeName) return;

//             setIsLoading(true);
//             try {
//                 // Get the recipe name
//                 const recipeName = recipe.recipeData.recipeName;
//                 console.log("Searching for recipe:", recipeName);

//                 // Get your API key from https://spoonacular.com/food-api
//                 const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

//                 // Use Spoonacular's recipe search endpoint
//                 const response = await fetch(
//                     `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(recipeName)}&number=3&apiKey=${SPOONACULAR_API_KEY}`
//                 );

//                 if (!response.ok) {
//                     throw new Error(`Spoonacular API error: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.results && data.results.length > 0) {
//                     // Get the first result
//                     console.log("Image found on Spoonacular:", data.results[0].image);
//                     setImageUrl(data.results[0].image);
//                 } else {
//                     console.log("No images found, using placeholder");
//                     setImageUrl('/placeholder2.jpg');
//                 }
//             } catch (error) {
//                 console.error("Error fetching image from Spoonacular:", error);
//                 setImageUrl('/placeholder2.jpg');
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchImage();
//     }, [recipe.recipeData?.recipeName]);

//     return (
//         <div className="rounded-lg overflow-hidden shadow-md relative">
//             {isLoading && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//                 </div>
//             )}
//             <img
//                 src={imageUrl}
//                 alt={recipe.recipeData?.recipeName || "Recipe"}
//                 className="w-full h-72 object-cover"
//                 onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = '/placeholder2.jpg';
//                 }}
//                 style={{ display: isLoading ? 'none' : 'block' }}
//             />
//         </div>
//     );
// }

// export default RecipeImageSection;










// using unsplash api not good enough


// import { useState, useEffect } from 'react';

// function RecipeImageSection({ recipe }) {
//     const [imageUrl, setImageUrl] = useState('/placeholder2.jpg');

//     useEffect(() => {
//         const fetchImage = async () => {
//             try {
//                 if (!recipe.recipeData?.recipeName) {
//                     setImageUrl('/placeholder2.jpg');
//                     return;
//                 }

//                 const recipeName = recipe.recipeData.recipeName;
//                 const cuisineType = recipe.recipeData?.cuisine || '';

//                 let searchTerms = recipeName.split(' ').filter(word =>
//                     word.length > 3 && !['with', 'and', 'the', 'for', 'from', 'that', 'this'].includes(word.toLowerCase())
//                 );

//                 // Explicitly focus on the core dish and key ingredients
//                 const keyIngredients = ['calamari', 'spicy', 'seafood']; // More focused keywords

//                 // Build search query with key ingredients only, removing unnecessary terms
//                 const searchQuery = searchTerms.length > 0
//                     ? `${searchTerms.join(' ')} ${keyIngredients.join(' ')}`
//                     : `${recipeName} calamari spicy`;

//                 const API_KEY = import.meta.env.VITE_IMAGE_API_KEY;

//                 if (!API_KEY) {
//                     console.error('API key for Unsplash is missing!');
//                     return;
//                 }

//                 console.log("Searching for:", searchQuery); // Debug

//                 const response = await fetch(
//                     `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=5&client_id=${API_KEY}`
//                 );

//                 if (!response.ok) {
//                     throw new Error(`Unsplash API error: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.results && data.results.length > 0) {
//                     const randomIndex = Math.floor(Math.random() * Math.min(data.results.length, 5));
//                     setImageUrl(data.results[randomIndex].urls.regular);
//                     console.log("Image found:", data.results[randomIndex].urls.regular);
//                 } else {
//                     console.log("No images found, using fallback");
//                     setImageUrl('/placeholder2.jpg');
//                 }
//             } catch (error) {
//                 console.error("Error fetching image:", error);
//                 setImageUrl('/placeholder2.jpg');
//             }
//         };

//         if (recipe.recipeData?.recipeName) {
//             fetchImage();
//         }

//     }, [recipe.recipeData?.recipeName, recipe.recipeData?.cuisine]);

//     return (
//         <div className="rounded-lg overflow-hidden shadow-md">
//             <img
//                 src={imageUrl}
//                 alt={recipe.recipeData?.recipeName || "Recipe"}
//                 className="w-4/5 h-auto apsect-video rounded-lg "
//                 onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = '/placeholder2.jpg';
//                 }}
//             />
//         </div>
//     );
// }

// export default RecipeImageSection;













// import { useState, useEffect } from 'react';

// function RecipeImageSection({ recipe }) {
//     const [imageUrl, setImageUrl] = useState('/placeholder2.jpg');
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         const generateImage = async () => {
//             if (!recipe.recipeData?.recipeName) return;

//             setIsLoading(true);

//             try {
//                 const REPLICATE_API_KEY = import.meta.env.VITE_REPLICATE_API_KEY;

//                 if (!REPLICATE_API_KEY) {
//                     console.error('Replicate API key is missing!');
//                     return;
//                 }

//                 const recipeName = recipe.recipeData.recipeName;
//                 const cuisine = recipe.recipeData?.cuisine || '';

//                 // Create a detailed prompt for better results
//                 const prompt = `A professional, appetizing food photography of ${recipeName}, ${cuisine} cuisine, on a beautiful plate, studio lighting, food styling, 4k, high detail`;

//                 const response = await fetch('https://api.replicate.com/v1/predictions', {
//                     method: 'POST',
//                     headers: {
//                         'Authorization': `Token ${REPLICATE_API_KEY}`,
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         // You can choose different models like:
//                         // - "stability-ai/sdxl"
//                         // - "midjourney/diffusion"
//                         version: "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
//                         input: {
//                             prompt: prompt,
//                             negative_prompt: "blurry, bad quality, cartoon, illustration, drawing",
//                             width: 1024,
//                             height: 1024,
//                             num_outputs: 1
//                         }
//                     })
//                 });

//                 const prediction = await response.json();

//                 if (prediction.error) {
//                     throw new Error(`Replicate API error: ${prediction.error}`);
//                 }

//                 // Poll for completion
//                 const pollInterval = setInterval(async () => {
//                     const pollResponse = await fetch(prediction.urls.get, {
//                         headers: {
//                             'Authorization': `Token ${REPLICATE_API_KEY}`,
//                         }
//                     });

//                     const pollResult = await pollResponse.json();

//                     if (pollResult.status === 'succeeded') {
//                         clearInterval(pollInterval);
//                         setImageUrl(pollResult.output[0]);
//                         setIsLoading(false);
//                     } else if (pollResult.status === 'failed') {
//                         clearInterval(pollInterval);
//                         console.error('Image generation failed:', pollResult);
//                         setIsLoading(false);
//                     }
//                 }, 1000);

//                 // Clean up interval on component unmount
//                 return () => clearInterval(pollInterval);

//             } catch (error) {
//                 console.error('Error generating image:', error);
//                 setIsLoading(false);
//             }
//         };

//         generateImage();
//     }, [recipe.recipeData?.recipeName, recipe.recipeData?.cuisine]);

//     return (
//         <div className="rounded-lg overflow-hidden shadow-md">
//             {isLoading ? (
//                 <div className="w-4/5 h-96 flex items-center justify-center bg-gray-100">
//                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//                 </div>
//             ) : (
//                 <img
//                     src={imageUrl}
//                     alt={recipe.recipeData?.recipeName || "Recipe"}
//                     className="w-4/5 h-auto aspect-video rounded-lg"
//                     onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = '/placeholder2.jpg';
//                     }}
//                 />
//             )}
//         </div>
//     );
// }

// export default RecipeImageSection;


import { useState, useEffect } from 'react';

function RecipeImageSection({ recipe }) {
    const [imageUrl, setImageUrl] = useState('/placeholder2.jpg');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchImage = async () => {
            if (!recipe.recipeData?.recipeName) return;

            setIsLoading(true);
            try {
                // Get the recipe name
                const recipeName = recipe.recipeData.recipeName;
                console.log("Searching for recipe:", recipeName);

                // Try Spoonacular API first
                await fetchFromSpoonacular(recipeName);
            } catch (error) {
                console.error("Error fetching image:", error);
                try {
                    // Fallback to Pexels if Spoonacular fails
                    await fetchFromPexels(recipe.recipeData.recipeName);
                } catch (pexelsError) {
                    console.error("Error with Pexels fallback:", pexelsError);
                    // Use placeholder as final fallback
                    setImageUrl('/placeholder2.jpg');
                }
            } finally {
                setIsLoading(false);
            }
        };

        const fetchFromSpoonacular = async (searchTerm) => {
            // Get your API key from https://spoonacular.com/food-api
            const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

            // Use Spoonacular's recipe search endpoint
            const response = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(searchTerm)}&number=1&apiKey=${SPOONACULAR_API_KEY}`
            );

            if (!response.ok) {
                throw new Error(`Spoonacular API error: ${response.status}`);
            }

            const data = await response.json();

            if (data.results && data.results.length > 0) {
                console.log("Image found on Spoonacular:", data.results[0].image);
                setImageUrl(data.results[0].image);
                return true;
            } else {
                console.log("No images found on Spoonacular");
                throw new Error("No images found on Spoonacular");
            }
        };

        const fetchFromPexels = async (searchTerm) => {
            // Simplify the search term by extracting main dish name
            const mainDishKeywords = searchTerm.split(' ');
            const mainDishName = mainDishKeywords.length > 1 ?
                mainDishKeywords.slice(-2).join(' ') :
                searchTerm;

            console.log("Simplified search term for Pexels:", mainDishName);

            const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

            const response = await fetch(
                `https://api.pexels.com/v1/search?query=${encodeURIComponent(mainDishName)}+food&per_page=3&size=medium`,
                {
                    headers: {
                        'Authorization': PEXELS_API_KEY
                    }
                }
            );

            if (!response.ok) {
                throw new Error(`Pexels API error: ${response.status}`);
            }

            const data = await response.json();

            if (data.photos && data.photos.length > 0) {
                console.log("Fallback image found from Pexels");
                setImageUrl(data.photos[0].src.medium);
                return true;
            }

            throw new Error("No images found on Pexels");
        };

        fetchImage();
    }, [recipe.recipeData?.recipeName]);

    return (
        <div className="rounded-lg overflow-hidden shadow-md relative">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
            <img
                src={imageUrl}
                alt="Recipe"
                className="w-full h-[500px] object-contain rounded-lg mb-4" // Use object-contain to ensure the full image is visible
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                }}
            />
        </div>
    );
}

export default RecipeImageSection;