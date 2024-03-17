import {HeaderLogin} from "@/widget/HeaderLogin";
import {WavyBackground} from "@/shared/ui/Layout/WavyBackground.tsx";
import {toast} from "sonner";
import {Toaster} from "@/shared/shadcnui/ui/sonner.tsx";

const Start = () => {
    return (
        <div className='max-h-[100vh]'>
            <HeaderLogin/>
            <WavyBackground className="max-w-4xl mx-auto pb-40 z-0">
                <p onClick={() => toast.error('error')} className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center text-nowrap">
                    Техника и аксессуары
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                    Купи любые игровые принадлежности, какие только пожелаешь.
                </p>
            </WavyBackground>
            <Toaster position='top-center' expand={true} richColors/>
        </div>
    );
};

export default Start;
