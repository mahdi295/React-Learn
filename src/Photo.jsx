export default function Photo({photo}){
    return(
        <div className="card">
            <p>{photo.title}</p>
            <a href="">{photo.url}</a>
            <p>
                <a href="">{photo.thumbnailUrl}</a>
            </p>
        </div>
    )
}