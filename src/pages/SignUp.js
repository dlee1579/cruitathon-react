import React from 'react';
import Banner from '../components/Banner';
import TeamsList from '../components/Teams.json';
import SignUpForm from '../components/SignUpForm';


export const Signup = () => {
    const [Teams, setTeams] = useState([]);

    useEffect(() => {
        setTeams(TeamsList);
        // console.log(TeamsList);
        ReactGA.initialize("UA-160209262-2");
        ReactGA.pageview(window.location.pathname);
    }, []);
    return (
        <div>
            <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
            <Banner Teams = {Teams}></Banner>
            <SignUpForm></SignUpForm>
        </div>
    )
}
