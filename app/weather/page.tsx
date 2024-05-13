import { useRouter } from "next/router"

export default function WeatherApp(){

    return (
        <div className="px-10 pt-10 text-white md:w-2/4">
            <div className="text-3xl font-semibold">
                Weather Forecast App by Yash Barve
            </div>
            <div className="pb-6 pt-6">
                This app uses WeatherAPI. The free tier of this API does not support CORS, which makes it difficult to host the application on the internet. There is, however, a workaround to this issue. You can request access to a remote CORS server by clicking <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" className="text-primary hover:text-secondary">here.</a>
            </div>
            <div className="pb-5">
                Please note that the link is meant only for development purposes. It is not meant for casual use.
            </div>
            <div className="font-bold text-red-600 bg-white rounded-full px-3 mb-5">
                PLEASE DO NOT CLICK ON THE LINK UNLESS YOU GENUINELY WANT TO SEE THE PROJECT.
            </div>
            <div className="">
                All rights belong to <a href="https://github.com/Rob--W" target="_blank" className="text-primary hover:text-secondary">Rob Wu</a>. You can learn more about this service <a href="https://github.com/Rob--W/cors-anywhere" target="_blank" className="text-primary hover:text-secondary">here</a>.
            </div>
            <button className="font-bold text-white bg-primary rounded-full px-3 py-1 mb-5 mt-12 hover:bg-secondary transition ease-in-out">
                <a href="https://main--weather-app-waibee.netlify.app/#">CLICK HERE ONCE YOU&apos;VE GOT TEMPORARY ACCESS TO THE CORS ANYWHERE SERVICE</a>
            </button>
        </div>
    )
}