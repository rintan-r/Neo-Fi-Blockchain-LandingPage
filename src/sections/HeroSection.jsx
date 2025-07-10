import HeroImage from '../assets/img/hero-image.png'
import HeroImageLarge from '../assets/img/hero-image-large.png'
import Button from '../components/Button';
import SectionLabel from '../components/SectionLabel';
import EllipseBackground from '../decorations/EllipseBackground';
import useMediaQuery from '../hooks/useMediaQuery';


function HeroSection() {
    const isDesktop = useMediaQuery("(min-width: 1280px)"); // Tailwind xl: breakpoint
    console.log('isDesktop:', isDesktop);
    return (
        <div className='relative'>
            
            {isDesktop && (
                <EllipseBackground
                    top="7.7%"
                    centerX={false}
                    left='-20%'
                    opacity={0.16}
                    width={606}
                    height={425}
                />
            )}
            <div className='relative z-10 w-full xl:px-[7.5rem] xl:py-[5.5rem] flex flex-col xl:flex-row gap-8 justify-center items-center'>
                <div className="flex flex-col mx-5 gap-8 justify-center items-center xl:items-start text-center xl:text-left">
                    <SectionLabel label="Decentralized" section="Hero" />
                    <h1 className='text-white font-medium xl:font-bold'>Revolutionizing Web3 Finance</h1>
                    <p className='p-subtitle-hero text-gray-1 xl:pr-[27px]'>Secure, scalable, and decentralized solutions for your digital assets—experience the future of financial freedom.</p>
                    <div className='flex flex-col xl:flex-row gap-5'>
                        <Button variant="primary">Get Started</Button>
                        <Button variant="secondary">Watch Video</Button>
                    </div>
                </div>

                {isDesktop ? (
                    <>
                        <img src={HeroImageLarge} className='w-max h-auto'></img>
                    </>
                ) : (
                    <img src={HeroImage}></img>
                )}
            </div>
        </div>


    )

}

export default HeroSection;