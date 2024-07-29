import { tourData as initialTour } from '../Constants';
import ToursCard from '../Components/ToursCard';
import { useState } from 'react';

const Tours = () => {
const [tourData, setTourData] = useState(initialTour)

const refreshPage = () =>{
  window.location.reload()
}

const removeTour = (title) => {
  const updatedTourData = tourData.filter(i => i.title !== title);
  setTourData(updatedTourData);
};

  return (
    <section>
      <div className='flex justify-center items-center flex-col mt-10 mb-0'>
        <h3 className='text-4xl m-0 text-center'>Our Tours</h3>
        <div className='mt-3 bg-green-600 w-32 h-1'></div>
      </div>
      
      {tourData.length > 0 ? (
        <div className='flex flex-wrap mt-32 justify-start items-center '>
          {tourData.map((tour) => (
            <ToursCard 
              key={tour.title}
              title={tour.title}
              article={tour.article}
              imgURL={tour.imgURL}
              price={tour.price}
              place={tour.place}
              notInterested = {() => removeTour(tour.title)}
            />
          ))}
        </div>
      ) : (
        <button onClick ={refreshPage}className="mt-6 w-60 h-10 text-white font-bold bg-green-500 hover:bg-green-700 duration-300 py-2 rounded-md">
          Refresh
        </button>
      )}
    </section>
  );
}

export default Tours;
