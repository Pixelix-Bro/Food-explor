import { LogOut, Menu, Search, TicketCheck } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { VeloreButton, VeloreInput } from 'velore'
import Logo from '../assets/logo.png'
import { Opens } from '../Redux/BarsSlice'

export default function Navbar() {
  const [search, setSearch] = useState(false)
  const dispatch = useDispatch()
  return (
    <nav className="w-full bg-[#00111A] flex text-white fixed z-50">
      <div className="w-full justify-between flex items-center gap-[30px] container p-[20px] bg-[#00111A">
        <VeloreButton onClick={() => dispatch(Opens())} className=" sm:!hidden">
          <Menu />
        </VeloreButton>

        <div className="flex gap-[20px] items-center">
          <img src={Logo} alt="Logo" className="sm:w-[50px sm:h-[50px] h-[30px] w-auto" />
          <p className="text-[19px] font-bold  sm:text-[20px]">food explorer</p>
        </div>
        <div className="w-[50%] relative hidden md:flex">
          <label
            htmlFor="search"
            className={`absolute z-12 flex gap-[20px] cursor-text top-[15px] line-clamp-1 max-w-[85%]  truncate text-gray-400 transition-all duration-300 left-[30px] ${search ? 'opacity-0' : 'flex'}`}
          >
            <Search size={25} />
            <p>Busque por pratos ou ingredientes</p>
          </label>
          <VeloreInput
            id="search"
            type="text"
            className="bg-[#0D1D25] rounded-[7px] p-[10px] text-white outline-none w-full"
            onClick={() => setSearch(true)}
            onBlur={(e) => {
              !e.target.value ? setSearch(false) : ''
            }}
            onFocus={() => setSearch(true)}
          />
        </div>
        <div className="flex gap-[30px] items-center hidden sm:flex">
          <VeloreButton className="flex gap-[10px] w-[170px] h-[50px] items-center transition-all duration-300 ease-in-out hover:rounded-xl justify-center text-[20px]  bg-[#750310]">
            {' '}
            <TicketCheck /> Pedidos
          </VeloreButton>
          <VeloreButton tint="red" className="transition-all !duration-200">
            <Link to={'/register'}>
              <LogOut size={35} className="cursor-pointer" />
            </Link>
          </VeloreButton>
        </div>
        <VeloreButton className=" sm:!hidden">
          <TicketCheck />
        </VeloreButton>
      </div>
    </nav>
  )
}
