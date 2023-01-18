export default function NoFeed() {
    return (
        <div className="flex items-center justify-center flex-col gap-4 p-5">
            <img src={process.env.PUBLIC_URL + "/images/tick1.png"} alt="tick" className="w-10 h-10 sm:w-20 sm:h-20 select-none" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-light text-2xl text-center">You're all caught up</h1>
                <h2 className=" text-md font-semibold text-center">Follow more people to get more posts.</h2>
            </div>
        </div>
    )
}