
import logo from "../assets/heroku_logo.png"

function Header() {
    return (
        <div className="relative text-white flex flex-col text-center pt-[110px] pb-[35px] justify-between lg:w-[800px] lg:h-[181px] m-auto">
            <a className="absolute top-5" href="#" ><img src={logo} alt="logo" className="h-[42px]" /></a>
            <h1 className="text-3xl font-light antialiased m-auto text-center">Get started on Heroku today</h1>
            <div className="flex absolute right-0 font-normal text-sm items-center w-[255px] h-[47px] top-5">
                <span className="hidden sm:block w-[172px] h-[18px]">Already have an account? &nbsp;</span>
                <a className="inline-block px-[16px] m-[5px] py-[11px] bg-[#00000033] rounded-[4px] h-[37px] w-auto border-[1px] border-transparent  text-slate-100 subpixel-antialiased box-border cursor-pointer" href="#">Log in</a>
            </div>
        </div>
    )
}

export default Header