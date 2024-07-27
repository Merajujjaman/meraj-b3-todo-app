import { ReactNode } from 'react';

type TContainerProp = {
    children: ReactNode
}

const Container = ({children}:TContainerProp) => {
    return (
        <div className="h-screen w-full max-w-7xl mx-auto p-2 md:p-5 bg-gray-300 ">
            {children}
        </div>
    );
};

export default Container;