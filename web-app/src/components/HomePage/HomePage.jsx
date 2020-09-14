import React from 'react'
import TitleBanner from '../TitleBanner/TitleBanner';
import {
    Link,
} from 'react-router-dom'

const Home = () => (
    <div>
      <TitleBanner title="Regular Payments" />
      <Link to="/example">Go to /example</Link>
    </div>
)

export default Home;
