import '../styleLoaders.scss'
const PageLoader = () => {
    return (
        <div className='absolute left-0 bottom-0 flex w-[100vw] h-[100vh] justify-center items-center'>
            <div className="loader"></div>
        </div>
    );
};

export default PageLoader;
