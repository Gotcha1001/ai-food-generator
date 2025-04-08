// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Trash2 } from 'lucide-react';
// import { doc, deleteDoc } from 'firebase/firestore';
// import { db } from '@/service/firebaseConfig';

// // Default placeholder image
// const defaultImage = '/placeholder.jpg'; // Path to your placeholder image

// function UserRecipeCardItem({ recipe, onRecipeDeleted }) {
//     const [imageUrl, setImageUrl] = useState(defaultImage);

//     useEffect(() => {
//         const fetchImage = async () => {
//             if (!recipe?.userSelection?.recipeName) return;

//             try {
//                 // Replace with your Unsplash API key
//                 const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
//                 const query = recipe?.userSelection?.recipeName;

//                 // Fetch image from Unsplash
//                 const response = await fetch(
//                     `https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_API_KEY}`
//                 );

//                 const data = await response.json();

//                 if (data && data[0]?.urls?.regular) {
//                     setImageUrl(data[0].urls.regular); // Set image from Unsplash
//                 } else {
//                     setImageUrl(defaultImage); // Fallback to default image
//                 }
//             } catch (error) {
//                 console.error('Error fetching image from Unsplash:', error);
//                 setImageUrl(defaultImage); // Fallback to default image if fetch fails
//             }
//         };

//         fetchImage();
//     }, [recipe?.userSelection?.recipeName]);

//     const handleDeleteRecipe = async (e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         if (confirm('Are you sure you want to delete this recipe?')) {
//             try {
//                 await deleteDoc(doc(db, 'AIRecipes', recipe.id));
//                 onRecipeDeleted(recipe.id);
//             } catch (error) {
//                 console.error('Error deleting recipe:', error);
//                 alert('Failed to delete recipe. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="group mb-4 border rounded-lg p-4 flex flex-col gap-5 bg-white shadow-md hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black cursor-pointer relative">
//             <Link
//                 to={`/view-recipe/${recipe?.id}`}
//                 className="flex flex-col gap-5"
//             >
//                 <div className="transition-all duration-300">
//                     {/* Recipe Image with Fetch from Unsplash or Default Image */}
//                     <img
//                         src={imageUrl}
//                         alt="Recipe"
//                         className="w-full h-[200px] object-cover rounded-lg mb-4"
//                         onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src = defaultImage;
//                         }} // Fallback to default image if an error occurs
//                     />

//                     <h2 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">
//                         {recipe?.userSelection.recipeName}
//                     </h2>
//                     <p className="text-sm text-gray-500 group-hover:text-white transition-all duration-300">
//                         {recipe?.userSelection.cuisine}
//                     </p>
//                     <p className="text-sm text-gray-500 group-hover:text-white transition-all duration-300">
//                         {recipe?.userSelection?.ingredients.slice(0, 50)}...
//                     </p>
//                 </div>
//             </Link>

//             {/* Delete button */}
//             <button
//                 onClick={handleDeleteRecipe}
//                 className="absolute top-6 right-6 bg-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-700 z-10"
//                 title="Delete Recipe"
//             >
//                 <Trash2 size={8} color="white" />
//             </button>
//         </div>
//     );
// }

// export default UserRecipeCardItem;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Trash2 } from 'lucide-react';
// import { doc, deleteDoc } from 'firebase/firestore';
// import { db } from '@/service/firebaseConfig';

// // Default placeholder image
// const defaultImage = '/placeholder.jpg'; // Path to your placeholder image

// function UserRecipeCardItem({ recipe, onRecipeDeleted }) {
//     const [imageUrl, setImageUrl] = useState(defaultImage);

//     useEffect(() => {
//         const fetchImage = async () => {
//             // If recipe name is available, fetch image from Unsplash
//             if (!recipe?.userSelection?.recipeName) return;

//             try {
//                 const searchTerm = recipe?.userSelection?.recipeName; // Extract the recipe name
//                 const UNSPLASH_API_KEY = import.meta.env.VITE_IMAGE_API_KEY; // Get API key from environment variables

//                 console.log("Searching for:", searchTerm); // Debugging log

//                 const response = await fetch(
//                     `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}+food&per_page=1&client_id=${UNSPLASH_API_KEY}`
//                 );

//                 if (!response.ok) {
//                     throw new Error(`Unsplash API error: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.results && data.results.length > 0) {
//                     // Set the image URL from Unsplash if found
//                     setImageUrl(data.results[0].urls.regular);
//                     console.log("Image found:", data.results[0].urls.regular); // Debugging log
//                 } else {
//                     console.log("No images found, using fallback");
//                 }
//             } catch (error) {
//                 console.error("Error fetching image from Unsplash:", error);
//                 setImageUrl(defaultImage); // Fallback to default image in case of an error
//             }
//         };

//         fetchImage(); // Call the fetchImage function when recipe name changes
//     }, [recipe?.userSelection?.recipeName]);

//     const handleDeleteRecipe = async (e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         if (confirm('Are you sure you want to delete this recipe?')) {
//             try {
//                 await deleteDoc(doc(db, 'AIRecipes', recipe.id)); // Delete recipe from Firestore
//                 onRecipeDeleted(recipe.id); // Notify parent to update the list
//             } catch (error) {
//                 console.error('Error deleting recipe:', error);
//                 alert('Failed to delete recipe. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="group mb-4 border rounded-lg p-4 flex flex-col gap-5 bg-white shadow-md hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black cursor-pointer relative">
//             <Link to={`/view-recipe/${recipe?.id}`} className="flex flex-col gap-5">
//                 <div className="transition-all duration-300">
//                     <img
//                         src={imageUrl}
//                         alt="Recipe"
//                         className="w-full h-[200px] object-cover rounded-lg mb-4"
//                         onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src = defaultImage;
//                         }}
//                     />

