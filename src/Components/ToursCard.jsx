import { useState } from "react"

const ToursCard = ({title, imgURL, article, price,place,notInterested}) => {

  const [readMore , setReadmore] = useState(false)
  
  const moreText = () => {
    setReadmore(!readMore)
  }

  const cutText = (text, length) =>{
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  }
  return (
    <section>
      <div className="flex items-center justify-start mr-9">
        <div className="w-80 h-full rounded-md hover:shadow-2xl duration-300 l object-cover  mb-12 shadow-md">
            <div className="relative h-[300px]">
                <div className="absolute t-0 text-white font-light text-2xl w-24 h-8 items-center flex justify-center left-56 rounded-bl-lg bg-green-700 rounded-tr-md"> ${price}</div>
                <img className="rounded-t-md object-cover w-full h-full mb-2" src={imgURL}  alt={place} />
            </div>
            <div className="flex flex-col">
                <h3 className="mt-5 mb-4 text-2xl font-semibold">{title}</h3> 
              
                <p className="text-slate-500 text-start ml-3 items-center">{readMore ? article : cutText(article, 200)}</p>
                <button onClick={moreText} className="text-green-400 text-start ml-3 items-center">{readMore ? 'Read Less' : 'Read More'}</button>
  
            </div>
            <button onClick={notInterested} className="mt-5 mb-5 border-green-500 border-2 w-72 ml-3 mr-3 rounded-md hover:bg-green-500  hover:text-white  duration-300">Not Interested</button>
        </div>
      </div>
      </section>
  )
}

export default ToursCard