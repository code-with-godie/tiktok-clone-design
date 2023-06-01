import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home';
import Protected from './layout/Protected';
import Upload from '../pages/upload/Upload';
import Messeger from '../pages/messeger/Messeger';
import Profile from '../pages/profile/Profile';
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/profile/:username',
        element:<Profile/>
    },
    {
        path:'/',
        element:<Protected/>,
        children:[
            {
                path:'/upload',
                element:<Upload/>
            },
            {
                path:'/inbox',
                element:<Messeger/>
            },
        ]
    },
]);
