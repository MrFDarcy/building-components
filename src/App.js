import ProfileCard from "./ProfileCard";


import 'bulma/css/bulma.css';


import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";



function App() {
    return (
        <div>

            <section className="hero">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistants
                    </p>
                </div>
            </section>


            <div className="container">
                <div className="section">
                    <div className="columns">


                        <ProfileCard
                            title="Alexa"
                            handle="@alexa"
                            image={AlexaImage}
                            desciption="Alexa is a virtual assistant developed by Amazon, first used in the Amazon Echo and the Amazon Echo Dot smart speakers developed by Amazon Lab126. It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information such as news. Alexa can also control several smart devices using itself as a home automation system."
                        />
                        <ProfileCard
                            title="Cortana"
                            handle="@cortana"
                            image={CortanaImage}
                            desciption="Cortana is a virtual assistant created by Microsoft for Windows 10, Windows 10 Mobile, Windows Phone 8.1, Invoke smart speaker, Microsoft Band, Xbox One, iOS, Android, Windows Mixed Reality, and Amazon Alexa. Cortana is capable of voice interaction, making to-do lists, setting reminders, playing music, answering questions, and providing local search results. Cortana can also control several smart devices using itself as a home automation system."
                        />
                        <ProfileCard
                            title="Siri"
                            handle="@siri"
                            image={SiriImage}
                            desciption="Siri is a virtual assistant developed by Apple Inc. that is available on its iOS, iPadOS, watchOS, macOS, tvOS, and HomePod operating systems. Siri was introduced to the iPhone 4S in October 2011. Siri is capable of voice interaction, making to-do lists, setting reminders, playing music, answering questions, and providing local search results. Siri can also control several smart devices using itself as a home automation system."
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}


export default App;
