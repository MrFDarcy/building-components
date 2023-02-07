function ProfileCard({ title, handle, image }) {
    return (
        <div className="column is-4">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">
                        <img classname="is-rounded" src={image} alt={title} />
                    </figure>
                </div>
                <div className="title is-4">
                    Title : {title}
                </div>
                <div className="subtitle is-6">
                    Handle : {handle}
                </div>
            </div>
        </div>
    )
}


export default ProfileCard;