import {HeaderLogin} from "@/widget/HeaderLogin";
import {WavyBackground} from "@/shared/ui/Layout/WavyBackground.tsx";

const Start = () => {
    return (
        <div className='max-h-[100vh]'>
            <HeaderLogin/>
            <WavyBackground className="max-w-4xl mx-auto pb-40 z-0">
                <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center text-nowrap">
                    Техника и аксессуары
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                    Купи любые игровые принадлежномти, какие только пожелаешь.
                </p>
            </WavyBackground>
        </div>
    );
};

export default Start;
