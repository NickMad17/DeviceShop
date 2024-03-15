import Loader from "./Loader.tsx";

const PageLoader = () => {
    return (
        <div className='absolute right-0 bottom-0 flex w-[100vw] h-[100%] justify-center items-center' >
            <Loader/>
        </div>
    );
};

export default PageLoader;
