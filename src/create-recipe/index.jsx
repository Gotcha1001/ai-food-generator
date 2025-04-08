import React, { useEffect, useState } from 'react';
// Import only the components that you're sure exist in your project


import { RECIPE_PROMPT, SelectCuisineOptions, SelectDietaryOptions, SelectDifficultyOptions } from '@/constants/options';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SmokeEffect from '@/components/SmokeEffects/SmokeEffect';
import FeatureMotionWrapper from '@/components/FramerMotion/FeatureMotionWrapperMap';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModel';
// Import the options constants from the correct location
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


function CreateRecipe() {
    const [formData, setFormData] = useState({});
    const [openDialog, setOpenDialog] = useState(false)
    const [loading, setLoading] = useState(false)

    const router = useNavigate()

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);



    const login = useGoogleLogin({
        onSuccess: (codeResp) => GetUserProfile(codeResp),
        onError: (error) => console.log(error)
    })

    const onGenerateRecipe = async () => {
        const user = localStorage.getItem('user')
        if (!user) {
            setOpenDialog(true)
            return
        }

        if (!formData?.recipeName || !formData?.servings || !formData?.cookingTime || !formData?.dietary || !formData.cuisine || !formData?.difficulty || !formData?.ingredients || !formData?.avoidIngredients) {
            toast.success("Please Fill In All Details")
            return;
        }
        setLoading(true)

        const FINAL_PROMPT = RECIPE_PROMPT
            .replace('{recipeName}', formData?.recipeName)
            .replace('{servings}', formData?.servings)
            .replace('{cookingTime}', formData?.cookingTime)
            .replace('{dietaryRestrictions}', formData?.dietary)
            .replace('{cuisine}', formData?.cuisine)
            .replace('{difficulty}', formData?.difficulty)
            .replace('{ingredientsInclude}', formData?.ingredients)
            .replace('{ingredientsAvoid}', formData?.avoidIngredients)

        console.log("FORMDATA:", formData);
        console.log("FINAL:", FINAL_PROMPT)

        const result = await chatSession.sendMessage(FINAL_PROMPT)
        console.log("🍹😎:", result?.response?.text())
        setLoading(false)
        SaveAIRecipe(result?.response?.text())


    };


    const SaveAIRecipe = async (RecipeData) => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        const docId = Date.now().toString()
        await setDoc(doc(db, "AIRecipes", docId), {
            userSelection: formData,
            recipeData: JSON.parse(RecipeData),
            userEmail: user?.email,
            id: docId
        })
        setLoading(false)
        router('/view-recipe/' + docId)
    }


    const GetUserProfile = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: 'Application/json'
            }
        }).then((resp) => {
            console.log(resp)
            localStorage.setItem('user', JSON.stringify(resp.data))
            setOpenDialog(false)
            onGenerateRecipe()
        })
    }


    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
            <SmokeEffect isVisible={true} />
            <h2 className='font-bold text-3xl'>Tell Us Your Recipe Preferences</h2>
            <p className='mt-3 text-gray-500 text-xl'>Just Provide Some Basic Information, And Our Recipe Generator Will Create A Customized Recipe Based On Your Preferences 🍳🥗</p>

            <div className='mt-20 flex flex-col gap-10'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>
                        What Is The Name Of Your Recipe? 📝
                    </h2>
                    <Input
                        onChange={(e) => handleInputChange('recipeName', e.target.value)}
                        className="mt-2"
                        placeholder="E.g., Garlic Butter Pasta"
                    />
                </div>
            </div>

            <h2 className='text-xl my-3 font-medium'>
                How Many Servings Do You Want To Make? 🍽️
                <Input
                    onChange={(e) => handleInputChange('servings', e.target.value)}
                    className="mt-2"
                    placeholder="E.g., 4"
                    type="number"
                />
            </h2>

            <div>
                <h2 className='text-xl my-3 font-medium'>
                    How Much Time Do You Have For Cooking? ⏱️
                </h2>
                <Input
                    onChange={(e) => handleInputChange('cookingTime', e.target.value)}
                    className="mt-2"
                    placeholder="E.g., 30 minutes"
                />
            </div>

            <div>
                <h2 className='text-xl my-3 font-medium'>
                    What Dietary Restrictions Should We Consider?
                </h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {SelectDietaryOptions.map((item, index) => (
                        <FeatureMotionWrapper index={index} key={index}>
                            <div
                                onClick={() => handleInputChange('dietary', item.title)}
                                className={`p-4 border border-black rounded-lg hover:border-indigo-600 cursor-pointer hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black hover:text-white
                                ${formData?.dietary === item.title ? 'bg-gradient-to-r from-indigo-500 via-purple-900 to-black text-white shadow-neon' : ''}
                                `}>
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <h2 className='text-sm'>{item.desc}</h2>
                            </div>
                        </FeatureMotionWrapper>
                    ))}
                </div>
            </div>

            <div>
                <h2 className='text-xl my-3 font-medium'>
                    What Cuisine Would You Like To Cook?
                </h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {SelectCuisineOptions.map((item, index) => (
                        <FeatureMotionWrapper index={index} key={index}>
                            <div
                                onClick={() => handleInputChange('cuisine', item.title)}
                                className={`p-4 border border-black rounded-lg hover:border-indigo-600 cursor-pointer hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black hover:text-white
                                ${formData?.cuisine === item.title ? 'bg-gradient-to-r from-indigo-500 via-purple-900 to-black text-white shadow-neon' : ''}
                                `}>
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <h2 className='text-sm'>{item.desc}</h2>
                            </div>
                        </FeatureMotionWrapper>
                    ))}
                </div>
            </div>

            <div>
                <h2 className='text-xl my-3 font-medium'>
                    What Difficulty Level Are You Comfortable With?
                </h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {SelectDifficultyOptions.map((item, index) => (
                        <FeatureMotionWrapper index={index} key={index}>
                            <div
                                onClick={() => handleInputChange('difficulty', item.title)}
                                className={`p-4 border border-black rounded-lg hover:border-indigo-600 cursor-pointer hover:scale-105 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-black hover:text-white
                                ${formData?.difficulty === item.title ? 'bg-gradient-to-r from-indigo-500 via-purple-900 to-black text-white shadow-neon' : ''}
                                `}>
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <h2 className='text-sm'>{item.desc}</h2>
                            </div>
                        </FeatureMotionWrapper>
                    ))}
                </div>
            </div>

            <div>
                <h2 className='text-xl my-3 font-medium'>
                    Any Ingredients You Want To Include? (Optional)
                </h2>
                <Input
                    onChange={(e) => handleInputChange('ingredients', e.target.value)}
                    className="mt-2"
                    placeholder="E.g., chicken, tomatoes, basil"
                />
            </div>

            <div>
                <h2 className='text-xl my-3 font-medium'>
                    Any Ingredients You Want To Avoid? (Optional)
                </h2>
                <Input
                    onChange={(e) => handleInputChange('avoidIngredients', e.target.value)}
                    className="mt-2"
                    placeholder="E.g., nuts, dairy, gluten"
                />
            </div>

            <div className='flex justify-center items-center my-10'>
                <Button
                    disabled={loading}
                    onClick={onGenerateRecipe}
                    variant="default">
                    {loading ?
                        <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' />
                        : 'Generate Trip'
                    }
                </Button>
            </div>


            <Dialog open={openDialog}>

                <DialogContent>
                    <DialogHeader>

                        <DialogDescription>
                            <img src="/trip.jpg" alt="" />
                            <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
                            <p>Sign In To The App With Google Authentication Securely</p>
                            <Button
                                onClick={login}
                                className="w-full mt-5 flex gap-4 items-center"
                                variant="sex2"><FcGoogle className='h-12 w-12' />Sign In With Google</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


        </div>
    );
}

export default CreateRecipe;