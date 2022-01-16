import './App.css';
import Homepage from './Pages/Home';
import SubsPage from './Pages/Subs';
import AboutMe from './Pages/Aboutme';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Bookings from './Pages/Subscriptions';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Homepage />} />
                <Route path={"/subscriptions-list"} element={<Bookings />} />
                <Route path={"/about-me"} element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;