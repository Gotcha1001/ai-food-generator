// import React from 'react'
// import { Button } from '../ui/button'
// import VortexMandalaSmokeEffect from '../Mandalas/VortexMandalasSmokeEffect'
// import TriangleMandalas3 from '../Mandalas/TriangleMandalas3'
// import { useNavigate } from 'react-router-dom';

// function Header() {

//     const navigate = useNavigate();

//     return (
//         <div className='p-3 py-10 shadow-lg flex justify-between items-center px-5 gradient-background2 relative overflow-hidden'>

//             <div className="dynamic-bg" />
//             <img
//                 onClick={() => navigate('/')}
//                 src="/trip.jpg" alt="Logo" height={300} width={300}
//                 className='rounded-lg z-20 cursor-pointer hover:scale-105 transition-all'
//             />
//             <TriangleMandalas3 />
//             <div className='z-20'>
//                 <Button

//                 >Sign In</Button>
//             </div>
//         </div>
//     )
// }

// export default Header


// import React, { useEffect, useState } from 'react';
// import { Button } from '../ui/button';
// import VortexMandalaSmokeEffect from '../Mandalas/VortexMandalasSmokeEffect';
// import TriangleMandalas3 from '../Mandalas/TriangleMandalas3';
// import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// function Header() {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [openDialog, setOpenDialog] = useState(false);

//     // Load user data from localStorage on component mount
//     useEffect(() => {
//         const userData = localStorage.getItem('user');
//         if (userData) {
//             setUser(JSON.parse(userData));
//         }
//     }, []);

//     const login = useGoogleLogin({
//         onSuccess: (codeResp) => GetUserProfile(codeResp),
//         onError: (error) => console.log(error)
//     });

//     const GetUserProfile = (tokenInfo) => {
//         axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
//             headers: {
//                 Authorization: `Bearer ${tokenInfo?.access_token}`,
//                 Accept: 'Application/json'
//             }
//         }).then((resp) => {
//             console.log(resp);
//             localStorage.setItem('user', JSON.stringify(resp.data));
//             setUser(resp.data);
//             setOpenDialog(false);
//         });
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         setUser(null);
//     };

//     return (
//         <div className='p-3 py-10 shadow-lg flex justify-between items-center px-5 gradient-background2 relative overflow-hidden'>
//             <div className="dynamic-bg" />
//             <img
//                 onClick={() => navigate('/')}
//                 src="/trip.jpg"
//                 alt="Logo"
//                 height={300}
//                 width={300}
//                 className='rounded-lg z-20 cursor-pointer hover:scale-105 transition-all'
//             />
//             <TriangleMandalas3 />

//             <div className='z-20'>
//                 {!user ? (
//                     <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
//                 ) : (
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Avatar className="cursor-pointer h-12 w-12 hover:ring-2 hover:ring-indigo-500 transition-all">
//                                 <AvatarImage src={user.picture} alt={user.name} />
//                                 <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
//                             </Avatar>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end" className="w-56">
//                             <div className="p-2 border-b">
//                                 <p className="font-medium">{user.name}</p>
//                                 <p className="text-sm text-gray-500">{user.email}</p>
//                             </div>
//                             <DropdownMenuItem onClick={() => navigate('/profile')}>
//                                 Profile
//                             </DropdownMenuItem>
//                             <DropdownMenuItem onClick={() => navigate('/my-trips')}>
//                                 My Trips
//                             </DropdownMenuItem>
//                             <DropdownMenuItem className="text-red-500" onClick={handleLogout}>
//                                 Logout
//                             </DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 )}
//             </div>

//             <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogDescription>
//                             <img src="/trip.jpg" alt="" />
//                             <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
//                             <p>Sign In To The App With Google Authentication Securely</p>
//                             <Button
//                                 onClick={login}
//                                 className="w-full mt-5 flex gap-4 items-center"
//                                 variant="sex2"
//                             >
//                                 <FcGoogle className='h-12 w-12' />
//                                 Sign In With Google
//                             </Button>
//                         </DialogDescription>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// }

// export default Header;


// import React, { useEffect, useState } from 'react';
// import { Button } from '../ui/button';
// import VortexMandalaSmokeEffect from '../Mandalas/VortexMandalasSmokeEffect';
// import TriangleMandalas3 from '../Mandalas/TriangleMandalas3';
// import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
// } from "@/components/ui/dialog";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger
// } from "@/components/ui/dropdown-menu";
// import { Avatar } from "@/components/ui/avatar";

// function Header() {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [openDialog, setOpenDialog] = useState(false);

//     // Load user data from localStorage on component mount
//     useEffect(() => {
//         const userData = localStorage.getItem('user');
//         if (userData) {
//             setUser(JSON.parse(userData));
//         }
//     }, []);

