import Navbar from "./Navbar"
import Sec1 from "./FirstText"
import { useScroll, useMotionValueEvent} from "framer-motion"
import { useRef } from "react"

const Home = () => {
    const targetRef = useRef(null)
    const { scrollY } = useScroll({
      container: targetRef,
    });
    useMotionValueEvent(scrollY, "change", (lasted) => {
      console.log(lasted);
    });

    return (
    <>
        <div className="bg-gradient-to-tr from-cyan-500 from-35% via-emerald-400 via-50% to-violet-400">
            <Navbar/>
            <div ref={targetRef} className="max-h-[100vh] snap-y snap-mandatory overflow-scroll scroll-smooth">
                <div className="h-[100vh] snap-center ">
                    <Sec1/>
                </div>
                <div className="h-[100vh] snap-center">TEST</div>
                <div className="h-[100vh] snap-center">TEST</div>
            </div>
        </div>

    </>
    )
}
export default Home