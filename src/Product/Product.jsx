import { Minus, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { VeloreButton, VeloreGlass } from 'velore'
import { ApiClient } from '../hooks/Rest'
import { decrement, increment } from '../Redux/ProductSlice'
import { toast } from 'sonner';

export default function Product() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await ApiClient.get('data/data.json')
        setData(data.Ref)
      } catch (error) {
        console.log(error.message)
      }
    }

    getProduct()
  }, [])

  const item = data?.find((i) => i.id == id)

  return (
    <div className="background h-screen ">
      <div className="container items-center  flex h-full ">
        <div className="flex grow h-full items-center">
          <img src={item?.img} alt="" className="w-[500px]" />
        </div>
        <VeloreGlass className="flex grow flex-col justify-center p-[20px] text-end gap-[20px] w-[700px] h-[400px]">
          <div className="text-white text-[55px] font-bold">
            {item ? (
              item?.title
            ) : (
              <div className="w-full h-[70px] bg-white/30 backdrop-blur-3xl  rounded-3xl" />
            )}
          </div>
          <div className="text-white">
            {item ? (
              item?.discription
            ) : (
              <div className="w-full h-[30px] bg-white/30 backdrop-blur-3xl  rounded-3xl" />
            )}
          </div>
          <div className="text-white justify-end flex-wrap  flex gap-[10px]">
            {item ? (
              item?.cook.map((i) => {
                return (
                  <span key={i} className=" p-[10px] vl-glass text-[14px]">
                    {i}
                  </span>
                )
              })
            ) : (
              <div className="w-full h-[30px] vl-glass"></div>
            )}
          </div>

          <div className="flex justify-end gap-[30px]">
            <div className="counter  flex gap-[20px] justify-center">
              <VeloreButton onClick={() => dispatch(decrement(item?.id))}>
                <Minus className="text-white" />
              </VeloreButton>
              <p className="vl-glass !text-white p-[15px] ">{count[item?.id] || 0}</p>
              <VeloreButton onClick={() => dispatch(increment(item?.id))}>
                <Plus className="text-white" />
              </VeloreButton>
            </div>
            <VeloreButton
              className="!text-white"
              onClick={() => toast.success('Order received')}
            >
              incluir · R${item?.prece}
            </VeloreButton>
          </div>
        </VeloreGlass>
      </div>
    </div>
  )
}
