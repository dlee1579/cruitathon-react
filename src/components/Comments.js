import React, { useState, useEffect, useRef } from 'react';
import uniqueRandomArray from 'unique-random-array';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Client } from "@petfinder/petfinder-js";
import Spinner from 'react-bootstrap/Spinner';




export const Comments = ({ team, comments, location}) => {
    const [text, setText] = useState('');
    const [commentsList, setCommentsList] = useState();
    const isFirstRun = useRef(true);
    const [dogResults, setDogResults] = useState([]);
    
    // console.log(isFirstRun);
    useEffect(()=> {
        const client = new Client({apiKey: "tiUlZUY7YaX2rJiP3HCRbvBEBbunRE0alzNOW5VIon7bNegoho", secret: "eWwiB4nda2QhHdnOtff3aegAE1cb5idRFH0UvePm"});
        setCommentsList(comments);
        const searchParams = {
            location: location,
            age: 'senior',
            type: 'Dog',
            before: '2019-12-07T19:13:01+00:00',
            status: 'adoptable',
            limit: 50,
        };
        if (location !== 'undefined, undefined'){
            client.animal.search(
                searchParams
            )
                .then(response => {
                    // console.log(location);
                    setDogResults(response.data.animals);
                    console.log(response.data.animals);
                    // return dogResults;
                    if (response.data.animals.length === 0) {
                        delete searchParams.age;
                        client.animal.search(searchParams)
                            .then(response => {
                                console.log('no old dogs found, editing query parameters');
                                setDogResults(response.data.animals);
                                console.log(response.data.animals);
                            })
                    }
                }
                )
                .catch(err => {
                    console.log(err);
                })
                .then(response => {
                    console.log('response: ', response);
                })
        }
        
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
        // let text = event.target.value;
        console.log(text);

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

    // const importAll = r => {
    //     return r.keys().map(r);
    // }
    // const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))
    // const random = uniqueRandomArray(images);
    const randomAdopt = uniqueRandomArray(dogResults);
    
    const loadPage = (argument) => {
        if (!argument) {
            return (
                <Row style={{justifyContent: 'center'}} className="justify-content-md-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Row>
            )
        }
    }

    return (
        <MainContainer className="comments-container" style={{paddingTop: "100px", fontFamily: "college-block", marginLeft: "20px"}}>
            <h1 className="comments-header">Comments Section</h1>
            <h6 >Post your thoughts here. This comment section is a work in progress. In the meantime, everyone gets a dog picture.</h6>
            <Form onSubmit={submitComment}>
                <Form.Group controlId='formComment' style={{fontFamily: 'calibri'}}>
                    <Form.Control as="textarea" rows="3" name='text' onChange={changeComment}/>
                </Form.Group>
                <Button variant="dark" type="submit" >Submit</Button>
            </Form>
            
            <div>
                <br/>
                <br/>
                <h4>Recent Comments:</h4>
                {loadPage(commentsList)}
                {commentsList && commentsList.map(comment => {
                    // console.log(comment);
                    if (dogResults.length > 0) {
                        let dog = randomAdopt();
                        // while (!dog.primary_photo_cropped.small) {
                        // console.log(dog);
                        let hasImage = false;
                        while (!hasImage) {
                            try {
                                if (dog.primary_photo_cropped.hasOwnProperty("small")){
                                    hasImage = true;
                                }
                                // dog.primary_photo_cropped.hasOwnProperty("small");
                            }
                            catch(error) {
                                console.log(error);
                                dog = randomAdopt();
                            }
                        }
                        // while (!dog.hasOwnProperty('primary_photo_cropped') || !dog.primary_photo_cropped.hasOwnProperty("small")){
                        //     dog = randomAdopt();
                        // }
                        return <Row style={{padding: "20px"}}>
                            <div style={{display: "inline-block", alignItems: "center", textAlign: "center"}}>
                                <a href={dog.url}>
                                    <Image src={dog.primary_photo_cropped.small} height="90" style={{display: "block", margin:"0 auto"}}/>
                                </a>
                                <a href={dog.url} style={{fontSize: 20, color: 'black', background: 'gold', textAlign:"center"}}>adopt me!</a>
                            </div>
                            <div style={{display: "inline-block"}}>
                                <p className="speech-bubble" >{comment.text}</p>
                            </div>
                        </Row>
                        // <div style={{padding: "20px"}}>
                        //     <Image src={dog.primary_photo_cropped.small} height="60"/>
                        //     <p className="speech-bubble" >{comment.text}</p>
                        // </div>
                    }
                    else {
                        return null;
                    }
                })}
                {/* <div>
                    {dogResults.map(item=>{
                        console.log(item.primary_photo_cropped.small);
                        if (item.primary_photo_cropped) {
                        return (
                            <div>
                                <img src={item.primary_photo_cropped.small} alt=""/>
                                <p>{item.url}</p>
                            </div>
                            )
                        }
                    })}
                </div> */}
            </div>
        </MainContainer>
    )
}

export default Comments;

const MainContainer = styled.div`

    .comments-container {
        border-radius: 10px;
        padding: 20px;
        // font-weight: bold;
        font-family: college-block;
        
    }

    .comments-header {
        background: #464646;
        border-radius: .2em;
        color: white;
        padding: 10px;
    }

    .speech-bubble {
        position: relative;
        background: #DFDFDF;
        border-radius: .4em;
        color: black;
        margin-left: 20px;
        margin-top: 20px;
        padding: 10px;
        font-family: calibri;
        // font-weight: bold;
        font-size: 20px;

    }
    
    .speech-bubble:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-right-color: #DFDFDF;
        border-left: 0;
        border-top: 0;
        margin-top: -5px;
        margin-left: -10px;
    }

`