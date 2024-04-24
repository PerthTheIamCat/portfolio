import { motion } from "framer-motion"

const Section1 = ({ scale, rotate, opacity }) =>{
    return(
        <>
            <div className="flex justify-center h-[100vh]">
                <motion.div style={{scale, rotate, opacity}} className="flex">
                    <h1 className="text-8xl place-self-center ">Hello World</h1>
                </motion.div>
            </div>
        </>
    )
}
export default Section1