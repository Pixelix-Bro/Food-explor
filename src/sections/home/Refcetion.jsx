import { Minus, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VeloreButton } from 'velore'
import { ApiClient } from '../../hooks/Rest'
import { decrement, increment } from '../../Redux/ProductSlice'
export default function Refcetion() {
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)
  useEffect(() => {
    async function getapi() {
      try {
        const { data } = await ApiClient.get('/Ref')
        setData(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getapi()
  }, [])

  return (
    <div className="max-w-full  gap-[30px] flex flex-col items-start mt-[100px]">
      <div className="flex flex-col w-full gap-[20px]">
        <h2 className="text-[32px] text-white font-bold ">Refeições</h2>
        <div className="border-1 border-white/20 w-full" />
      </div>
      <div
        className="flex w-full overflow-x-auto scroll-auto gap-[20px]    [&::-webkit-scrollbar]:h-[1px]
    [&::-webkit-scrollbar-track]:bg-[#000A0F]
    [&::-webkit-scrollbar-thumb]:bg-red-500"
      >
        {data?.map((i) => {
          return (
            <div
              key={i.id}
              className="flex relative flex-col p-[30px] min-w-[280px] max-w-[280px] text-center rounded-2xl gap-[20px] h-auto bg-[#00111A]"
            >
              <img src={i.img} alt={i.title} className="w-[100%]" />
              <div className="border-1 border-white/20 w-full" />
              <div className="flex flex-col gap-[20px]">
                <h5 className="text-white  text-[15px] font-bold  sm:text-[20px] line-clamp-1">
                  {i.title ? i.title : 'Loading...'}
                </h5>
                <p className="text-white line-clamp-2 text-[14px] text-center">{i.discription}</p>
                <p className="text-blue-300 text-[32px] ">R${i.prece}</p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="counter  flex gap-[20px] justify-center">
                  <VeloreButton onClick={() => dispatch(decrement(i.id))}>
                    <Minus className="text-white" />
                  </VeloreButton>
                  <p className="vl-glass !text-white p-[15px] ">{count[i.id] || 0}</p>
                  <VeloreButton onClick={() => dispatch(increment(i.id))}>
                    <Plus className="text-white" />
                  </VeloreButton>
                </div>
                <div className="">
                  <VeloreButton className="w-full text-white">incluir</VeloreButton>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
