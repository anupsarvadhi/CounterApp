import React, { useState } from 'react'
import './count.css'

const Count = () => {
  const [add, setAdd] = useState(0)
  return (
    <div className="mainDiv">
      <div className="fDiv">
        <div className="notallowed-cursor">
          <button
            className={add ? 'sub-btn' : 'sub-diseblebtn'}
            onClick={() => setAdd(add - 1)}
          >
            -
          </button>
        </div>
        <div className="count">
          <p>{add}</p>
        </div>
        <button className="add-btn" onClick={() => setAdd(add + 1)}>
          +
        </button>
      </div>
      <div className="sDiv">
        <button className="reset-btn" onClick={() => setAdd(add - add)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Count
