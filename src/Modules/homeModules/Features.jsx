import React from 'react';
import { useSelector } from 'react-redux';
import { features } from '../../redux/slices/FeaturesSlice';

const Features = () => {
    const feature = useSelector(features)
  return (
        <div className="row mt-5 pt-5 justify-content-center features">
        {feature.map((data)=><div className='col-md-2' key={data.id}><img
            src={data.image}
            alt="feature"
            className='img-fluid'
        />
        </div>
        )}
        </div>
  )
}

export default Features;