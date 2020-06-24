import React, { useState, useEffect, useRef } from 'react';
import uniqueRandomArray from 'unique-random-array';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const Comments = ({ team, comments}) => {
    const [text, setText] = useState('');
    const [commentsList, setCommentsList] = useState();
    const isFirstRun = useRef(true);
    
    // console.log(isFirstRun);
    useEffect(()=> {
        setCommentsList(comments);
        // console.log(comments);
        // console.log(isFirstRun);
    }, [comments])

    useEffect(()=> {
        if (!isFirstRun.current) {
            window.scrollTo({left: 0,top: document.body.scrollHeight+300, behavior: "smooth"});
        }
    }, [commentsList])

    const changeComment = event => {
        event.preventDefault();
        setText(event.target.value);
    }
    const submitComment = event => {
        // console.log(comment);
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: {text}, team: {team} })
            // body: {"text": {text}, "team": {team}}
        };
        // console.log(event.target);
        event.target.reset();

        let url = 'https://cruitathon-flask.herokuapp.com/submit';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setCommentsList(data);
                // console.log(data);
            });
        if (isFirstRun.current) {
            isFirstRun.current = false;
        }
    }

    const importAll = r => {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))
    const random = uniqueRandomArray(images);

    return (
        <MainContainer className="comments-container" style={{paddingTop: "100px", fontFamily: "college-block", marginLeft: "20px"}}>
            <h1 className="comments-header">Comments Section</h1>
            <h6 >Post your thoughts here. This comment section is a work in progress. In the meantime, everyone gets a dog picture.</h6>
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
                        <Image src={random()} height="60"/>
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

    .comments-header {
        background: #000000;
        border-radius: .2em;
        color: white;
        padding: 10px;
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