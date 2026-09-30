import { useLocation } from 'react-router-dom'
import FooterLogo from '../assets/Footer_Logo.png'
export default function Footer() {
  const location = useLocation()
  return (
    <div
      className={` ${location.pathname === '/' ? 'mt-[40px]' : 'mt-0 absolute bottom-0'} p-[20px] flex justify-between items-center w-full bg-[#00111A]`}
    >
      <div className="flex gap-[13px] items-center">
        <img src={FooterLogo} alt="Footer_Logo" className="w-auto md:h-[30px] h-[20px]" />
        <p className="font-bold md:text-[24px] text-[16px] text-[#4D585E]">food explorer</p>
      </div>
      <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0" />
      <p className="text-white text-[10px] font-bold text-shadow-amber-50 pointer-events-none">
        © 2023 - Todos os direitos reservados.
      </p>
    </div>
  )
}
