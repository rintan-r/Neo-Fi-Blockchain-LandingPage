
import Button from '../components/Button';
import Logo from '../components/Logo';

function FooterSection() {

    return (
        <div className='flex flex-col xl:px-[120px] text-center w-full px-5 pt-5 items-center'>
            <div className='w-full flex flex-col xl:gap-[126px] xl:py-10 justify-between xl:items-start xl:flex-row gap-10 items-center'>
                <div className='xl:w-[690px] flex flex-col xl:flex-row xl:justify-between gap-12.5 xl:items-start items-center'>
                    <Logo />
                    <div className='flex flex-col gap-3 xl:text-left'>
                        <h4>Quick Links</h4>
                        <ul className='text-gray-1'>
                            <li className='p-small'>Home</li>
                            <li className='p-small'>Features</li>
                            <li className='p-small'>Community</li>
                            <li className='p-small'>Support</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3 xl:text-left'>
                        <h4>Help</h4>
                        <ul className='text-gray-1'>
                            <li className='p-small'>Help Centre</li>
                            <li className='p-small'>FAQ</li>
                            <li className='p-small'>Forum</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3 xl:text-left'>
                        <h4>Social Media</h4>
                        <ul className='text-gray-1'>
                            <li className='p-small'>Facebook</li>
                            <li className='p-small'>Instagram</li>
                            <li className='p-small'>Linkedin</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full xl:w-[385px] text-left'>
                    <h4 className='text-gray-1 xl:w-[198px]'>Join our mailing list for updates</h4>
                    <div className='flex flex-row justify-between mb-4'>
                        <input className='p-small text-gray-1' type="email" placeholder="Your Email Address" />
                        <Button variant="circle"></Button>
                    </div>
                    <div className="w-full h-[0.5px] bg-gray-1"></div>
                </div>
            </div>
            <div className='text-center p-5 text-gray-1'>
                <span className='caption'>© 2025. All rights reserved.</span>
            </div>

        </div>
    )

}

export default FooterSection;