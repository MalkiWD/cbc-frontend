import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header className="bg-white w-full h-[100px] relative flex justify-center items-center">
      <img src="/logo.png" className="cursor-pointer h-full rounded-full absolute left-[10px]" />

      <Link to="/" className="text-accent font-bold">Home</Link >

    </header>
  )
}