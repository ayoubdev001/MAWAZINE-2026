
import { useParams } from "react-router-dom"
import Card1info from "../components/card1info"
import data from "../data/data1";
function Artist (){
   const {id} = useParams()
   const artistData = data.find(e=>e.id === Number(id))
   console.log(artistData)



    if (!artistData) return <p className=" text-amber-50 text-center text-4xl ">⚠Artist not found</p>  

    
     return(
      
        <div>
          
           <Card1info artist={artistData}/>

        </div>
     )
}
export default Artist
