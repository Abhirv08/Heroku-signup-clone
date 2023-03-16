
import logo from "../assets/heroku_logo.png"

function Header(){
    return( 
        <div className="text-white flex flex-col text-center justify-between lg:w-[800px] lg:h-[181px] m-auto">
            <div className="flex justify-between">
                <img src={logo} alt="logo" className="h-[42px]" />
                <div className="flex justify-center items-center">
                    <span className="hidden sm:block sm:text-md ">Already have an account?</span>
                    <button className="px-4 py-2 bg-[#322562] ml-4 rounded-md text-slate-100 font-medium text-sm">Log in</button>
                </div>
            </div>
            <h1 className="text-3xl font-normal font-normal mb-9 mt-7">Get started on Heroku today</h1>
        </div>
    )
}

export default Header