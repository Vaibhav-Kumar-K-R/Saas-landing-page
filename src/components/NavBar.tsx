import Banner from './Banner'
import { IoMenu } from "react-icons/io5";
import Button from './Button';
function NavBar() {
  return (
    <div className='sticky z-20 top-0 backdrop-blur-sm'>
       <Banner></Banner>
       <div className='py-3'>
          <div className='px-5'>
            <div className='items-center  justify-between w-full flex flex-row gap-3'>
            <img src="Screenshot_20240926_134517_Chrome.jpg" className='w-12 h-11 ' alt="logo" />
            <IoMenu className='w-10 h-10 md:hidden cursor-pointer'></IoMenu>
            <nav className='hidden items-center text-black/60 md:flex gap-6'>
              <a href="#">About </a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <Button white={false} children={<></>} text='Get for free'></Button>
            </nav>
            </div>
          </div>
       </div>
    </div>
  )
}

export default NavBar