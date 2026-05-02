import React from 'react'
import { Navigate } from 'react-router-dom'

function Experiment() {
  const [goToContact, setGoToContact] = React.useState(false)

  if (goToContact) {
    return <Navigate to="/Experiment" />
  }

  return (
    <div>
      Experiment
      <button
        onClick={() => {
          setGoToContact(true)
        }}
      >
        {" "}
        da ma da gateste anozii
      </button>
    </div>
  );
}

export default Experiment