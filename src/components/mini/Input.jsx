import { useState } from 'react'

export default function Input({ type, text, back, change, ides }) {
  const [opening, setOpening] = useState(false)
  return (
    <div className="relative">
      <label
        htmlFor={ides}
        className={` absolute left-3 z-10 px-2 text-gray-400 transition-all duration-300 pointer-events-none ${opening ? 'top-[-30px] absolute left-[0px] text-white' : 'top-[10px]'} `}
      >
        {' '}
        {text}
      </label>
      <input
        id={ides}
        type={type || 'text'}
        // placeholder={back}
        className="border-[0.1px] border-white rounded-[7px] p-[10px] text-white outline-none w-full"
        onChange={change}
        onClick={() => setOpening(true)}
        onBlur={(e) => {
          !e.target.value ? setOpening(false) : ''
        }}
        onFocus={() => setOpening(true)}
      />
    </div>
  )
}
