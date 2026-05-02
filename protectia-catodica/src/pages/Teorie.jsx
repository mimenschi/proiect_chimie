import React from 'react'
import { Navigate } from 'react-router-dom'

function Teorie() {
  const [goToContact, setGoToContact] = React.useState(false)

  if (goToContact) {
    return <Navigate to="/Teorie" />
  }

  return (
    <div>
      Teorie
      <button
        onClick={() => {
          setGoToContact(true)
        }}
      >
        {" "}
        h2o e lichid
      </button>
    </div>
  );
}

export default Teorie