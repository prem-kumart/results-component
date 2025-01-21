
// eslint-disable-next-line react/prop-types
const EachSummary = ({imgUrl,backgroundColor,topic,topicColor, score }) => {
  return (
    <div className={`${backgroundColor} desktop:w-72 desktop:h-14 font-hanken rounded-xl flex flex-row gap-20 items-center py-4 px-4`}>
      <div className='flex flex-row gap-2.5'>
            <img src={imgUrl}></img>
            <p className={`${topicColor} w-[71px] h-[23px]`}>{topic}</p>
       </div>
       <p className="font-semibold tracking-normal text-dark-navy">{score} <span className="text-green-teal">/ 100 </span> </p>
    </div>
  )
}

export default EachSummary
