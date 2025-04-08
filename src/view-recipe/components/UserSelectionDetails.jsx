import MotionWrapperDelay from '@/components/FramerMotion/MotionWrapperDelay'
import React from 'react'

function UserSelectionDetails({ recipe }) {
    return (


        <div className="mt-12 pt-6 border-t border-gray-200">
            <MotionWrapperDelay
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
            ><h2 className="text-xl font-semibold mb-4">Recipe Request Details</h2> </MotionWrapperDelay>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >  <div className="border p-3 bg-gray-50 rounded-lg group hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Recipe Name</p>
                        <p className="font-medium group-hover:text-white">{recipe.userSelection?.recipeName}</p>
                    </div></MotionWrapperDelay>



                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >   <div className="border p-3 bg-gray-50 rounded-lg group hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Cuisine</p>
                        <p className="font-medium group-hover:text-white">{recipe.userSelection?.cuisine}</p>
                    </div>
                </MotionWrapperDelay>


                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >    <div className="border p-3 bg-gray-50 rounded-lg group hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Cooking Time</p>
                        <p className="font-medium group-hover:text-white">{recipe.userSelection?.cookingTime}</p>
                    </div> </MotionWrapperDelay>

                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >    <div className="border p-3 bg-gray-50 rounded-lg group hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Servings</p>
                        <p className="font-medium group-hover:text-white">{recipe.userSelection?.servings}</p>
                    </div> </MotionWrapperDelay>


                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >       <div className="border p-3 bg-gray-50 rounded-lg group hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Difficulty</p>
                        <p className="font-medium group-hover:text-white">{recipe.userSelection?.difficulty}</p>
                    </div> </MotionWrapperDelay>


                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >   <div className="border p-3 bg-gray-50 rounded-lg group hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Dietary</p>
                        <p className="font-medium group-hover:text-white">{recipe.userSelection?.dietary}</p>
                    </div>  </MotionWrapperDelay>


                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >    <div className=" border p-3 bg-gray-50 rounded-lg group hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                        <p className="text-sm text-gray-500 group-hover:text-white">Key Ingredients</p>
                        <p className="font-medium group-hover:text-white">{recipe.userSelection?.ingredients}</p>
                    </div></MotionWrapperDelay>





                {recipe.userSelection?.avoidIngredients && (

                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >      <div className="border p-3 bg-gray-50 rounded-lg group hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black">
                            <p className="text-sm text-gray-500 group-hover:text-white">Avoid Ingredients</p>
                            <p className="font-medium group-hover:text-white">{recipe.userSelection?.avoidIngredients}</p>
                        </div> </MotionWrapperDelay>

                )}
            </div>
        </div>
    )
}

export default UserSelectionDetails
