import { Search, TicketCheck } from 'lucide-react'
import { useState } from 'react'
import Logo from '../assets/logo.png'

export default function Navbar() {
  const [search, setSearch] = useState(false)
  return (
    <nav className="w-full bg-[#00111A] flex text-white">
      <div className="w-full flex items-center gap-[30px] container p-[20px] bg-[#00111A">
        <div className="flex gap-[20px] items-center">
          <img src={Logo} alt="Logo" width={50} height={50} />
          <p className="text-[24px] font-bold ">food explorer</p>
        </div>
        <div className="w-[50%] relative">
          <label
            htmlFor="search"
            className={`absolute flex gap-[20px] cursor-text top-[10px] text-gray-400 transition-all duration-300 left-[30px] ${search ? 'opacity-0' : 'flex'}`}
          >
            <Search />
            <p>Busque por pratos ou ingredientes</p>
          </label>
          <input
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
        <div className="flex gap-[30px]">
          <button className="flex gap-[10px] text-[20px] p-[20px] bg-[#750310]">
            {' '}
            <TicketCheck /> Pedidos
          </button>
        </div>
      </div>
    </nav>
  )
}
