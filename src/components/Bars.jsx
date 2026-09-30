import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { VeloreButton, VeloreGlass, VeloreInput } from 'velore'
import { ApiClient } from '../hooks/Rest'
import { IsOpen } from '../Redux/BarsSlice'

export default function Bars() {
  const bars = useSelector((state) => state.opens)
  const dispatch = useDispatch()
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function getapi() {
      try {
        const { data } = await ApiClient.get('data/data.json')
        const res = data.Ref

        setData(res)
      } catch (error) {
        console.log(error.message)
      }
    }
    getapi()
  }, [])

  const setStore = data?.filter((item) => {
    return item.title?.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div
      className={`${bars ? 'flex pt-[10px] text-white p-[20px] items-center flex-col bg-white/1 backdrop-blur-[20px] fixed z-50 h-screen w-screen' : 'hidden'}`}
    >
      <div className="flex flex-row-reverse w-full ">
        <VeloreButton
          onClick={() => dispatch(IsOpen())}
          className="absolute  !p-[10px] left-[10px] text-white"
        >
          <X size={30} />
        </VeloreButton>
        <VeloreInput
          className={`${bars ? 'block absolute  !w-[80%] right-0  z-50 !text-white' : 'hidden'}`}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex absolute top-[120px] gap-[10px]">
        {setStore?.map((item) => {
          return (
            <VeloreGlass
              key={item.id}
              className="flex relative flex-col gap-[20px] w-[40%] p-[20px] justify-center items-center"
            >
              <img src={item?.img} alt={item?.img || 'Product'} className="w-[100px] " />
              <div className="h-1 bg-white/5 border-1 border-white/10 w-full"></div>
              <p className="text-[14px] line-clamp-1 font-bold">{item?.title}</p>
              <p className="line-clamp-3">{item?.discription}</p>
              <VeloreButton
                onClick={() => {
                  dispatch(IsOpen())
                }}
                className="w-full"
              >
                <Link to={`/product/${item?.id}`}>incluir</Link>
              </VeloreButton>
            </VeloreGlass>
          )
        })}
      </div>
    </div>
  )
}
