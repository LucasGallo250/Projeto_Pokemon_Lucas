import { Link } from "react-router-dom";

const Navbar =  () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Navbar;