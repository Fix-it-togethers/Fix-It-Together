
import clientMaps from "../../assets/bgMap.png"
const ClientMap = () => {
    return (
        <div className="w-[90%] mt-10 mx-auto lg:w-[90%] xl:w-[80%] text-[#032443] bg-[#F7F5F5] p-2">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className=" text-center lg:w-7/12">
                    <h1 className='text-3xl lg:text-5xl p-2 text-center tracking-tighter' style={{lineHeight:"1.7"}}>Join the biggest Community of Fix Problems</h1>
                    <p className='text-base tracking-tighter leading-10 text-center'>Join the biggest Community of Fix Problems and become part of a dynamic and supportive network dedicated to solving challenges together. Whether you're a problem solver seeking solutions or someone in need of assistance, this community offers a platform where individuals can unite, collaborate, and share expertise.</p>
                </div>
                <div>
                    <img src={clientMaps} alt="map profiles" />
                </div>
            </div>
        </div>
    )
}

export default ClientMap