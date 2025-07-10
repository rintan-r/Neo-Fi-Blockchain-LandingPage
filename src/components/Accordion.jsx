import plus from '../assets/icons/plus.svg'

export default function Accordion({ title }) {

    return (
        <div className='flex flex-row justify-between items-start text-left w-full gap-1 px-5 py-4 border border-gray-3'>
            <p className='w-full p-regular'>{title}</p>
            <img src={plus}></img>
        </div>
    );
}