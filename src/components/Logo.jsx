import logo from '../assets/logo.svg'

function Logo() {
    return (
        <div className='flex flex-row'>
            {/*  Logo & Hamburger */}
            <div className='flex flex-row items-center gap-[11px]'>
                <img src={logo} className='w-8 h-8'></img>
                <h1 className='logo'>NeoFi</h1>
            </div>
        </div>
    )

}

export default Logo;