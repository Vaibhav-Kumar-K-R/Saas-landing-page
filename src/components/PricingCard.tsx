const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];
import {motion} from "framer-motion"
import Button from "./Button";
import {twMerge} from "tailwind-merge"
function PricingCard() {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center md:text-[54px] md:leading-[60px] text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">Pricing</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5 pb-20 mt-">Free forvever.Upgrade for unlimited tasks,better security, and exclusive features</p>
        <div className="flex gap-10 md:flex-row flex-col justify-between items-end p-5">
          {pricingTiers.map(({title,monthlyPrice,buttonText,popular,inverse,features},idx:number)=>{
            return <div key={idx} className={twMerge("p-10 rounded-3xl hover:scale-110 transition cursor-pointer max-w-xs w-full shadow-2xl border-black border",inverse===true && 'border-black text-white bg-black')}>
              <div>
                <h3 className={twMerge("text-lg font-bold text-black/50",inverse===true && 'text-white/60')}>{title}</h3>
               {popular && <div className="inline-flex text-sm px-4 py-1.5 rounded-xl  border-white/20">
                  <motion.span animate={{
                    backgroundPositionX:"100%"
                  }}  
                  transition={{
                    repeat:Infinity,
                    ease:"linear",
                    repeatType:"loop",
                    duration:5
                  }}
                  className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium border rounded-md px-1">Popular</motion.span>
                </div>}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px] pb-8">
                <span className="text-4xl tracking-tighter font-bold leading-none">${monthlyPrice}</span>
                <span className="tracking-tight font-bold text-black/50">/month</span>
              </div>
             <Button text={buttonText} white={true} children={<></>}></Button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature,idx:number)=>{
                return <li key={idx} className="text-sm flex gap-4">
                  <img src="assets/check.svg" className={inverse?`h-5 bg-white w-5`:`h-5 w-5 `} alt="" />
                  <span>{feature}</span>
                </li>
                })}
              </ul>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingCard