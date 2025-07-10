import Shape1a from '../assets/img/shape1-1.png'
import flow from '../assets/icons/flow-connection.svg'
import security from '../assets/icons/security.svg'
import blockchain from '../assets/icons/blockchain.svg'
import SectionLabel from '../components/SectionLabel'
import EllipseBackground from '../decorations/EllipseBackground'


function FutureSection() {
    return (
        <div className='relative'>
            <EllipseBackground
                top="7.7%"
                centerX={true}
                width={606}
                height={425}
            />
            <div className="relative z-10 flex flex-col my-10 mx-5 xl:mx-[120px] xl:my-[60px] gap-8 xl:gap-[72px] text-center items-center">
                <div className='flex flex-col gap-4 xl:gap-5 xl:w-[890px] text-center items-center'>
                    <SectionLabel label="Future" />
                    <h2>The Future Of Blockchain Technology</h2>
                    <p className='p-subtitle text-gray-1'>Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era of decentralized technology.</p>
                </div>

                <div className='flex flex-col xl:flex-row gap-8 xl:gap-[72px] items-center'>
                    <img src={Shape1a} className='w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]'></img>
                    <div className='flex flex-col gap-4 text-left xl:w-[622px]'>
                        <div className='flex flex-row px-5 py-6 gap-[19px] rounded-[20px] bg-gray-4'>
                            <img src={flow} className='w-[30px] h-[30px]'></img>
                            <div className='flex flex-col'>
                                <h4>Connectivity and ubiquity</h4>
                                <p className='p-small text-gray-1'>Connectivity and Ubiquity. The focal points of Web 3.0 emphasize connectivity and ubiquity, ensuring seamless interactions between users and devices within</p>
                            </div>
                        </div>
                        <div className='flex flex-row px-5 py-6 gap-[19px] rounded-[20px] bg-gray-4'>
                            <img src={security} className='w-[30px] h-[30px]'></img>
                            <div className='flex flex-col'>
                                <h4>Secure Transaction</h4>
                                <p className='p-small text-gray-1'>Ensuring every transaction is protected with cutting-edge security, giving you the confidence to exchange, invest, and grow in a safe and trusted environment.</p>
                            </div>
                        </div>
                        <div className='flex flex-row px-5 py-6 gap-[19px] rounded-[20px] bg-gray-4'>
                            <img src={blockchain} className='w-[30px] h-[30px]'></img>
                            <div className='flex flex-col'>
                                <h4>Blockchain and decentralization</h4>
                                <p className='p-small text-gray-1'>Most important of all, the assurance of blockchain and decentralization helps in encouraging communication between software and browser plugins.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FutureSection;