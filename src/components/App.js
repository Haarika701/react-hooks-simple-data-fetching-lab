// create your App component here
import React,{useEffect ,useState} from "react";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        setImages(data.message);
      },[]);
  });

  return (
    <div>
      {/* {images.map((image) => (
        <img src={image} key={image} alt = "A Random Dog" />
      ))} */}
      <p>Loading....</p>
    </div>
  );
}
export default App;