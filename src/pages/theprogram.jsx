import data from '../data/data1'
import { Link } from 'react-router-dom'

function Theprogram (){
      return ( 

        <div className='bg-[#F5C542] pt-8 pb-5  flex justify-evenly rounded-3xl p-6'>
             {data.map((info) => (<div key={info.id} className='bg-[#0B132B] rounded-4xl '> 

                  {/* this will be used in passport, local storege for it*/}
                  <div className=' bg-[#F5C542] p-2 m-3 rounded-2xl w-fit '>
                   <button className=' cursor-pointer font-semibold'>save to passport</button>
                   </div>

            <img className='w-3xs p-3 rounded-4xl' src={info.img} alt="profpic" />
            <div className='text-[#F5C542] font-bold font-serif p-7 '>
            <h2 >{info.name}</h2>
            <h2 >{info.time}</h2>
            <p>{info.place}</p>

           
            <div className=' bg-[#F5C542] p-2 rounded-2xl w-fit '>
            <Link to={"/artists/"+info.id}className='text-[#0B132B] '>view details</Link>
                    </div>

            </div>
            </div>)
            )}
         </div>
      )
}
export default Theprogram