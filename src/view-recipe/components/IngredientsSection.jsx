// RecipeComponents/IngredientsSection.jsx
import FeatureMotionWrapper from '@/components/FramerMotion/FeatureMotionWrapperMap'
import React from 'react'

function IngredientsSection({ recipe }) {
    return (
        <div className="md:col-span-1 border border-gray-300 rounded-lg p-6 bg-white shadow-md mt-6 hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black hover:text-white">
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <ul className="space-y-2">
                {recipe?.recipeData?.ingredients?.map((ingredient, index) => (
                    <FeatureMotionWrapper key={index} index={index}>
                        <li key={index} className="flex items-start">
                            <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mt-2 mr-2"></span>
                            <span>
                                <span className="font-medium">{ingredient?.amount}</span> {ingredient?.item}
                            </span>
                        </li>
                    </FeatureMotionWrapper>

                ))}
            </ul>
        </div>
    )
}

export default IngredientsSection

