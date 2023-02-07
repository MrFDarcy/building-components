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


                        <ProfileCard title="Alexa" handle="@alexa" image={AlexaImage} />
                        <ProfileCard title="Cortana" handle="@cortana" image={CortanaImage} />
                        <ProfileCard title="Siri" handle="@siri" image={SiriImage} />
                    </div>
                </div>
            </div>
        </div>
    );

}


export default App;
