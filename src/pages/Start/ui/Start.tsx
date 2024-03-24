import {HeaderLogin} from "@/widget/HeaderLogin";
import {WavyBackground} from "@/shared/ui/Layout/WavyBackground.tsx";
import {Toaster} from "@/shared/shadcnui/ui/sonner.tsx";
import {StartCards} from "@/widget/StartCards";
import {useRef} from "react";
import {MoveDown} from "lucide-react";
import {GlobeDemo} from "@/widget/World/WorldDemo.tsx";

const Start = () => {
    const ref = useRef(null);
    const handleClick = () => {
        // @ts-ignore
        ref?.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
            <div className='max-h-[100vh] relative'>
                <HeaderLogin/>
                <WavyBackground className="max-w-4xl mx-auto pb-40 z-0">
                    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center text-nowrap">
                        Техника и аксессуары
                    </p>
                    <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                        Купи любые игровые принадлежности, какие только пожелаешь.
                    </p>
                </WavyBackground>
                <div className="w-full absolute flex justify-center bottom-20">
                    <MoveDown onClick={handleClick} className='cursor-pointer animate-bounce text-white'/>
                </div>
            </div>
            <div ref={ref}
                 className=" min-h-[100dvh] py-20 flex flex-col bg-black">
                <h2 className='mt-8 text-white text-center text-2xl animate-pulse'>Регестрируйтесь и забирайте</h2>
                <div
                    className="flex flex-col flex-grow lg:flex-row items-center justify-center  w-full gap-4 mx-auto my-10 px-8">
                    <StartCards/>
                </div>
            </div>
            <GlobeDemo/>
            <Toaster position='top-center' expand={true} richColors/>
        </>
    );
};

export default Start;
