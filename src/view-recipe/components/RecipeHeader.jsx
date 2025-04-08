import MotionWrapperDelay from '@/components/FramerMotion/MotionWrapperDelay';
import { Button } from '@/components/ui/button';
import { ChefHat, Clock, Star, Users } from 'lucide-react';
import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton } from 'react-share';
import { HiClipboardDocumentCheck, HiClipboardDocument } from "react-icons/hi2";

function RecipeHeader({ recipe }) {
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [copied, setCopied] = useState(false);

    // Fix for the undefined ID issue using the correct route path
    const recipeId = recipe?.recipeData?._id || recipe?.recipeData?.id;
    const shareUrl = typeof window !== 'undefined'
        ? recipeId
            ? `${window.location.origin}/view-recipe/${recipeId}` // Correct path structure
            : window.location.href // Fallback to current URL
        : ''; // Empty string as fallback when not in browser

    // Log for debugging
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        console.log('Recipe data:', recipe);
        console.log('Generated share URL:', shareUrl);
    }

    const toggleShareOptions = () => {
        setShowShareOptions(!showShareOptions);
        // Reset copied state when closing the menu
        if (showShareOptions) {
            setCopied(false);
        }
    };

    const copyToClipboard = async () => {
        try {
            // Only attempt to copy if we have a valid URL
            if (shareUrl) {
                await navigator.clipboard.writeText(shareUrl);
                setCopied(true);

                // Reset copied status after 3 seconds
                setTimeout(() => {
                    setCopied(false);
                }, 3000);
            }
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    // Function to get a shortened display URL
    const getDisplayUrl = () => {
        if (!shareUrl) return 'Loading URL...';
        if (shareUrl.length > 40) {
            return shareUrl.substring(0, 37) + '...';
        }
        return shareUrl;
    };

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
                <div className='flex justify-between items-center'>
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className="text-3xl font-bold mb-2">{recipe.recipeData?.recipeName}</h1>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-1" />
                            <span>{recipe.recipeData?.cookingTime} minutes</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="w-5 h-5 mr-1" />
                            <span>{recipe.recipeData?.servings} servings</span>
                        </div>
                        <div className="flex items-center">
                            <ChefHat className="w-5 h-5 mr-1" />
                            <span>{recipe.recipeData?.difficulty}</span>
                        </div>
                        <div className="flex items-center">
                            <Star className="w-5 h-5 mr-1 text-yellow-500" />
                            <span>{recipe.recipeData?.rating.toFixed(1)}</span>
                        </div>
                        <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {recipe.recipeData?.cuisine}
                        </div>
                    </div>

                    <div className="relative">
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
                            <Button
                                variant="secondary"
                                onClick={toggleShareOptions}
                                className="flex items-center gap-2"
                            >
                                <IoIosSend />Share
                            </Button>
                        </MotionWrapperDelay>

                        {showShareOptions && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 z-10 w-64">
                                {/* Copy Link Option */}
                                <div className="mb-4 border-b pb-3">
                                    <div className="text-sm text-gray-500 mb-2">Copy Link</div>
                                    <div className="flex items-center justify-between bg-gray-100 rounded-md p-2">
                                        <div className="text-sm truncate mr-2 w-44">{getDisplayUrl()}</div>
                                        <button
                                            onClick={copyToClipboard}
                                            className="text-blue-600 hover:text-blue-800 focus:outline-none"
                                            aria-label="Copy to clipboard"
                                            disabled={!shareUrl}
                                        >
                                            {copied ? (
                                                <HiClipboardDocumentCheck className="h-6 w-6 text-green-500" />
                                            ) : (
                                                <HiClipboardDocument className="h-6 w-6" />
                                            )}
                                        </button>
                                    </div>
                                    {copied && (
                                        <div className="text-xs text-green-600 mt-1">
                                            Link copied to clipboard!
                                        </div>
                                    )}
                                </div>

                                {/* Social Share Options */}
                                <div className="flex flex-col gap-4">
                                    <FacebookShareButton url={shareUrl} disabled={!shareUrl}>
                                        <div className="flex items-center gap-2 hover:text-blue-600">
                                            <FaFacebook className="h-6 w-6 text-blue-600" />
                                            <span>Facebook</span>
                                        </div>
                                    </FacebookShareButton>

                                    <TwitterShareButton url={shareUrl} disabled={!shareUrl}>
                                        <div className="flex items-center gap-2 hover:text-blue-400">
                                            <FaTwitter className="h-6 w-6 text-blue-400" />
                                            <span>Twitter</span>
                                        </div>
                                    </TwitterShareButton>

                                    <WhatsappShareButton url={shareUrl} disabled={!shareUrl}>
                                        <div className="flex items-center gap-2 hover:text-green-500">
                                            <FaWhatsapp className="h-6 w-6 text-green-500" />
                                            <span>WhatsApp</span>
                                        </div>
                                    </WhatsappShareButton>

                                    <LinkedinShareButton url={shareUrl} disabled={!shareUrl}>
                                        <div className="flex items-center gap-2 hover:text-blue-700">
                                            <FaLinkedin className="h-6 w-6 text-blue-700" />
                                            <span>LinkedIn</span>
                                        </div>
                                    </LinkedinShareButton>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </MotionWrapperDelay>
        </div>
    );
}

export default RecipeHeader;