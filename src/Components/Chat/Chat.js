import './Chat.css'
export const Chat = () => {
    const chats = [
        {
            id: "chat1",
            name: "work",
        },
        {
            id: "chat2",
            name: "training",
        },
        {
            id: "chat3",
            name: "house",
        },
    ];
    const initMessages = {
        chat1: [],
        chat2: [],
        chat3: [],
    };

    return (
        <div className='chat-list'>
            Chat list
            <li>work</li>
            <li>training</li>
            <li>house</li>
        </div>
    )
}

// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import { chainPropTypes } from '@mui/utils';

// export default function PinnedSubheaderList() {
//     return (
//         <List
//             sx={{
//                 width: '100%',
//                 maxWidth: 360,
//                 bgcolor: 'background.paper',
//                 position: 'relative',
//                 overflow: 'auto',
//                 maxHeight: 300,
//                 '& ul': { padding: 0 },
//             }}
//             subheader={<li />}
//         >
//             {[0, 1, 2, 3, 4].map((sectionId) => (
//                 <li key={`section-${sectionId}`}>
//                     <ul>
//                         <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
//                         {[0, 1, 2].map((item) => (
//                             <ListItem key={`item-${sectionId}-${item}`}>
//                                 <ListItemText primary={`Item ${item}`} />
//                             </ListItem>
//                         ))}
//                     </ul>
//                 </li>
//             ))}
//         </List>
//     );
// }