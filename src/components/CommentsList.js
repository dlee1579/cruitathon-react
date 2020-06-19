import React, {useState} from 'react';

export const CommentsList = (props) => {
    // console.log(props.comments);
    // let comments = ["blah blah", "blah blah 2", "blah 3"];

    const [commentsList, setCommentsList] = useState(props.commentsList);
    console.log(commentsList);

    return (
        <div>
            {props.commentsList.map(comment => {
                return <div>
                    <img src={require("./prison_fish.jpg")} height="60" alt=""/>
                    <p className="comment">{comment.text}</p>
                </div>
            })}
        </div>
    )
}

export default CommentsList;