import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-bold">Everything <br /> is better <br /> with a&nbsp;
                    <span className="text-primary">Pizza</span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
                <div className="flex gap-4">
                    <button className="bg-primary items-center uppercase text-sm flex gap-2 text-white px-6 py-2 rounded-full">
                        Order now
                        <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-500 font-semibold">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="w-26 h-26 relative">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={"pizza"} />
            </div>
        </section>
    );
}