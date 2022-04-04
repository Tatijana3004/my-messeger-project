import { Message } from "../Message/Message";

export const MessageList = ({ messages }) =>

    messages.map((msg) => (
        <Message key={msg.id} text={msg.text} author={msg.author} />
    ));


//Фиксированный массив
    // const masmsg = [
    //     {
    //         author: 'Tatiana',
    //         date: '29.03.2022',,3
    //         text: 'text_1'
    //     },
    //     {
    //         author: 'Robot',
    //         date: '29.03.2022',
    //         text: 'text_2'
    //     },
    // ]
