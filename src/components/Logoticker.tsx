import {motion} from "framer-motion"
function Logoticker() {
  return (
    <div className="py-8 md:py-12 bg-white">
        <div className="">
            <div className="flex justify-center gap-5 items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
            >
              <motion.div  className="flex flex-none gap-14" animate={{
              translateX:"-50%"
            }}
            transition={{
              duration:20,
              repeat:Infinity,
              ease:"linear",
              repeatType:'loop'
            }}>
                <img src="assets/logo-acme.png" alt="Acme logo" />
                <img src="assets/logo-quantum.png" alt="Acme logo" />
                <img src="assets/logo-echo.png" alt="Acme logo" />
                <img src="assets/logo-celestial.png" alt="Acme logo" />
                <img src="assets/logo-pulse.png" alt="Acme logo" />
                <img src="assets/logo-apex.png" alt="Acme logo" />
                <img src="assets/logo-acme.png" alt="Acme logo" />
                <img src="assets/logo-quantum.png" alt="Acme logo" />
                <img src="assets/logo-echo.png" alt="Acme logo" />
                <img src="assets/logo-celestial.png" alt="Acme logo" />
                <img src="assets/logo-pulse.png" alt="Acme logo" />
                <img src="assets/logo-apex.png" alt="Acme logo" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Logoticker