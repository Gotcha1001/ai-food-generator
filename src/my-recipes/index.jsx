import { useNavigate } from "react-router-dom"
import UserRecipeCardItem from "./components/UserRecipeCardItem"
import { toast } from 'sonner'
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/service/firebaseConfig"
import SmokeEffectIndividual from "@/components/SmokeEffects/SmokeEffectIndividual"
import MotionWrapperDelay from "@/components/FramerMotion/MotionWrapperDelay"
import FeatureMotionWrapper from "@/components/FramerMotion/FeatureMotionWrapperMap"


function MyRecipes() {
    const navigate = useNavigate()
    const [allRecipes, setAllRecipes] = useState([]) // Store all recipes
    const [userRecipes, setUserRecipes] = useState([]) // Paginated recipes
    const [filteredRecipes, setFilteredRecipes] = useState([]) // For search functionality
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [pageIndex, setPageIndex] = useState(0)
    const pageSize = 6 // Number of recipes per page

    useEffect(() => {
        GetUserRecipes()
    }, [])

    const GetUserRecipes = async () => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        if (!user) {
            navigate('/');
            return;
        }

        try {
            // Fetch user recipes from Firestore
            const q = query(collection(db, 'AIRecipes'), where('userEmail', '==', user?.email))
            const querySnapshot = await getDocs(q);

            const newRecipes = []
            querySnapshot.forEach((doc) => {
                const recipeData = doc.data()
                // Add document ID to the recipe data if not already included
                newRecipes.push({
                    ...recipeData,
                    id: doc.id // Make sure the ID is available
                })
            })

            // Set all recipes and initial filtered recipes
            setAllRecipes(newRecipes)
            setFilteredRecipes(newRecipes)

            // Set paginated recipes
            setPaginatedRecipes(newRecipes, 0)
        } catch (error) {
            console.error("Error fetching recipes:", error)
            toast.error("Failed to load recipes")
        } finally {
            setLoading(false)
        }
    }

    // Function to handle pagination
    const setPaginatedRecipes = (recipes, page) => {
        const start = page * pageSize;
        setUserRecipes(recipes.slice(start, start + pageSize));
    }

    // Function to handle search (can be implemented later)
    useEffect(() => {
        if (!searchQuery) {
            setFilteredRecipes(allRecipes);
            setPaginatedRecipes(allRecipes, pageIndex);
        } else {
            const filtered = allRecipes.filter((recipe) =>
                recipe?.userSelection?.recipeName?.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredRecipes(filtered);
            setPaginatedRecipes(filtered, 0); // Reset to first page
        }
    }, [searchQuery, allRecipes]);

    // Function to handle page change
    const handlePageChange = (newIndex) => {
        setPageIndex(newIndex);
        setPaginatedRecipes(filteredRecipes, newIndex);
    }

    // Function to handle recipe deletion
    const handleRecipeDeleted = (recipeId) => {
        // Remove the deleted recipe from all states
        const updatedRecipes = allRecipes.filter(recipe => recipe.id !== recipeId);
        setAllRecipes(updatedRecipes);
        setFilteredRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId));

        // Check if current page should be adjusted
        const currentPageItemCount = userRecipes.filter(recipe => recipe.id !== recipeId).length;
        if (currentPageItemCount === 0 && pageIndex > 0) {
            // If current page becomes empty and it's not the first page, go to previous page
            handlePageChange(pageIndex - 1);
        } else {
            // Otherwise, just update current page
            setPaginatedRecipes(filteredRecipes.filter(recipe => recipe.id !== recipeId), pageIndex);
        }

        toast.success("Recipe deleted successfully")
    }

    // Search input handler
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
            <SmokeEffectIndividual isVisible={true} />
            <MotionWrapperDelay
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: -100 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="text-center mb-8">
                    <h2 className='font-bold text-3xl mb-6'>My Recipes</h2>

                    {/* Centered search input */}
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search recipes..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {filteredRecipes.length > 0 && (
                            <span className="text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-900 to-black font-bold border p-2 rounded-lg">
                                {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
                            </span>
                        )}
                    </div>
                </div>
            </MotionWrapperDelay>

            <div id="recipe-list" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {loading ?
                    // Show skeleton UI while loading
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <FeatureMotionWrapper index={index} key={index}>
                            <div className='h-[300px] w-full bg-slate-200 animate-pulse rounded-lg'></div>
                        </FeatureMotionWrapper>
                    ))
                    : userRecipes.length > 0 ?
                        // Show recipes if available
                        userRecipes.map((recipe, index) => (
                            <FeatureMotionWrapper index={index} key={recipe.id || index}>
                                <UserRecipeCardItem
                                    recipe={recipe}
                                    onRecipeDeleted={handleRecipeDeleted}
                                />
                            </FeatureMotionWrapper>
                        ))
                        : filteredRecipes.length > 0 ?
                            // No recipes on current page but we have filtered recipes
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
                                <p className="text-gray-500">No recipes found on this page.</p>
                            </div>
                            :
                            // No recipes at all
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
                                <p className="text-gray-500">No recipes found. Create a new recipe to get started!</p>
                                <button
                                    onClick={() => navigate('/create-recipe')}
                                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    Create New Recipe
                                </button>
                            </div>
                }
            </div>

            {/* Pagination Controls */}
            {filteredRecipes.length > pageSize && (
                <div className="flex justify-between items-center mt-8">
                    <div className="text-sm text-gray-500">
                        Page {pageIndex + 1} of {Math.ceil(filteredRecipes.length / pageSize)}
                    </div>
                    <div className="flex gap-3 mb-10">
                        <button
                            onClick={() => handlePageChange(pageIndex - 1)}
                            disabled={pageIndex === 0}
                            className={`px-4 py-2 rounded-lg ${pageIndex === 0
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                } transition-colors`}
                        >
                            Previous
                        </button>

                        <button
                            onClick={() => handlePageChange(pageIndex + 1)}
                            disabled={filteredRecipes.length <= (pageIndex + 1) * pageSize}
                            className={`px-4 py-2 rounded-lg ${filteredRecipes.length <= (pageIndex + 1) * pageSize
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                } transition-colors`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyRecipes;
