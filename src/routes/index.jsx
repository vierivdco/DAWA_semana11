import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "../pages";
import { BooksView } from "../pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />}/>
                <Route path="/books" element={<BooksView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;