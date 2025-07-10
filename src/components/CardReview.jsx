import reviewer from '../assets/img/ellipse-reviewer.png'

function CardReview() {
    return (
        <div className="flex flex-col p-8 gap-6 bg-black rounded-2xl  min-w-[343px]">
            <p className='p-regular'>“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”</p>
            <div className="flex flex-row gap-[17px] items-center">
                <img src={reviewer} className='w-12 h-12'></img>
                <div className="flex flex-col gap-1.5 items-start">
                    <p className='p-small'>Darrell Steward</p>
                    <span className='caption text-gray-1'>Co-founder</span>
                </div>
            </div>
        </div>
    )

}

export default CardReview;