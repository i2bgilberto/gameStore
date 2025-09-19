import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "games/:slug",
                element: <GameDetailPage />
            }
        ]
    }
]);

export default router;