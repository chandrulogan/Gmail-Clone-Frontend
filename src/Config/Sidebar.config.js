import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export const  SIDEBAR_DATA = [
    {
        name:'inbox',
        title:'Inbox',
        icon: InboxOutlinedIcon,
        link:'/inbox'
    },
    {
        name:'starred',
        title:'Starred',
        icon: StarBorderPurple500OutlinedIcon,
        link:'/starred'
    },
    {
        name:'snoozed',
        title:'Snoozed',
        icon: AccessTimeOutlinedIcon,
        link:'/snoozed'
    },
    {
        name:'sent',
        title:'Sent',
        icon: SendOutlinedIcon,
        link:'/sent'
    },
    {
        name:'draft',
        title:'Draft',
        icon: InsertDriveFileOutlinedIcon,
        link:'/draft'
    },
    {
        name:'delete',
        title:'Delete',
        icon: DeleteOutlineIcon,
        link:'/delete'
    }
]