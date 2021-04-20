import React from 'react'
import  './Home.css'
import Banner from './Banner'
import Card from './Card'
function Home() {
    return (
        <div className="home">
            
            <Banner/>
            <div className="home__section">
                <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire homes"
                description="comfortable private places,with room for friends or family."

                 />
                <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire homes"
                description="comfortable private places,with room for friends or family."

                 />
               <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire homes"
                description="comfortable private places,with room for friends or family."

                 />
            </div>
            <div className="home__section">
            <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire homes"
                description="comfortable private places,with room for friends or family."
                price="6 00"
                 />
              <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire homes"
                description="comfortable private places,with room for friends or family."
                price="200"
                 />
               <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire homes"
                description="comfortable private places,with room for friends or family."
                 price="500"
                 />
            </div>
        </div>
    )
}

export default Home
