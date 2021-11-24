interface Props {
    content: string
    author: string
    timestamp: Date
}

const Message = ({ content, author, timestamp }: Props) => {
    {if(author==="PierreB"){
        return(
            <div className="card my-3">
            <div className="card-body">
                <p className="card-text text-end">{content}</p>
            </div>
            <div className="card-footer text-muted text-right">
                Par <span className="author text-end">{author}</span>, {timestamp.toISOString()}
            </div>
        </div>

        )
    }
        }
    return (
        
        <div className="card my-3">
            <div className="card-body">
                <p className="card-text">{content}</p>
            </div>
            <div className="card-footer text-muted text-right">
                Par <span className="author">{author}</span>, {timestamp.toISOString()}
            </div>
        </div>
    )
}

export default Message