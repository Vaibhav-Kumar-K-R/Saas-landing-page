import {motion,useScroll, useTransform} from "framer-motion"
import { useRef } from "react"
function Productshowcase() {
  const sectionref=useRef(null)
  const{ scrollYProgress}=useScroll({
    target:sectionref,
    offset:['start end','end start']
  })
  const translateY=useTransform(scrollYProgress,[0,1],[150,-150])
  return (
    <section ref={sectionref} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
        <div className="">
            <div className="max-w-[540px] mx-auto">
            <div className="flex justify-center">
                <div className="text-sm inline-flex   border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Boost your productivity</div>
            </div>
            <h2 className="text-center md:text-[54px] md:leading-[60px] text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">A more effective way to track progress</h2>
            <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5 pb-20">Effortestly turn your ideas into a fully functional,responsive ,SaaS website in just minutes with this template</p>
            </div>
           <div  className="relative">
            <motion.img style={{
          translateY:translateY
           }}  src="assets/product-image.png" alt="product image" className="px-5 mt-10" />
            <motion.img style={{
          translateY:translateY
           }}  src="assets/pyramid.png" alt="Pyramid image" className="absolute -right-36 -top-32 h-[262px] w-[262px] " />
            <img src="assets/tube.png" className="absolute  bottom-24 -left-80" alt="tube image" />
           </div>
        </div>
    </section>
  )
}

export default Productshowcase