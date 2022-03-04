import React from 'react';
import Form from '../components/Form';
import Counter from '../components/Counter';

const Home = () => {
    return (
        <div>
            <Counter/>
            <h1>Task app</h1>
            <Form/>
        </div>
    );
};

export default Home;