//     const login = useGoogleLogin({
//         onSuccess: (codeResp) => GetUserProfile(codeResp),
//         onError: (error) => console.log(error)
//     });

//     const GetUserProfile = (tokenInfo) => {
//         axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
//             headers: {
//                 Authorization: `Bearer ${tokenInfo?.access_token}`,
//                 Accept: 'Application/json'
//             }
//         }).then((resp) => {
//             console.log("User data:", resp.data);
//             localStorage.setItem('user', JSON.stringify(resp.data));
//             setUser(resp.data);
//             setOpenDialog(false);
//         });
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         setUser(null);
//     };

//     console.log("Current user state:", user);

//     return (
//         <div className='p-3 py-10 shadow-lg flex justify-between items-center px-5 gradient-background2 relative overflow-hidden'>
//             <div className="dynamic-bg" />
//             <img
//                 onClick={() => navigate('/')}
//                 src="/trip.jpg"
//                 alt="Logo"
//                 height={300}
//                 width={300}
//                 className='rounded-lg z-20 cursor-pointer hover:scale-105 transition-all'
//             />
//             <TriangleMandalas3 />

//             <div className='z-20'>
//                 {!user ? (
//                     <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
//                 ) : (
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all">
//                                 <img
//                                     src={user.picture}
//                                     alt={user.name}
//                                     className="h-12 w-12 rounded-full object-cover border-2 border-indigo-500"
//                                 />
//                                 {/* <span className="font-medium text-white">{user.name}</span> */}
//                             </div>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end" className="w-56">
//                             <div className="p-2 border-b">
//                                 <p className="font-medium">{user.name}</p>
//                                 <p className="text-sm text-gray-500">{user.email}</p>
//                             </div>
//                             <DropdownMenuItem className="text-red-500 font-medium" onClick={handleLogout}>
//                                 Logout
//                             </DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 )}
//             </div>

//             <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogDescription>
//                             <img src="/trip.jpg" alt="" />
//                             <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
//                             <p>Sign In To The App With Google Authentication Securely</p>
//                             <Button
//                                 onClick={login}
//                                 className="w-full mt-5 flex gap-4 items-center"
//                                 variant="sex2"
//                             >
//                                 <FcGoogle className='h-12 w-12' />
//                                 Sign In With Google
//                             </Button>
//                         </DialogDescription>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// }

// export default Header;

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import VortexMandalaSmokeEffect from '../Mandalas/VortexMandalasSmokeEffect';
import TriangleMandalas3 from '../Mandalas/TriangleMandalas3';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown state

    // Load user data from localStorage on component mount
    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const login = useGoogleLogin({
        onSuccess: (codeResp) => GetUserProfile(codeResp),
        onError: (error) => console.log(error)
    });

    const GetUserProfile = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: 'Application/json'
            }
        }).then((resp) => {
            console.log("User data:", resp.data);
            localStorage.setItem('user', JSON.stringify(resp.data));
            setUser(resp.data);
            setOpenDialog(false);
        });
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setDropdownOpen(false); // Close dropdown when logging out
        navigate('/'); // Redirect to home page on logout   
    };

    console.log("Current user state:", user);

    return (
        <div className='p-3 py-10 shadow-lg flex justify-between items-center px-5 gradient-background2 relative overflow-hidden'>
            <div className="dynamic-bg" />
            <img
                onClick={() => navigate('/')}
                src="/trip.jpg"
                alt="Logo"
                height={300}
                width={300}
                className='rounded-lg z-20 cursor-pointer hover:scale-105 transition-all'
            />
            <TriangleMandalas3 />

            <div className='z-20'>
                {!user ? (
                    <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
                ) : (
                    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all">
                                <img
                                    src={user.picture}
                                    alt={user.name}
                                    className="h-14 w-14 rounded-full object-cover border-2 border-indigo-500"
                                />
                            </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-56">
                            <div className="p-2 border-b">
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>

                            <DropdownMenuItem
                                onClick={() => {
                                    setDropdownOpen(false); // Close dropdown after navigation
                                    navigate('/my-recipes');
                                }}
                                className="font-medium hover:bg-gray-100 cursor-pointer"
                            >
                                🧳 Users Recipes
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={() => {
                                    setDropdownOpen(false); // Close dropdown after navigation
                                    navigate('/create-recipe');
                                }}
                                className="font-medium hover:bg-gray-100 cursor-pointer"
                            >
                                ➕ Create Recipe
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={handleLogout}
                                className="text-red-500 font-medium cursor-pointer"
                            >
                                🚪 Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogDescription>
                            <img src="/trip.jpg" alt="" />
                            <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
                            <p>Sign In To The App With Google Authentication Securely</p>
                            <Button
                                onClick={login}
                                className="w-full mt-5 flex gap-4 items-center"
                                variant="sex2"
                            >
                                <FcGoogle className='h-12 w-12' />
                                Sign In With Google
                            </Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Header;
