const testimonials = [
    {
      text: "Our team's productivity has skyrocketed since we started using this tool. ",
      name: "Josh Smith",
      username: "@jjsmith",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        name: "Morgan Lee",
        username: "@morganleewhiz",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        name: "Riley Smith",
        username: "@rileysmith1",
    },
    {
      text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      name: "Casey Jordan",
      username: "@caseyj",
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        name: "Casey Harper",
        username: "@casey09",
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        name: "Sam Dawson",
        username: "@dawsontechtips",
    },
    {
      text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      name: "Jamie Rivera",
      username: "@jamietechguru00",
    },
    {
      text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      name: "Jordan Patels",
      username: "@jpatelsdesign",
    },
    {
      text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      name: "Taylor Kim",
      username: "@taylorkimm",
    }
  ];
  import {motion} from "framer-motion"
const firstColumn: typeof testimonials=testimonials.slice(0,3)
const secondColumn=testimonials.slice(3,6)
const thirdColumn=testimonials.slice(6,9)
const TestiMonialsColumn=(props:{testimonial:typeof testimonials,offset:number})=>{
    return <motion.div animate={{
      translateY:"-10%"
    }}
    transition={{
      repeat:Infinity,
      ease:"linear",
      duration:5,
      repeatType:"loop"
    }}
    className="flex sm:flex-row  flex-col justify-center items-center gap-5 mt-5"> 
        {props.testimonial.map(({name,text}:{name:string,text:string},idx:number)=>{
            return <div className="p-2 rounded-xl h-6/12 max-w-96 w-full  shadow-[0_7px_14px_#EAEAEA] border-black border">
                <div className="p-4 font-bold tracking-tighter text-lg">{'"'+text+'"'}</div>
                <div className="inline-flex items-center gap-2 justify-end">
                    <img className="h-10 w-10 rounded-full" src={`assets/avatar-${props.offset*3+idx+1}.png`} alt={name} />
                    <p className="font-semibold">{name}</p>
                </div>
            </div>
        })}   
</motion.div>
}
function Testimonials() {
  return (
    <section className="bg-white">
        <div className="p-3">
            <div className="flex  justify-center">
                <div className="text-sm inline-flex   border border-[#222]/10 ml-3 px-3 py-1 rounded-lg tracking-tight">
                    Testimonials
                </div>
            </div>
            <h2 className="text-3xl text-center font-bold mt-5">What our users say</h2>
            <p className="px-4 mt-4  text-center  font-semibold text-lg tracking-tight">From intuitive design to powerful features, our app has become an essential tool for users around the world.
            </p>
           <TestiMonialsColumn testimonial={firstColumn} offset={0}></TestiMonialsColumn>
           <div className="hidden md:block">
            <TestiMonialsColumn testimonial={secondColumn} offset={1}></TestiMonialsColumn>
           </div>
           <div className="hidden lg:block">
            <TestiMonialsColumn testimonial={thirdColumn} offset={2}></TestiMonialsColumn>
           </div>
        </div>
    </section>
  )
}

export default Testimonials