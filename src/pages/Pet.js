import React, {useState, useEffect} from 'react';
import { Client } from "@petfinder/petfinder-js";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export const Pet = () => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState([]);
    // const [search, setSearch] = useState('');
    useEffect(()=>{
        let url = "https://api.ipify.org/";
        fetch(url)
        .then(response => {
            console.log(response);
        })
    }, [])

    const client = new Client({apiKey: "tiUlZUY7YaX2rJiP3HCRbvBEBbunRE0alzNOW5VIon7bNegoho", secret: "eWwiB4nda2QhHdnOtff3aegAE1cb5idRFH0UvePm"});

    const searchCity = () => {
        console.log(city);
        client.animal.search({
            location: city,
            age: 'senior',
            type: 'Dog',
            before: '2019-12-07T19:13:01+00:00',
            status: 'adoptable'
        })
            .then(response => {
                setResults(response.data.animals);
                console.log(response.data.animals);
            }
            )
            // .then(function (response) {
            //     // console.log(response);
            //     setResults(response.data.animals);
            //     // Do something with `response.data.animals`
            // })
            // .then(console.log(results))
            .catch(function (error) {
                // Handle the error
                console.log('error somewhere');
            });
    }

    // client.animal.search({location: city})
    //     .then(function (response) {
    //         console.log(response);
    //         // Do something with `response.data.animals`
    //     })
    //     .catch(function (error) {
    //         // Handle the error
    //     });
    return (
        <div>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">City:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                placeholder="Search City Here"
                aria-label=""
                aria-describedby="basic-addon1"
                onChange={(e)=>setCity(e.target.value)}
                />
            </InputGroup>
            <Button onClick={searchCity}>Submit</Button>
            <div>
                {results.map(item=>{
                    // return <p>{item.primary_photo_cropped.full}</p>
                    console.log(item.primary_photo_cropped);
                    if (item.primary_photo_cropped) {
                        return (
                            <div>
                                {/* <p>{item.primary_photo_cropped.full}</p> */}
                                <img src={item.primary_photo_cropped.small} alt=""/>
                                <p>{item.url}</p>
                            </div>
                            )
                    }
                    else {
                        return null;
                    }
                    // return <p>{item.photos.full}</p>
                })}
            </div>
        </div>
    )
}

export default Pet;
