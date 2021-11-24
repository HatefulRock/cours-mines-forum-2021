import { ChangeEvent, SyntheticEvent, useState } from "react"
import { mutate } from "swr";

type MessageCreation={
    username: string;
    message: string;
}

const NewMessageForm = () => {
    const[pseudo,setPseudo]=useState("")
    const [message, setMessage]=useState("")

    const handlePseudoChange=(event: ChangeEvent<HTMLInputElement>)=>setPseudo(event.target.value);
    const handleMessageChange=(event: ChangeEvent<HTMLTextAreaElement>)=>setMessage(event.target.value);
    const handleSubmit=(event: SyntheticEvent)=>{
        // Prevent browser to submit
        event.preventDefault()
        // Validate data
        if(pseudo.length===0||message.length===0){
            return 
        }
        // Send data
        fetch('http://ensmn.herokuapp.com/messages',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'},
                body: JSON.stringify({
                    username: pseudo,
                    message: message})
                })
        // Refresh messages
        mutate('http://ensmn.herokuapp.com/messages')
        setPseudo("")
        setMessage("")
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="row d-flex">
            <div className="mb-3 col-sm-9">
                <label htmlFor="pseudo" className="form-label ">Pseudo</label>
                <input type="text" className="form-control" id="Username" name="pseudo"required onChange={handlePseudoChange} value={pseudo}/>
                <label htmlFor="message" className="form-label ">Message</label>
                <textarea rows={5} className="form-control" id="message" onChange={handleMessageChange} value={message}></textarea>
            </div>
            <div className="col-sm-3 flex-grow-2">
                <button id="button1" type="submit" className="btn btn-primary col-sm-3">Submit</button>
            </div>
        </div>
        </form>
        
    )
}

export default NewMessageForm