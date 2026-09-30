import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiClient } from '../hooks/Rest'

export default  function Product() {
  const { id } = useParams()
  const [data, setData] = useState(null)

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

  const item =  data?.find((i) => i.id == id)

  return (
    <div className='container flex h-[76vh]'>
      <div className="flex grow h-full items-center">
        <img src={item?.img} alt="" className="w-[500px]" />
      </div>
      <div className="flex grow flex-col justify-center">
        <div className='text-white'>
          {
            item ? item?.title : <div className='w-full h-[30px] bg-gray-700  rounded-3xl' />
          }
        </div>
      </div>
    </div>
  )
}
