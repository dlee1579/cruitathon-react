import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import ConferenceList from '../components/ConferenceList';
import TeamsList from '../components/Teams.json';
import { GrClose } from 'react-icons/gr';


export const Sidebar = (props) => {
    // const [show, setShow] = useState('none');
    // console.log(props);
    // const showStyle = {}

    return (
        <MainContainer>
            <div className="sidenav" style={{display: props.visible}}>
                <Button size='lg' onClick={props.closeSidebar} color="link"
                style={{background: 'transparent', border: '0px'}}
                >
                    <GrClose/>
                </Button>
                <ConferenceList Teams = {TeamsList}/>
                {/* <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a> */}
            </div>
        </MainContainer>
    )
}

export default Sidebar;

const MainContainer = styled.div`

    .sidenav {
        height: 100%;
        // width: 150%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #E8E8E8;
        overflow-x: hidden;
        padding-top: 0px;
    }

    .sidenav a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

`