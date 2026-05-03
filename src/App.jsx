import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import Cricket from './Cricket'
import Photos from './Photos'



const fetchPhotos = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  return res.json();
}
function App() {
  const photosPromise = fetchPhotos();


  function Click1(){
    alert("Click 1")
  }

  const Click2 = () => {
    alert("Click 2")
  }


  const Click4 = (num) => {
    let sum = num+5
    alert(sum)
  }
  return (
    <>
        <div>
            <Suspense fallback={<h3>Photos Are Coming.......</h3>}>
              <Photos photosPromise={photosPromise}></Photos>
            </Suspense>
        </div>


        <div>
          <h1>Click for Counts</h1>

          <button onClick={Click1}>Click 1</button>
          <br />
          <button onClick={Click2}>Click 2</button>

          <br />

          <button onClick={() => alert("Click 3")}>Click 3</button>

          <br />

          <button onClick={()=> Click4(10)}>Click for num</button>
        </div>


        <div>
          <Counter></Counter>
        </div>

        <div>
          <Cricket></Cricket>
        </div>
    </>
  )
}

export default App
