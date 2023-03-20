
import user from "../assets/user.png"
import util from "../assets/util.png"
import deploy from "../assets/deploy.png"

function Benefits() {
    return (
        <div id="benefits" className="flex flex-col md:p-10 font-light bg-[#F9F8FA] pb-5 lg:w-[calc(100%-332px)] box-border">
            <div className="flex flex-col text-white">
                <h2 className="flex items-center text-[#79589F] text-2xl mb-4">
                    <img src={user} alt='item' className="object-cover mr-3" />
                    <div className="text-left">Heroku account</div>
                </h2>
                <p className="text-left text-sm text-gray-600 ml-1">Create apps, connect databases and add-on services, and collaborate on your apps.</p>
            </div>
            <hr className="mt-12 mb-10 m-auto w-full" />
            <div className="flex flex-col text-center justify-center text-white">
                <h2 className="flex items-center text-[#79589F] text-2xl mb-4">
                    <img src={util} alt='item' className="object-cover mr-3"/>
                    <div className="text-left">Your app platform</div>
                </h2>
                <p className="text-left text-sm text-gray-600 ml-1">A platform for apps, with app management & instant scaling, for development and production.</p>
            </div>
            <hr className="mt-12 mb-10 m-auto w-full" />
            <div className="flex flex-col text-center justify-center text-white mb-7">
                <h2 className="flex items-center text-[#79589F] text-2xl mb-4">
                    <img src={deploy} alt='item' className="object-cover mr-3"/>
                    <div className="text-left">Deploy now</div>
                </h2>
                <p className="text-left text-sm text-gray-600 ml-1">A platform for apps, with app management & instant scaling, for development and production.</p>
            </div>
        </div>
    )
}

export default Benefits