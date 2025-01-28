import './App.css'
import {Routes, Route, BrowserRouter} from "react-router"
import {MainLayout} from '@layouts';
import {Home} from '@pages'


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
