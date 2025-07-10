import logoipsum1 from '../assets/brands/logo-ipsum1.svg'
import logoipsum2 from '../assets/brands/logo-ipsum2.svg'
import logoipsum3 from '../assets/brands/logo-ipsum3.svg'
import logoipsum4 from '../assets/brands/logo-ipsum4.svg'
import logoipsum5 from '../assets/brands/logo-ipsum5.svg'

function BrandSection() {
    const logos = [
        logoipsum1,
        logoipsum2,
        logoipsum3,
        logoipsum4,
        logoipsum5,

    ];
    return (
        <div className="px-5 py-10 w-full flex flex-col gap-8 bg-gray-4 items-center">
            <h5 className='p-regular'>Satisfied partners</h5>

            <div className="mx-auto flex flex-wrap justify-center items-center gap-x-5 xl:gap-x-[72px] gap-y-4 max-w-5xl">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo Ipsum`}
                        className="w-[97px] h-[23.25px] xl:w-[132px] xl:h-[32px] xl:w-[] opacity-60 hover:opacity-80 transition-opacity"
                    />
                ))}
            </div>
        </div>
    )
}

export default BrandSection;