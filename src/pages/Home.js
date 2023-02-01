import React from 'react';
import '../styles/pages/Home.css'
import Section1 from '../components/Section1';
import Gallery from '../components/Gallery';

const Home = () => {
    return (
      <div className="home">
        <Section1 />
        <Gallery />
      </div>
    );
};

export default Home;