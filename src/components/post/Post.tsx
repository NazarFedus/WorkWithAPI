import { useParams } from 'react-router-dom';
import React, {useState} from "react";
import useGetData from "./../../hooks/useGetData";
// import { CommentsList } from "./CommentsList";
// import { IComment } from "../scripts/interfaces";
// import Post from './CardPost'


export default () => {
     const {getComment} = useGetData();
     // const [comments, setComments] = useState<IComment[]>([]);
     const [state, setState] = useState<boolean>(false)
     console.log(useParams())
     const {id} = useParams();

     console.log(id)

     // async function showComment(){
     //      const comments = await getComment(data.id)
     //      setComments(comments)
     //      setState(!state)
     //      console.log(comments)
     // }
     return (
          <div className="post">


               {/* <div>
                    <Post post={data}></Post>
                    <button onClick={showComment}>{state ? 'Hide' : 'Show'} Comments</button>
               </div>


               {state && <CommentsList commentlist={comments}></CommentsList>} */}
          </div>
     )
}