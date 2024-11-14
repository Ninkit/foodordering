import Image from "next/image";
import MenuItem from "./menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu (){
    return (
        <section>
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="h-48 absolute w-48 -top-[70px] -left-12 -z-30">
                    <Image src={'/sallad1.png'} layout={'fill'} objectFit={'contain'} alt={'sallad'}/>
                </div>
                <div className="h-48 absolute w-48 -right-12 -top-[100px] -z-10">
                    <Image src={'/sallad2.png'} layout={'fill'} objectFit={'contain'} alt={'sallad'}/>
                </div>
            </div>
            <div className="text-center my-5">
                <SectionHeader 
                    subHeader={'check out'}
                    mainHeader={'Menu'} 
                />
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div> 
        </section>
    )
}