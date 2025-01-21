import EachSummary from './EachSummary.jsx'
import reactionIcon from '../assets/icon-reaction.svg';
import memoryIcon from '../assets/icon-memory.svg';
import verbalIcon from '../assets/icon-verbal.svg';
import visualIcon from '../assets/icon-visual.svg';

const Summary = () => {

 const Summaries = [
     {
         id :1 ,
         imgUrl : reactionIcon,
         topic  : "Reaction",
         backgroundColor :"red-white" ,
         topicColor : "text-red",
         score: 80
     },
     {
        id :2,
        imgUrl : memoryIcon,
        topic  : "Memory",
        backgroundColor : "yellow-white",
        topicColor : "text-yellow",
        score: 92

     },
     {
        id:3,
        imgUrl : verbalIcon,
        topic  : "Verbal",
        backgroundColor :"green-white",
        topicColor : "text-green",
        score: 61 ,


     },
     {
        id:4,
        imgUrl : visualIcon,
        topic  : "Visual",
        backgroundColor : "blue-white",
        topicColor : "text-blue",
        score: 73
     },]  


  return (
    <section className="desktop:m-9 m-6 flex flex-col gap-7 ">
        <h2 className="font-hanken font-semibold text-2xl mr-44 text-dark-navy">
            Summary
        </h2>
        <div className="flex flex-col gap-4">
            {
                Summaries.map((eachSummary)=>{
                     return <EachSummary key={eachSummary.id} 
                                        imgUrl={eachSummary.imgUrl} 
                                        backgroundColor={eachSummary.backgroundColor} 
                                        topic={eachSummary.topic} 
                                        topicColor={eachSummary.topicColor} 
                                        score = {eachSummary.score}/>
                }) 

            }
           
            
        </div>
        <button className='bg-dark-navy rounded-[24rem] px-24 py-4 text-white font-hanken text-medium font-semibold tracking-wide hover:bg-blue'>
                Continue
        </button> 
         
    </section>
  )
}

export default Summary
