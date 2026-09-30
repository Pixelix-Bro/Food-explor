import { ArrowLeft, Minus, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { VeloreButton, VeloreGlass } from 'velore'
import { ApiClient } from '../hooks/Rest'
import { decrement, increment, order } from '../Redux/ProductSlice'

export default function Product() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)
  const navigate = useNavigate()
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
    <div className="background h-screen md:pt-0  pt-[140px]">
      <div className="container items-center gap-[30px] flex-col flex sm:flex-row h-full ">
        <div className="flex sm:grow   md:h-full md:w-auto w-full justify-center items-center">
          <img src={item?.img} alt="" className="md:w-[500px] w-[50%]" />
        </div>
        <VeloreGlass className="flex sm:grow bg-white/5  backdrop-blur-[20px] flex-col justify-center text-center p-[20px] md:text-end gap-[20px] md:w-[700px] md:h-[400px]">
          <div className="text-white sm:text-[40px] text-[25px] md:text-[55px] font-bold">
            {item ? (
              item?.title
            ) : (
              <div className="w-full h-[70px] bg-white/30 backdrop-blur-3xl  rounded-3xl" />
            )}
          </div>
          <div className="text-white line-clamp-3">
            {item ? (
              item?.discription
            ) : (
              <div className="w-full h-[30px] bg-white/30 backdrop-blur-3xl  rounded-3xl" />
            )}
          </div>
          <div className="text-white md:justify-end flex-wrap justify-center  flex gap-[10px]">
            {item ? (
              item?.cook.map((i) => {
                return (
                  <span key={i} className=" p-[10px] vl-glass text-[12px]  md:text-[14px]">
                    {i}
                  </span>
                )
              })
            ) : (
              <div className="w-full h-[30px] vl-glass"></div>
            )}
          </div>

          <div className="flex justify-end md:gap-[30px] gap-[10px]">
            <div className="counter  flex md:gap-[20px] gap-[10px] justify-center">
              <VeloreButton onClick={() => dispatch(decrement(item?.id))}>
                <Minus className="text-white" />
              </VeloreButton>
              <p className="vl-glass !text-white p-[15px] ">{count[item?.id] || 0}</p>
              <VeloreButton onClick={() => dispatch(increment(item?.id))}>
                <Plus className="text-white" />
              </VeloreButton>
            </div>
            <VeloreButton
              onClick={() => {
                toast.success('Order received')
                dispatch(order(item?.id))
              }}
            >
              <p
                className="!text-white  line-clamp-1 text-[16px]
               "
              >
                incluir · R${item?.prece}
              </p>
            </VeloreButton>
          </div>
        </VeloreGlass>
      </div>

      <VeloreButton
        onClick={() => navigate(-1)}
        className="absolute md:!hidden top-[89px] left-[12px] transition-all duration-150"
      >
        <ArrowLeft color='white' />
      </VeloreButton>
    </div>
  )
}
