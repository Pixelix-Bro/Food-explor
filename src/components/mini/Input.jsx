import { useState } from 'react'

export default function Input({ type, text, back, change, ides }) {
  const [opening, setOpening] = useState(false)
  return (
    <div className="relative">
      <label
        htmlFor={ides}
        className={` absolute left-3 z-10   px-2 text-gray-400 transition-all duration-300 pointer-events-none ${opening ? 'top-[-30px] absolute left-[0px] text-white' : 'top-[10px]'} `}
      >
        {' '}
        {text}
      </label>
      <input
        liquid
        dark
        id={ides}
        type={type || 'text'}
        onChange={change}
        onFocus={() => setOpening(true)}
        onBlur={(e) => {
          if (!e.target.value) setOpening(false)
        }}
        className="w-full vl- !rounded-[13px] vl-input border border-white/30 p-[10px] !text-white outline-none vl-glass"
      />
    </div>
  )
}
