import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
/*import Contact from './pages/Contact';
import Err from './pages/Err';
*/
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                
            </Routes>
        </BrowserRouter>
    )
}
/*
<Route path="/contato" element={<Contact />} />
                <Route path="*" element={<Err />} />
*/

export default Router;
