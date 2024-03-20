import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/shared/shadcnui/ui/carousel.tsx";
import {Card, CardContent} from "@/shared/shadcnui/ui/card.tsx";
import {baseImageUrl} from "@/app/config/supabase.ts";

interface Props {
    id: number,
    imgCount: number
}
export const Swiper = ({id, imgCount}:Props) => {
    return (
        <Carousel className="w-[400px] ">
            <CarouselContent>
                {Array.from({length: imgCount}).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className='flex items-center min-h-[500px]'>
                                    {/*<span className="text-4xl font-semibold">{index + 1}</span>*/}
                                    <img src={`${baseImageUrl}/products_img/${id}/${index + 1}.webp`} alt=""/>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}
