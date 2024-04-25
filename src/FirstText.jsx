import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"

const Section1 = ({ scale, rotate, opacity }) =>{
    return(
        <>
            <div className="flex justify-center h-[100vh]">
                <motion.div style={{scale, rotate, opacity}} className="flex">
                    <h1 className="text-8xl text-slate-300 place-self-center">
                    <TypewriterComponent options={{
                        strings : ["Hello", "World"],
                        loop : true,
                        autoStart : true,
                    }}/>
                    </h1>
                </motion.div>
            </div>
        </>
    )
}
export default Section1