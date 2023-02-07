import ProfileCard from "./ProfileCard";

import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";



function App() {
    return (
        <div>
            <h1>Personal Digital Assistants</h1>

            <ProfileCard title="Alexa" handle="@alexa" image={AlexaImage} />
            <ProfileCard title="Cortana" handle="@cortana" image={CortanaImage} />
            <ProfileCard title="Siri" handle="@siri" image={SiriImage} />

        </div>

    );

}


export default App;
