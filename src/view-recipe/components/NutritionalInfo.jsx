import MotionWrapperDelay from '@/components/FramerMotion/MotionWrapperDelay'
import React from 'react'

function NutritionalInfo({ recipe }) {
    const nutritionalInfo = recipe?.recipeData?.nutritionalInfo

    return (
        <div>
            <MotionWrapperDelay
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <h2 className="text-xl font-bold mb-4 mt-4">Nutritional Information</h2>
            </MotionWrapperDelay>
            <div className="grid grid-cols-2 gap-4">
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
                    <div className="group bg-red-50 p-4 rounded-lg border hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Calories</p>
                        <p className="font-medium group-hover:text-white">{nutritionalInfo?.calories || 'N/A'}</p>
                    </div>
                </MotionWrapperDelay>

                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >   <div className="group bg-red-50 p-4 rounded-lg border hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Protein</p>
                        <p className="font-medium group-hover:text-white">{nutritionalInfo?.protein || 'N/A'}</p>
                    </div></MotionWrapperDelay>
                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >   <div className="group bg-red-50 p-4 rounded-lg border hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Carbs</p>
                        <p className="font-medium group-hover:text-white">{nutritionalInfo?.carbs || 'N/A'}</p>
                    </div>
                </MotionWrapperDelay>
                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >   <div className="group bg-red-50 p-4 rounded-lg border hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Fat</p>
                        <p className="font-medium group-hover:text-white">{nutritionalInfo?.fat || 'N/A'}</p>
                    </div>
                </MotionWrapperDelay>

            </div>

            {recipe?.recipeData?.dietaryRestrictions?.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-medium mb-2">Dietary Restrictions</h3>
                    <div className="flex flex-wrap gap-2">
                        {recipe.recipeData.dietaryRestrictions.map((restriction, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                            >
                                {restriction}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default NutritionalInfo
