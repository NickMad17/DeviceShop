import {useEffect} from "react";
import {GetUserRole, MainUser} from "@/features/MainUser";
import {observer} from "mobx-react-lite";
import {Alert, AlertDescription, AlertTitle} from "@/shared/shadcnui/ui/alert.tsx";
import {TriangleAlert} from "lucide-react";
import {Card} from "@/shared/shadcnui/ui/card.tsx";
import AdminForm from "@/widget/AdminPanel/ui/AdminForm.tsx";

const AdminPanel = observer(() => {
    useEffect(() => {
        GetUserRole()
    }, []);
    return (
        <div>
            {MainUser.role === 'admin'
                ? (
                    <>
                        <Card className='p-10 bg-background flex flex-col gap-4 w-[600px]'>
                            <h3 className='text-[22px] font-[600]'>Добавление товара</h3>
                            <AdminForm/>
                        </Card>
                    </>
                )
                : (
                    <Alert className='border-orange-300 text-orange-3   00'>
                        <TriangleAlert className="h-4 w-4 " color='orange'/>
                        <AlertTitle>Ошибка</AlertTitle>
                        <AlertDescription>
                            У вас нет доступа к редактированию и добавлению товаров
                        </AlertDescription>
                    </Alert>
                )
            }
        </div>
    );
});

export default AdminPanel;
