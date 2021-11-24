
import type { NextPage } from 'next'
import MessagesList from '../../components/MessagesList'
import NewMessageForm from '../../components/NewMessageForm'

const Exercise4: NextPage = () => {
  return (
    /*
    <><h1>Forum</h1>
    <div className="row">
      <div className="d-flex flex-column">
          <div className="p-2 bd-highlight flex-grow-1 overflow-auto" id="forumposts">
          <div className="container-fluid">
          </div>
          </div>
        <div className="p-2 bd-highlight flex-grow-2" id="reply">
        <div className="container-fluid">
        <form method="post">
        <div>
          <label htmlFor="Username">Username</label>
          <input type="text" id="Username" name="Username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="Message">Message</label>
          <input type="text" id="Message" name="Message" placeholder="Message" />
        </div>
        <div id="button">
          <button type="submit">Submit message</button>
        </div>
        </form>
        </div>
        </div>
      </div>
    </div>

    </>
    */
    <div id="forum-wrapper" className="d-flex flex-column">
    <div id="title" className="text-center fst-italic">
      <h1>4-um</h1>
    </div>
    <div id ="box" className="row">
    <div id="messages-container" className="col-sm-10 scroll">
        <MessagesList/>
    </div>
    <div id="topics" className="col-sm-2">
      <h1>Topics</h1>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><u>Thread 1</u></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><u>Thread 2</u></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><u>Thread 3</u></a>
        </li>
      </ul>
    </div>
    </div>
      <div id="new-message-container" className="flex-grow-1">
      <div className="container py-3">
        <NewMessageForm/>
      </div>
    </div>
  </div>
  )
}

export default Exercise4


