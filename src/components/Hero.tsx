import Button from "./Button"
import cogImg from "../../public/assets/cog.png"
import{  motion,useScroll,useTransform} from "framer-motion"
import { BsArrowRight } from "react-icons/bs"
import { useRef } from "react"
function Hero() {
    const heroref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:heroref,
        offset:['start end','end start']
    })
    const translateY=useTransform(scrollYProgress,[0,1],[100,-150])
    
  return (
    //@ts-ignore
    <section ref={heroref} className="pt-8 pb-20 flex justify-center md:pt-5 md:pb-5 px-4 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
        <div className="container">
        <div className="md:flex items-center justify-between ">
            <div className="md:w-[400px]">
                <div className="text-sm inline-flex   border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
                <h1 className="text-5xl md:-rotate-4 md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#001E80] to-black mt-12 text-transparent bg-clip-text">Pathway to productivity</h1>
                <p className="text-xl text-[#010D3E] tracking-tight mt-10">Celebrate the joy of accomplishment with an app designed o track your progress,motivate your efforts and celebrate your success</p>
                <div className="flex w-full gap-3 items-center mt-[30px]">
                    <div><Button white={false} children={<></>} text={"Get for free"}></Button></div>
                    <div className="flex   justify-center items-center flex-row"><Button white={false} text="Learn More">< BsArrowRight  className="h-4 text-white m-1"/></Button></div>
                </div>
            </div>
            <div className="mt-20 md:mt-0 relative md:flex-1">
                <motion.img src={cogImg}  className="md:relative md:min-h-full md:w-11/12 lg:w-10/12 xl:w-8/12 md:max-w-none md:-left-6  " alt="cog image" animate={{
                    translateY:[-30,30],
                }} transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:4,
                    ease:"easeInOut"
                
                }}
                 />
                <motion.img style={{
                    translateY:translateY
                }} src="assets\cylinder.png" className="hidden md:block md:absolute md:-left-32 lg:-top-10 lg:w-[180px] lg:h-[200px]  md:-top-20 w-[150px] h-[150px]" alt="" />
                <motion.img src="assets\noodle.png" className="w-[200px] absolute top-[240px] left-[200px] md:block hidden lg:top-[400px] lg:left-[500px]
                xl:left-[680px] xl:top-[430px] rotate-45" style={{
                    translateY:translateY,
                    rotate:10
                }} alt="" />
            </div>      
        </div>
        </div>
    </section>
  )
}

export default Hero