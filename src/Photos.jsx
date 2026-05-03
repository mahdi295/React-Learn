import { use } from "react"
import Photo from "./Photo"
export default function Photos({photosPromise}){

    const photos = use(photosPromise)
    console.log(photos)
    return(
        <div className="card">
            <h1>All Photos Are Here: {photos.length}</h1>

            {
                photos.map(photo=> <Photo photo = {photo}></Photo>)
            }
        </div>
    )
}