import { BsArrowRight } from "react-icons/bs"
function Banner() {

  return (
    <div className="flex justify-center items-center text-white/60 bg-black gap-3 flex-wrap  py-3">
      <p className="hidden md:block">Streamline your workflow and boost  your productivity</p>
      <p className="">
      Get started for free
    </p>
    <BsArrowRight></BsArrowRight>
    </div>
  )
}

export default Banner