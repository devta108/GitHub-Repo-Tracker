import React, { useState, useContext } from 'react';
import Axios from 'axios';

import {
    Row,
    Col,
    Container,
    Input,
    Button,
    InputGroup,
} from "reactstrap";

// Components
import UserCard from '../Components/UserCard';
import Repo from '../Components/Repo';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

const Home = () => {
    const context = useContext(UserContext);
    const [query, setQuery] = useState("");
    const [user, setUser] = useState(null);

    const fetchDetails = async () => {
        try {
            // const prefix = "https://api.github.com/users/";
            // const suffix = {user};
            const {data} = await Axios.get(`https://api.github.com/users/${query}`);
            setUser(data);
            console.log({data})
        } catch (error) {
            toast("Not able to locate user",{
                type: "error"
            })
        }
    }
    // Put anypage behind login
    if(!context.user?.uid){
        return <Navigate to="/signin" />
    }

    return (
        <Container>
            <Row className="mt-3">
                <Col md="5">
                    <InputGroup>
                        <Input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Please provide the username"
                        />
                            <Button color='primary' onClick={fetchDetails}>Fetch User</Button>
                        
                    </InputGroup>
                    {user ? <UserCard user={user} />:null}
                </Col>
                <Col md="7">{user ? <Repo repos_url={user.repos_url}/>: null}</Col>
            </Row>
        </Container>
    );
}

export default Home;