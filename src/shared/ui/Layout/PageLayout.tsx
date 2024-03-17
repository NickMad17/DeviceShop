import {ReactNode} from "react";
import {Toaster} from "@/shared/shadcnui/ui/sonner.tsx";

interface Props {
    children: ReactNode
}

const PageLayout = ({children}: Props) => {
    return (
        <main className='pt-20 px-20'>
            {children}
            <Toaster richColors/>
        </main>
    );
};

export default PageLayout;
