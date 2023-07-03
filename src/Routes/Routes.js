import Main from "../Pages/Main";
import Emails from "../Components/Emails";


export const routes = {
    main: {
        path:'/',
        element: Main
    },
    invalid:{
        path:'/*',
        element: Emails
    },
    emails:{
        path:'/emails',
        element: Emails
    },
    view:{
        path:'/view',
        element: Emails
    }
}