import {Ban} from "lucide-react";
import {Button} from "@/shared/shadcnui/ui/button.tsx";
import {Link} from "react-router-dom";
import {Paths} from "@/app/providers/routerProvider";

const ErrorPage = () => {
    return (
        <div className='h-[100dvh] flex flex-col items-center justify-center'>
            <h2 className='text-8xl font-[500]'>404</h2>
            <p className='text-2xl flex items-center gap-3'>Страница не найдена <Ban className='mt-1 text-primary'/> </p>
            <p className='font-medium text-input mt-2 bg-foreground p-4 border rounded'>Возможно, она была удалена <br/>
                или перенесена на другой адрес</p>
            <Link to={Paths.HOME}>
                <Button className='mt-5 text-xl p-6'>Вернуться на главную</Button>
            </Link>
        </div>
    );
};

export default ErrorPage;
