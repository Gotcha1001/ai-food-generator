import { db } from '@/service/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import RecipeHeader from '../components/RecipeHeader'
import RecipeImageSection from '../components/RecipeImageSection'
import NutritionalInfo from '../components/NutritionalInfo'
import IngredientsSection from '../components/IngredientsSection'
import InstructionsSection from '../components/InstructionsSection'
import UserSelectionDetails from '../components/UserSelectionDetails'



function ViewRecipe() {

    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        recipeId && GetRecipeData()
    }, [recipeId])

    const GetRecipeData = async () => {
        const docRef = doc(db, 'AIRecipes', recipeId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            console.log('Document data:', docSnap.data())
            setRecipe(docSnap.data())
        }
        else {
            console.log('No such document!')
            toast.success('No Recipe Found...')
        }
    }

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>

            {/* Recipe Header */}
            <RecipeHeader recipe={recipe} />

            {/* Recipe Image Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <RecipeImageSection imageUrl={recipe.imageUrl} recipe={recipe} />

                {/* Nutritianl info */}
                <NutritionalInfo recipe={recipe} />

            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Ingredients */}
                <IngredientsSection recipe={recipe} />

                {/* Instructions Section */}
                <InstructionsSection recipe={recipe} />

            </div>


            {/* User Selection Details */}
            <UserSelectionDetails recipe={recipe} />

        </div>
    )
}

export default ViewRecipe