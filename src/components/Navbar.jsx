import { Search } from 'lucide-react'
import Logo from '../assets/logo.png'

export default function Navbar() {
  const search = <Search />
  return (
    <nav className="w-full bg-[#00111A] flex text-white">
      <div className="w-full flex items-center gap-[30px] container p-[20px] bg-[#00111A">
        <div className="flex gap-[20px] items-center">
          <img src={Logo} alt="Logo" width={50} height={50} />
          <p className="text-[24px] font-bold ">food explorer</p>
        </div>
        <div className="w-[50%]">
          <input
            type="text"
            placeholder={`${search} noder`}
            className="bg-[#0D1D25] rounded-[7px] p-[10px] text-white outline-none w-full"
          />
        </div>
      </div>
    </nav>
  )
}
