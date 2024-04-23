import { Link, useNavigate} from "react-router-dom"
import Sidebar from "./Sidebar"
import { useState } from "react"

const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const clickHandle = () => {
        setIsOpen(false) 
        if (!IsOpen) {
            console.log("reset successfully")
        }
        navigate("/about")
    }
    
    
return (
    <>
    <div className="sticky top-0 bg-white bg-opacity-50 py-2">
        <div className="grid grid-cols-2 flex-row pl-5 gap-10">
            <div className="flex flex-row gap-10">
                <Link to="/"><h1>Home</h1></Link>
                <h1 onClick={clickHandle}>about</h1>
            </div>
            <div className="sticky">
                <div className="flex justify-end pr-5">
                    <button onClick={()=>{setIsOpen(!IsOpen)}}>profile</button>
                </div>
            </div>
        </div>
        <div className="flex">
                
                <Sidebar open={IsOpen}/>
        </div>
        
    </div>
    
    </>
    )
}
export default Navbar