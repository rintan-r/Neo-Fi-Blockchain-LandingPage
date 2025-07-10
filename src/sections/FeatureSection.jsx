import scalability from '../assets/icons/scalability.svg'
import decentralization from '../assets/icons/decentralization.svg'
import connectivity from '../assets/icons/connectivity.svg'
import SectionLabel from '../components/SectionLabel';
import EllipseBackground from '../decorations/EllipseBackground';

function FeatureSection() {
    return (
        <div className='relative'>
            <EllipseBackground
                top="7.7%"
                centerX={true}
                width={606}
                height={425}
            />
            <div className='relative z-10 flex flex-col mx-5 xl:mx-[120px] my-10 xl:my-20 gap-[30px] xl:gap-20 text-center items-center'>
                <div className='flex flex-col gap-5 xl:w-[600px] text-center items-center'>
                    <SectionLabel label="Feature" />
                    <h2>Future Breakdown</h2>
                    <p className='p-subtitle-features text-gray-1'>Secure, scalable, and decentralized solutions for your digital assets—experience the future of financial freedom.</p>

                </div>

                <div className='flex flex-col xl:flex-row gap-6'>
                    <div className='flex xl:flex-1 flex-col justify-center items-center gap-9 px-6 py-[30px] text-center bg-white/4 rounded-xl  border border-gradient-1'>
                        <img src={scalability}></img>
                        <div className='flex flex-col gap-4'>
                            <h4 className='card-title'>Scalability</h4>
                            <p className='p-regular text-gray-1'>Adapt and grow, no matter the demand on grow</p>
                        </div>
                    </div>
                    <div className='flex xl:flex-1 flex-col justify-center items-center gap-9 px-6 py-[30px] text-center bg-white/4 rounded-xl  border border-gradient-1'>
                        <img src={decentralization}></img>
                        <div className='flex flex-col gap-4'>
                            <h4 className='card-title'>Decentralisation</h4>
                            <p className='p-regular text-gray-1'>Decentralization. Web3 aims to move away from the centralized</p>
                        </div>
                    </div>
                    <div className='flex xl:flex-1 flex-col justify-center items-center gap-9 px-6 py-[30px] text-center bg-white/4 rounded-xl  border border-gradient-1'>
                        <img src={connectivity}></img>
                        <div className='flex flex-col gap-4'>
                            <h4 className='card-title'>Connectivity</h4>
                            <p className='p-regular text-gray-1'>computers will be able to understand information similarly to humans</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default FeatureSection;