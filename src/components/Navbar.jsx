import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 py-5">
        <div className="flex justify-between container mx-auto items-center">
          <Link className="font-bold text-white text-5xl align-middle" to={"/"}>Teste prático</Link>
          <NavLink className="py-3 px-4 rounded-full bg-slate-300 font-semibold" to={'/produto/adicionar'}>Adicionar</NavLink>
        </div>
        
      </nav>
    </div>
    
  )
}

export default Navbar;