import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { BsArrowRight } from "react-icons/bs"
import {motion} from "framer-motion"
function CallAction() {
    const sref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:sref,
        offset:['start end','end start']
    })
    const translateY=useTransform(scrollYProgress,[0,1],[150,-150])
  return (
    <section ref={sref} className="bg-gradient-to-b from-white to-[#D2DCFF] py-12">
        <div className="">
            <div className="w-10/12 mx-auto">
                <h2 className="text-2xl relative text-center tracking-tight  font-bold">Sign Up for free today</h2>
                <p className="text-xl text-[#010D3E] tracking-tight px-4 mt-5 text-center">
                    Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts
                </p>
                <motion.img style={{
                    translateY:translateY
                }} src="assets/star.png" width={180} alt="" className="hidden md:block " />
                <motion.img  style={{
                    translateY:translateY
                }} src="assets/spring.png" className="absolute hidden md:block md:left-[600px] lg:left-[880px] left-[200px] " width={150} alt="" />
            </div>
            <div className="justify-center flex gap-2 mt-5">
                <button className="bg-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight text-white">Get for free</button>
                <button className="bg-white px-4 py-2 rounded-lg text-black border  border-black  gap-2 font-bold inline-flex align-items justify-center tracking-tight ">
                    <span>Learn more</span>
                    < BsArrowRight  className="h-4  m-1"/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default CallAction