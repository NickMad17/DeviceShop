import '@/app/styles/index.scss'
import {router} from "@/app/providers/routerProvider";
import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {AuthProvider} from "@/app/providers/AuthProvider";
import {ThemeProvider} from "@/app/providers/ThemeProvider";
import {PageLoader} from "@/shared";

const App = () => {


    return (
        <div className='min-h-[100vh]'>
            <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
                <Suspense fallback={<PageLoader/>}>
                    <AuthProvider>
                        <RouterProvider router={router}/>
                    </AuthProvider>
                </Suspense>
            </ThemeProvider>
        </div>
    );
};

export default App;
