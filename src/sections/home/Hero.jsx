import HeroImages from '../../assets/hero.png'

export default function Hero() {
  return (
    <div className="text-white w-full  relative justify-between bg-[#091E26] h-[150px] sm:h-[260px]">
      <div className="" />
      <div className=" absolute w-[50%] bottom-[-5px] md:bottom-[-12px] sm:left-[-70px] ">
        <div className="absolute top-0 bottom-0 left-0 right-0" />
        <img src={HeroImages} alt="HeroImages" className="w-[100%] " />
      </div>
      <div className="absolute right-2  h-full flex items-end flex-col gap-[10px]  justify-center">
        <h1 className="sm:text-[45px] text-[20px] font-semibold">Sabores inigualáveis</h1>
        <p className="sm:text-[16px] text-[15px] line-clamp-2 max-w-[50%] sm:max-w-full">Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </div>
  )
}
