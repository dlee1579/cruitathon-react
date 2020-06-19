import React, { useState, useEffect } from 'react';
import uniqueRandomArray from 'unique-random-array';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const Comments = ({ team, comments}) => {
    const [text, setText] = useState('');
    const [commentsList, setCommentsList] = useState();

    useEffect(()=> {
        setCommentsList(comments);
        // console.log(comments);
    }, [comments])

    const changeComment = event => {
        event.preventDefault();
        setText(event.target.value);
    }
    const submitComment = event => {
        // console.log(comment);
        event.preventDefault();

        alert("Are you sure you want to submit a comment? Don't take up all my server space unless you really mean it!")

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: {text}, team: {team} })
            // body: {"text": {text}, "team": {team}}
        };

        let url = 'http://cruitathon-flask.herokuapp.com/submit';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setCommentsList(data);
                // console.log(data);
            });
    }
    // console.log(dogList);
    // console.log(typeof dogList);
    // const random = uniqueRandomArray(dogList);
    // console.log(random());

    const importAll = r => {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))
    const random = uniqueRandomArray(images);
    // console.log(images)
    // console.log(random())

    return (
        <MainContainer className="comments-container" style={{paddingTop: "100px", fontFamily: "college-block"}}>
            <h1 >Comments Section</h1>
            <h6>Post your thoughts here. This comment section is a work in progress. In the meantime, everyone gets a dog picture.</h6>
            <Form onSubmit={submitComment}>
                <Form.Group controlId='formComment'>
                    <Form.Control as="textarea" rows="3" name='text' onChange={changeComment} />
                </Form.Group>
                <Button variant="dark" type="submit" >Submit</Button>
            </Form>
            
            <div>
                <br/>
                <br/>
                <h4>Recent Comments:</h4>
                {commentsList && commentsList.map(comment => {
                    return <div className="row" style={{padding: "20px"}}>
                        {/* <img src={require(`${random()}`)} height="60" alt="" style={{paddingLeft: "10px"}}/> */}
                        <Image src={random()} height="60"/>
                        {/* <p className="comment" style={{padding: "10px", fontFamily: "college-block", background:"black", color:"white", borderRadius:"10px", marginLeft: "10px"}}>{comment.text}</p> */}
                        <p className="speech-bubble" >{comment.text}</p>
                    </div>
                })}
            </div>
        </MainContainer>
    )
}

export default Comments;

const MainContainer = styled.div`

    .comments-container {
        border-radius: 10px;
        padding: 20px;
        font-weight: bold;
        font-family: college-block;
    }

    .speech-bubble {
        position: relative;
        background: #000000;
        border-radius: .4em;
        color: white;
        margin-left: 20px;
        margin-top: 20px;
        padding: 10px;

    }
    
    .speech-bubble:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-right-color: #000000;
        border-left: 0;
        border-top: 0;
        margin-top: -5px;
        margin-left: -10px;
    }

`