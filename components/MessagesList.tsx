import useSWR from 'swr'
import Message from './Message'

interface MessageApi{
    author:string,
    content:string,
    timestamp:number,
}

const fetcher=async (url:string )=>{
    let pageIndex=0
    let messages: MessageApi[]=[]
    let finished=false
    
    while(!finished){
        let urlWithPage=`${url}?page=${pageIndex}`
        const response= await fetch(urlWithPage).then((response)=>response.json())
        pageIndex+=1
        finished=response.length===0
        //Merge pages
        messages= messages.concat(response)
    }
    //Return messages in reverse order
    return messages.reverse()
}

const MessagesList = () => {
    /*
    const messages = [
        {
            content: "salut",
            author: "Pierre",
            timestamp: Date()
        },
        {
            content: "yo",
            author: "Polo G",
            timestamp: Date()
        },
        {
            content: "eskeetit",
            author: "Lil Pump", 
            timestamp: Date()
        },
        {
            content: "Ye",
            author: "Kanye",
            timestamp: Date()
        }
    ]
    */
    const {data,error}=useSWR('http://ensmn.herokuapp.com/messages',fetcher,{refreshInterval:3000})
    if(error){
        return <div>failed to load</div>
    }
    if(!data){
        return <div>loading....</div>
    }

    return (
        <div className="container">
            {data.map(({ content, author, timestamp }:MessageApi, i:number) => <Message key={i} content={content} author={author} timestamp={(new Date(timestamp))} />)}
        </div>
    )
}

export default MessagesList