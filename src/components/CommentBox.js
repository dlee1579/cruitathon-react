import React, {useState, useEffect} from 'react';

export const CommentBox = (props) => {

    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState(props.commentsList);

    // console.log(props);
    const changeComment = event => {
        event.preventDefault();
        setComment(event.target.value);
    }
    const submitComment = event => {
        // console.log(comment);
        event.preventDefault();
        let url=`http://cruitathon-flask.herokuapp.com/submit/team=${props.team}/text=${comment}`
        fetch(url)
            // .then(response => alert(response.body))
            .then(response => response.json())
            .then(data => {
                setCommentsList(data);
                console.log(data);
            });
    }
    return (
        <form onSubmit={submitComment}>
            <input type="text" onChange={changeComment}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CommentBox;