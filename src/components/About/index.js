import React from 'react'
import {Link} from 'react-router-dom'
import {AboutContainer, MoreContainer, HeadH1, InfoH1, InfoP, AboutButton} from './AboutElements'
import {useState} from 'react'
import NavBar from '../Navbar';
import Sidebar from '../Sidebar';
import Location from '../Location';
import Footer from '../Footer';


const About = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>  
            <div className='about-wall'>
                <NavBar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
            </div>
            <AboutContainer className='about-us-page'>
                <HeadH1 className='pic-title-head'>Know More About Us</HeadH1>
            </AboutContainer>
            <MoreContainer className='about-extra-box'>
                <InfoH1> Our Story...</InfoH1>
                <InfoP>Between us, we have been working in the restaurant business most of our lives and have held all positions, from barbacks, to servers, and from bartenders, to eventually owning our own restaurants. We have always been creative with food, and loved working all aspects of the restaurant, but there was always something missing. We opened Austin Public in 2014 and was successful up until 2020 when the Pandemic hit. Like the rest of the country, we had to shut down, then re-open with multiple restrictions and then shut down again. Despite all of this, we still managed to serve our community, even if it was for delivery and takeout only. We had no choice but to lay off most of our staff which led to us cooking in the kitchen, and it was here that we found that missing part, the ‘thing’ that we really wanted to do, and as we discovered, were quite good at!.</InfoP><br></br>
                <InfoP>Seeing how the country was struggling, and how our first responders were holding us all together and doing amazing things, we decided we wanted to give back. We would cook different meals every week for them, making sandwiches, appetizers, and pasta. We received such good feedback on our sandwiches, we knew we must be doing something right! In December 2020 we made the hardest decision to date, to close Austin Public completely with the hope of opening 2 months later when the restrictions were lifted. It was during this time, while sitting at home, missing the jobs we loved, that we decided to be as creative as we could be and started to experiment with different types of Sandwiches and Salads and that's when we realized, we needed to open a kick ass, one of a kind sandwich shop, featuring all our creations, and some old favorites all served with fresh, local ingredients.</InfoP><br></br>
                <InfoP>Another important part of this is that we wanted to create a place where everyone could come and enjoy the food, whether you are a meat eater, Vegetarian or Vegan, whether you are health conscious or not. Stacked features something for everyone, with the help of the best local bakeries, produce companies and Boars Head, our food is the best we could get. We couldn't think of a better way to continue to serve the community we love, and to also share our love of Sandwiches and Salads with you all and hope you feel our whole hearts in the results.</InfoP><br></br>
                <InfoP>Welcome to Stacked Sandwich Shop!</InfoP><br></br>
                <InfoP>Declan & Natasha</InfoP><br></br>
                <AboutButton>
                    <Link className='menu-btn' to="/menu"> View Menu</Link>
                </AboutButton>
            </MoreContainer>
            <Location/>
            <Footer/>
        </>
    
    )
} 

export default React.memo(About)