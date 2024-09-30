function Footer() {
  return (
   <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
        <div >
            <div className='inline-flex relative before:content-[``] before:blur '>
                <img src="assets/logosaas.png" className='h-12 relative ' alt="saas logo" />
            </div>
            <nav className='flex gap-6 mt-6  p-1 justify-center md:flex-row flex-col flex-wrap  '>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Customers</a>
                <a href="#">Pricing</a>
                <a href="#">Help</a>
                <a href="#">Carrers</a>
            </nav>
            <div  className='flex justify-center items-center gap-6 mt-6  p-1   flex-wrap '>
                <img  className="bg-white" src="assets/social-x.svg" alt="logo" />
                <img className="bg-white" src="assets/social-insta.svg" alt="logo" />
                <img className="bg-white" src="assets/social-linkedin.svg" alt="logo" />
                <img className="bg-white" src="assets/social-pin.svg" alt="logo" />
                <img className="bg-white" src="assets/social-youtube.svg" alt="logo" />
            </div>
            <p className='mt-6 '>&copy;{new Date().getFullYear()} Your Company, Inc. All rights reserved</p>
            
        </div>
   </footer>
  )
}

export default Footer