import { Route, Routes } from "react-router-dom";

import { Catalog } from "./components/catalog-page/Catalog";
import { Create } from "./components/create-page/Create";
import { Delete } from "./components/delete-component/Delete";
import { Details } from "./components/details-page/Details";
import { Edit } from "./components/edit-page/Edit";
import { Footer } from "./components/footer-component/Footer";
import { Home } from "./components/home-page/Home";
import { Login } from "./components/login-page/Login";
import { Logout } from "./components/logout-component/Logout";
import { Navigation } from "./components/navigation/Navigation";
import { Register } from "./components/register-page/Register";
import AuthContextProvider from "./context/AuthContext";
import CareerContextProvider from "./context/CareereContext";

import { RouteGards } from "./util/RouteGards";

function App() {
    return (
        <div className="App">
            <AuthContextProvider >

                <Navigation />
                <CareerContextProvider >

         
                        <Routes >
                            <Route path="/" element={<Home />} ></Route>
                            <Route path="/login" element={<Login />} ></Route>
                            <Route path="/register" element={<Register />} ></Route>
                            <Route path="/create" element={<RouteGards> <Create /> </RouteGards>} ></Route>
                            <Route path="/catalog" element={<Catalog />} ></Route>
                            <Route path="/details/:id" element={<Details />} ></Route>
                            <Route path="/edit/:id" element={<RouteGards> <Edit /></RouteGards>} ></Route>
                            <Route path="/logout" element={<Logout />} ></Route>
                            <Route path="/delete/:id" element={<RouteGards> <Delete /> </RouteGards>} ></Route>
                        </Routes>

                </CareerContextProvider>
            </AuthContextProvider>
            <Footer />
        </div>
    );
}

export default App;
