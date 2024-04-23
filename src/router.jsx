import React, { useContext, useEffect, useState } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
import NotFoundPage from "./pages/AlertPages/NotFoundPage";
import UnAuthorizedPage from "./pages/AlertPages/UnAuthorizedPage";
import GuestPage from "./pages/GuestPages/GuestPage";

const TIMEOUT_DURATION = 3000;

const DelayedRoute = ({ element }) => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, TIMEOUT_DURATION);

        return () => clearTimeout(timer);
    }, []);

    return showLoader ? (
        <div className="default-page-container">
            <div className="text-loader">Page Loading</div>
            <div className="loader"></div>
        </div>
    ) : (
        element
    );
};

// const PrivateRoute = ({ element }) => {
//     const { currentUser } = useContext(AuthContext); // Access currentUser from the authentication context

//     // If currentUser is null (user is not authenticated), redirect to the SigninPage
//     if (!currentUser) {
//         return <Navigate to="/signin" />;
//     }

//     // If user is authenticated, render the original element
//     return element;
// };

// const AuthRoute = ({ element }) => {
//     const { currentUser } = useContext(AuthContext); // Access currentUser from the authentication context

//     // If currentUser is not null (user is authenticated), redirect to the AdminPage
//     if (currentUser) {
//         return <Navigate to="/admin" />;
//     }

//     // If user is not authenticated, render the original element
//     return element;
// };

const router = createBrowserRouter([
    {
        path: "/",
        element: <DelayedRoute element={<GuestPage />} />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
    {
        path: "/unauthorized",
        element: <UnAuthorizedPage />,
    },
]);

export default router;
