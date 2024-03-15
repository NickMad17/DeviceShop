import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

const PageLayout = ({children}: Props) => {
    return (
        <div className='pt-20 px-44'>
            {children}
        </div>
    );
};

export default PageLayout;
