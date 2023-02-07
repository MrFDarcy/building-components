import ProfileCard from "./ProfileCard";


function App() {
    return (
        <div>
            <h1>Personal Digital Assistants</h1>

            <ProfileCard title="Alexa" handle="@alexa" />
            <ProfileCard title="Cortana" handle="@cortana" />
            <ProfileCard title="Siri" handle="@siri" />

        </div>

    );

}


export default App;
