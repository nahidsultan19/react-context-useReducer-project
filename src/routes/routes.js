import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: 'top-rated',
                element: <TopRated />
            },
            {
                path: 'cart',
                element: <Cart />
            },
        ],
    },
]);

export default routes;