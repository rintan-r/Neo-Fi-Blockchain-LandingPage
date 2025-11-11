import { useState } from 'react'
import plus from '../assets/icons/plus.svg'
import minus from '../assets/icons/minus.svg'

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border border-gray-3 rounded-md w-full transition-all duration-300'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex flex-row justify-between items-start text-left w-full gap-1 px-5 py-4'
      >
        <p className='w-full p-regular'>{title}</p>
        <img
          src={isOpen ? minus : plus}
          alt='toggle'
          className='w-4 h-4 transition-transform duration-300'
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='px-5 pb-4 text-gray-1 text-left p-regular'>{content}</div>
      </div>
    </div>
  )
}

export default Accordion
