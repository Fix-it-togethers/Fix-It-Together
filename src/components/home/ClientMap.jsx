
import clientMaps from "../../assets/bgMap.png"
const ClientMap = () => {
    return (
        <div className="w-[90%] mt-10 mx-auto lg:w-[90%] xl:w-[80%] text-[#032443] bg-[#F7F5F5] p-2">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className=" text-center lg:w-7/12">
                    <h1 className='text-3xl lg:text-5xl p-2 text-center tracking-tighter' style={{lineHeight:"1.7"}}>Join the biggest Community of Fix Problems</h1>
                    <p className='text-base tracking-tighter leading-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga similique repudiandae placeat expedita, ab vero sapiente aperiam consequatur molestias asperiores? Ab asperiores expedita,</p>
                </div>
                <div>
                    <img src={clientMaps} alt="map profiles" />
                </div>
            </div>
        </div>
    )
}

export default ClientMap