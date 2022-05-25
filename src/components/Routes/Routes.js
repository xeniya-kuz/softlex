import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Form } from '../Form/Form';
import { Edit } from '../Edit/Edit';
import '../../App.css'



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