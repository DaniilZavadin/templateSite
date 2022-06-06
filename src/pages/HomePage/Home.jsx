import React from 'react';
import Slider from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'
import './Home.scss'

const Home = () => {
    return (
        <div className='home-content'>
            {/* <Slider/> */}
            <div className='info-block'>
                <h4 className='info-block__heading'>What is our specialization?</h4>
                <span className='info-block__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolores eligendi? Dolores culpa tenetur eius corrupti nobis voluptatum at pariatur sit velit nulla aliquam, nihil neque temporibus totam cupiditate rerum.</span>
            </div>
            <div className="partners">
                <Card image="/imageSource/compLogo1.jpg" name="Google" onClick={()=>{
                    Navigate
                }}/>
                <Card image="/imageSource/compLogo2.png" name="Facebook" onClick={()=>{
                    Navigate
                }}/>
                <Card image="/imageSource/compLogo3.png" name="Amazon" onClick={()=>{
                    Navigate
                }}/>
            </div>
        </div>
    );
}

export default Home;