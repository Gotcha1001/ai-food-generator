// RecipeComponents/InstructionsSection.jsx
import FeatureMotionWrapper from '@/components/FramerMotion/FeatureMotionWrapperMap'
import React from 'react'

function InstructionsSection({ recipe }) {
    return (
        <div className="md:col-span-2 mt-5 border rounded-lg p-5 hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black hover:text-white">
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="space-y-4">
                {recipe?.recipeData?.instructions?.map((instruction, index) => (
                    <FeatureMotionWrapper key={index} index={index}>
                        <li key={index} className="flex">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 font-medium text-sm">
                                {index + 1}
                            </span>
                            <span>{instruction}</span>
                        </li>
                    </FeatureMotionWrapper>
                ))}
            </ol>
        </div>
    )
}


export default InstructionsSection