//                     <div className="space-y-2"> {/* Add spacing between text blocks */}
//                         <h2 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">
//                             {recipe?.userSelection.recipeName}
//                         </h2>
//                         <h2 className="font-bold text-sm text-black group-hover:text-white transition-all duration-300">
//                             Serves: {recipe?.userSelection.servings}
//                         </h2>
//                         <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-all duration-300">
//                             Cuisine: {recipe?.userSelection.cuisine}
//                         </p>
//                         <p className="text-xs text-gray-800 group-hover:text-white transition-all duration-300">
//                             Difficulty: {recipe?.userSelection.difficulty}
//                         </p>
//                         <p className="text-xs text-gray-600 group-hover:text-white transition-all duration-300">
//                             Restrictions: {recipe?.userSelection?.dietary}
//                         </p>
//                         <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-all duration-300">
//                             Cooking Time: {recipe?.userSelection?.cookingTime}
//                         </p>
//                         <p className="text-xs text-gray-900 group-hover:text-white transition-all duration-300">
//                             Avoid Ingredients: {recipe?.userSelection?.avoidIngredients}
//                         </p>
//                     </div>
//                 </div>
//             </Link>

//             {/* Delete button */}
//             <button
//                 onClick={handleDeleteRecipe}
//                 className="absolute top-6 right-6 bg-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-700 z-10"
//                 title="Delete Recipe"
//             >
//                 <Trash2 size={8} color="white" />
//             </button>
//         </div>
//     );
// }

// export default UserRecipeCardItem;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';

// Default placeholder image
const defaultImage = '/placeholder.jpg'; // Path to your placeholder image

function UserRecipeCardItem({ recipe, onRecipeDeleted }) {
    const [imageUrl, setImageUrl] = useState(defaultImage);

    useEffect(() => {
        const fetchImage = async () => {
            // If recipe name is available, fetch image from Pexels
            if (!recipe?.userSelection?.recipeName) return;

            try {
                // Simplify the search term by extracting main dish name
                const recipeName = recipe?.userSelection?.recipeName;
                const mainDishKeywords = recipeName.split(' ');
                const mainDishName = mainDishKeywords.length > 1 ?
                    mainDishKeywords.slice(-2).join(' ') :
                    recipeName;

                console.log("Original recipe name:", recipeName);
                console.log("Simplified search term:", mainDishName);

                // Pexels API Key
                const PEXELS_API_KEY = 'Fl5okNcJJlpHMGfJ8vXvppY52D1PVjQTAHijm2PnGL4uBiPpq5arWbAa';

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
                    const photo = data.photos[0];
                    console.log("Image found:", photo.src.medium);
                    console.log("Image description:", photo.alt || "No description");

                    setImageUrl(photo.src.medium);
                } else {
                    console.log("No images found on Pexels, using default image");
                    setImageUrl(defaultImage);
                }
            } catch (error) {
                console.error("Error fetching image from Pexels:", error);
                setImageUrl(defaultImage); // Fallback to default image in case of an error
            }
        };

        fetchImage(); // Call the fetchImage function when recipe name changes
    }, [recipe?.userSelection?.recipeName]);

    const handleDeleteRecipe = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (confirm('Are you sure you want to delete this recipe?')) {
            try {
                await deleteDoc(doc(db, 'AIRecipes', recipe.id)); // Delete recipe from Firestore
                onRecipeDeleted(recipe.id); // Notify parent to update the list
            } catch (error) {
                console.error('Error deleting recipe:', error);
                alert('Failed to delete recipe. Please try again.');
            }
        }
    };

    return (
        <div className="group mb-4 border rounded-lg p-4 flex flex-col gap-5 bg-white shadow-md hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black cursor-pointer relative">
            <Link to={`/view-recipe/${recipe?.id}`} className="flex flex-col gap-5">
                <div className="transition-all duration-300">
                    <img
                        src={imageUrl}
                        alt="Recipe"
                        className="w-full h-[400px] object-contain rounded-lg mb-4" // Use object-contain to ensure the full image is visible
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImage;
                        }}
                    />

                    <div className="space-y-2"> {/* Add spacing between text blocks */}
                        <h2 className="font-bold text-lg text-black group-hover:text-white transition-all duration-300">
                            {recipe?.userSelection.recipeName}
                        </h2>
                        <h2 className="font-bold text-sm text-black group-hover:text-white transition-all duration-300">
                            Serves: {recipe?.userSelection.servings}
                        </h2>
                        <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-all duration-300">
                            Cuisine: {recipe?.userSelection.cuisine}
                        </p>
                        <p className="text-xs text-gray-800 group-hover:text-white transition-all duration-300">
                            Difficulty: {recipe?.userSelection.difficulty}
                        </p>
                        <p className="text-xs text-gray-600 group-hover:text-white transition-all duration-300">
                            Restrictions: {recipe?.userSelection?.dietary}
                        </p>
                        <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-all duration-300">
                            Cooking Time: {recipe?.userSelection?.cookingTime}
                        </p>
                        <p className="text-xs text-gray-900 group-hover:text-white transition-all duration-300">
                            Avoid Ingredients: {recipe?.userSelection?.avoidIngredients}
                        </p>
                    </div>
                </div>
            </Link>

            {/* Delete button */}
            <button
                onClick={handleDeleteRecipe}
                className="absolute top-6 right-6 bg-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-700 z-10"
                title="Delete Recipe"
            >
                <Trash2 size={8} color="white" />
            </button>
        </div>
    );
}

export default UserRecipeCardItem;