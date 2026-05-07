import data from '../data/data1'
import { Link } from 'react-router-dom'

function Theprogram (){
      return ( 
        <div className='bg-[#F5C542] pt-15 pb-10 flex justify-evenly rounded-3xl p-6'>
             {data.map((info) => (<div key={info.id} className='bg-[#0B132B] rounded-4xl '> 
            <img className='w-3xs p-3 rounded-4xl' src={info.img} alt="profpic" />
            <div className='text-[#F5C542] font-bold font-serif p-7 '>
            <h2 >{info.name}</h2>
            <h2 >{info.time}</h2>
            <p>{info.place}</p>

           {/* this will be used in passport, local storege for it*/}
            <button className='cursor-pointer'>save to passport</button>
            <div className=' bg-amber-950 w-fit '>
            <Link to={"/artists/"+info.id}className='text-[#F5C542] hover:text-amber-50  '>view details</Link>
                    </div>
                    
            </div>
            </div>)
            )}
         </div>
      )
}
export default Theprogram