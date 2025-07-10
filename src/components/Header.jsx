import Logo from './Logo';
import hamburgerIcon from '../assets/icons/hamburger-menu.svg'
import useMediaQuery from '../hooks/useMediaQuery';
import Button from './Button';

function Header() {
    const isDesktop = useMediaQuery("(min-width: 1280px)"); // Tailwind xl: breakpoint

    return (
        <div className='w-full flex flex-row justify-between p-5 xl:px-[120px]'>
            <Logo />
            {isDesktop ? (
                <>
                    <ul className='flex flex-row items-center gap-10 p-regular text-gray-1'>
                        <li className='text-white'>Home</li>
                        <li>Features</li>
                        <li>Testimonial</li>
                        <li>FAQ</li>
                    </ul>
                    <div className='flex flex-row gap-4'>
                        <Button variant={"text"}>Log in</Button>
                        <Button variant={"primarySmall"}>Try For Free</Button>
                    </div>

                </>
            ) : (
                <img src={hamburgerIcon}></img>
            )}


        </div>
    )

}

export default Header;