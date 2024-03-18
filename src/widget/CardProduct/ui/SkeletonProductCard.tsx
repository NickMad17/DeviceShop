import {Skeleton} from "@/shared/shadcnui/ui/skeleton.tsx";
import {Card} from "@/shared/shadcnui/ui/card.tsx";

const SkeletonProductCard = () => {
    return (
        <Card className="w-[350px] min-h-[550px] rounded-3xl flex flex-col justify-between p-6">
            <div className="flex flex-col gap-8">
                <div className="flex justify-center mt-5">
                    <Skeleton className="bg-input h-[250px] w-[100%]  rounded-3xl"/>
                </div>
                <div className="space-y-2">
                    <Skeleton className=" bg-input h-3 w-[250px]"/>
                    <Skeleton className=" bg-input h-3 w-[230px]"/>
                    <Skeleton className=" bg-input h-3 w-[190px]"/>
                </div>
                <div className="space-y-2 mt-7">
                    <Skeleton className=" bg-input h-3 w-[230px]"/>
                    <Skeleton className=" bg-input h-3 w-[150px]"/>
                </div>
            </div>
            <Skeleton className=' bg-input w-full h-9'/>
        </Card>
    );
};

export default SkeletonProductCard;
