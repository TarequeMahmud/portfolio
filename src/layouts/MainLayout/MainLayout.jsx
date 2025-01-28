import {Outlet} from 'react-router-dom';
import {Header, Footer} from '@components';


const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header/>
            <main>
                <Outlet/> {/* This is where the nested routes (pages) will render */}
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;
