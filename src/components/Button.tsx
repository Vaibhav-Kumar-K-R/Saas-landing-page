import { ReactNode } from "react"
function Button({text,children,white}:{text:string,children:ReactNode,white:boolean}) {
  return (
    <button className={white?`bg-white px-4 py-2 rounded-lg text-black border  border-black font-medium inline-flex align-items justify-center tracking-tight `:`bg-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight text-white`}>{text}{children}</button>
  )
}

export default Button