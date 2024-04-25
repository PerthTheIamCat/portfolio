import Navbar from "./Navbar"
import Sec1 from "./FirstText"
import { motion, useScroll, useMotionValueEvent, useTransform} from "framer-motion"
import { useRef } from "react"

const Home = () => {
    const targetRef = useRef(null)
    const { scrollY } = useScroll({
      container: targetRef,
    });
    useMotionValueEvent(scrollY, "change", (lasted) => {
      console.log(lasted);
      console.log(scale);
    });
    const scale = useTransform(scrollY, [0, 400], [1, 10]);
    const rotate = useTransform(scrollY, [0, 400], ["0deg", ["180deg"]]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale2 = useTransform(scrollY, [400, 800], [10, 1]);
    const scale3 = useTransform(scrollY, [800, 1600], [10, 1]);
    return (
    <>
        <div className="bg-gradient-to-tr from-cyan-500 from-35% via-emerald-400 via-50% to-violet-400">
            <Navbar/>
            <div ref={targetRef} className="max-h-[100vh] snap-y snap-mandatory overflow-scroll scroll-smooth bg-sky-950">
                <motion.div className="h-[100vh] snap-center ">
                  <Sec1 scale={scale} rotate={rotate} opacity={opacity}/>
                </motion.div>
                <motion.div className="h-[100vh] snap-center" >
                  <Sec1 scale={scale2}/>
                </motion.div>
                <motion.div className="h-[100vh] snap-center">
                  <Sec1 scale={scale3}/>
                </motion.div>
            </div>
        </div>

    </>
    )
}
export default Home