import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


function App() {
  
    const [comments, setComments] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_delay=2000'+Math.random())
            .then(response => response.json())
            .then(result => setComments(result))
    }, []);

    return (
           <div className="container">
           <h2>Comments</h2>
           {comments ? 
               <ul>
                   {comments.map((comment, i) => 
                       <li className="commentCard" key={i}>
                           <p><span>Title:</span> {comment.name}</p>
                           <hr/>
                           <p><span>By:</span> {comment.email}</p>
                           <p><span>Comment:</span> {comment.body}</p>
                       </li>
                   )}
               </ul>
           : 
           <FontAwesomeIcon icon={faSpinner} spin  className="spinner"/>
           }
     
       </div>
     );
}
export default App;