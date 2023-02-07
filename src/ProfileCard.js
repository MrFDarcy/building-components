function ProfileCard({ title, handle, image }) {
    return (
        <div>
            <img src={image} alt={title} />
            <div>
                Title : {title}
            </div>
            <div>
                Handle : {handle}
            </div>
        </div>
    )
}


export default ProfileCard;