import React, { useState } from 'react'
import HailMary from '../assets/HailMary.png'
import MicaheJ from '../assets/whoIsIt.mp3'
import HarryS from '../assets/signOfTheTimes.mp3'


function Rocky(){
   
  const [showImage, setShowImage] = useState(false);

    const handleButtonClick = () => {
    setShowImage(true);

    const audio = new Audio(HarryS);
    audio.play().catch(error => {
      console.log("Playback failed. Browsers often block auto-playing audio until you interact with the page.", error);
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Suport moral </h1>
      <button onClick={handleButtonClick}>
        Aici
      </button>

      <div style={{ marginTop: '20px' }}>
        {showImage && (
          <img 
            src={HailMary}
            alt="Dynamic content" 
            style={{ borderRadius: '10px' }}
          />
        )}
      </div>
    </div>
  );
}


export default Rocky