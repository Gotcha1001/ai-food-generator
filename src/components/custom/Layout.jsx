import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";



// Create a root layout component
function RootLayout() {
    return (
        <>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
                <Header />
                {/* <div className="animated-bg fixed -z-10 inset-0 opacity-100" /> */}
                <Outlet /> {/* This is where route components will render */}
                <Toaster richColors />
            </GoogleOAuthProvider>
        </>
    );
}
export default RootLayout;