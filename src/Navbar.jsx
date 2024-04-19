import { Link } from "react-router-dom"

const Navbar = () => {

    return (<div className="flex flex-row justify-center gap-10">
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/about"><h1>about</h1></Link>
        <h1></h1>
        <h1></h1>
    </div>)
}
export default Navbar