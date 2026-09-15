import { Link } from 'react-router-dom'
import logos from '../assets/logo.png'
import Input from '../components/mini/Input'

export default function register() {
  return (
    <div className="w-screen h-screen flex justify-between items-center bg-[#000A0F] ">
      <div className="left flex grow justify-center items-center gap-[20px]">
        <img src={logos} alt="logo" />
        <h1 className="text-white  text-[42px] font-bold">food explorer</h1>
      </div>
      <div className="flex grow justify-center items-center">
        <div className="items-center flex justify-center flex-col bg-[#001119] p-[30px] w-[475px] h-[540px] gap-[40px] rounded-2xl">
          <div className="head">
            <h2 className="text-[40px] text-white font-semibold">Crie sua conta</h2>
          </div>
          <form className="flex flex-col gap-[40px] w-full">
            <Input type={'text'} ides={'name'} text={'Seu nome'} back={'Exemplo: Maria da Silva'} />
            <Input
              type={'text'}
              ides={'emaile'}
              text={'Your Email'}
              back={'Exemplo: exemplo@exemplo.com.br'}
            />
            <Input
              type={'password'}
              ides={'password'}
              text={'Senha'}
              back={'No mínimo 6 caracteres'}
              change={(e) => setText(e.target.value)}
            />
            <button className="text-white bg-[#750310] p-[13px] rounded-[7px]">Enter</button>
          </form>
          <div className="fot">
            <span className="text-white text-[23px]">
              Já tenho uma conta{' '}
              <Link className="text-[#750310]" to={'/login'}>
                conta
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
