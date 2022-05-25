import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Edit } from '../components/Edit/Edit';
import { Home } from '../components/Home/Home';
import { Login } from '../components/Login/Login';
import { Form } from '../components/Form/Form';
import '../App.css'



export const Routers = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} >
                        <Route path="create" element={<Form />} />
                        <Route path="login" element={<Login />} />
                        <Route path="edit/:taskId" element={<Edit />} />
                    </Route>

                </Routes>
            </div>
        </BrowserRouter>
    )
}