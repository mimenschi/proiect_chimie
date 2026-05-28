import React, { useState } from 'react'
import MicaheJ from '../assets/whoIsIt.mp3'
import Leclerc from '../assets/leclerc.png'


function Mj(){
    const [showImage, setShowImage] = useState(false);

    const handleButtonClick = () => {
    setShowImage(true);

    
    const audio = new Audio(MicaheJ);
    audio.play().catch(error => {
      console.log("Playback failed. Browsers often block auto-playing audio until you interact with the page.", error);
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Suport Moral 2</h1>
      <button onClick={handleButtonClick}>
        Aici
      </button>

      <div style={{ marginTop: '20px' }}>
        {showImage && (
          <img 
            src={Leclerc}
            alt="Dynamic content" 
            style={{ borderRadius: '10px' }}
          />
        )}
      </div>
    </div>
  );
}


export default Mj