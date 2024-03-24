import React from "react";

import {AnimatePresence, motion} from "framer-motion";
import {CanvasRevealEffect} from "@/shared";
import {baseImageUrl} from "@/app/config/supabase.ts";
import {toast} from "sonner";


export function StartCards() {
    return (
        <>

            <Card title='Ноутбуки' img={<img src={`${baseImageUrl}/start/3-_3_min.webp`}
                                             className='w-[80%]' alt=""/>}>
                <CanvasRevealEffect
                    animationSpeed={3}
                    colors={[
                        [59, 130, 246],
                        [139, 92, 246],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}

                />
                <div
                    className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 "/>
                <div className="w-full flex justify-center">
                    <img src={`${baseImageUrl}/start/3-_3_min.webp`}
                         className='w-[80%] absolute bottom-40 opacity-70' alt=""/>
                </div>
            </Card>
            <Card title="Компьютеры" img={<img src={`${baseImageUrl}/start/_4_rgb_min.webp`}
                                               className='w-[170px]' alt=""/>}>
                <CanvasRevealEffect
                    animationSpeed={3}
                    colors={[
                        [236, 72, 153],
                        [232, 121, 249],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                />
                {/* Radial gradient for the cute fade */}
                <div
                    className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 "/>
                <div className="w-full flex justify-center">
                    <img src={`${baseImageUrl}/start/_4_rgb_min.webp`}
                         className='w-[170px] absolute bottom-32 opacity-70' alt=""/>
                </div>
            </Card>
            <Card title="Мониторы" img={<img src={`${baseImageUrl}/start/df27c240l-02.webp`}
                                             className='w-[70%]' alt=""/>}>
                <CanvasRevealEffect
                    animationSpeed={3}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                />
                <div
                    className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 "/>
                <div className="w-full flex justify-center">
                    <img src={`${baseImageUrl}/start/df27c240l-02.webp`}
                         className='w-[70%] absolute bottom-32 opacity-70' alt=""/>
                </div>
            </Card>
        </>
    );
}

const Card = ({
                  title,
                  children,
                  img,
              }: {
    title?: string;
    img?: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => toast.info("Регестрируйтесь")}
            className="cursor-pointer border group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[30rem] relative overflow-hidden"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white"/>
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white"/>
            <p className="absolute top-14 left-auto text-white text-xl animate-">
                {title}
            </p>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">

                <div
                    className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {img}
                </div>

            </div>

        </div>
    );
};


export const Icon = ({className, ...rest}: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
        </svg>
    );
};
