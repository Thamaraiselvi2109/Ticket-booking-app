import React from 'react'
import ToPart from './ToPart'
import FromPart from './FromPart'
import Click from './Click'

const Searchpart = () => {
  return (
    <div>
        <div className="search fixed-top">
        <div className="container py-2">
        <form>
          <div className="row align-items-center justify-content-center">
            {/* Source */}
            <div className="col-sm-4 col-md-4 input-field">
              <FromPart />
            </div>
            {/* Destination */}
            <div className="col-sm-4 col-md-4 input-field">
              <ToPart />
            </div>
            {/* searchbtn */}
            <div className="col-sm-2 col-md-3">
              <Click/>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Searchpart