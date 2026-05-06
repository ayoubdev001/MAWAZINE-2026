import data from '../data/data1'

export function Theprogram (){
      return ( 
        <div className='bg-[#F5C542] pt-15 pb-15 flex justify-evenly rounded-3xl p-6'>
             {data.map((info) =>
              <div key={info.id} className='bg-[#0B132B] w-fit rounded-4xl '> 
            <button className='ml-56 mt-4 cursor-pointer'>📌</button>
            <img className='w-3xs p-3 rounded-4xl' src={info.img} alt="profpic" />
            <div className='text-[#F5C542] font-bold font-serif p-7 '>
            <h2 >{info.name}</h2>
            <h2 >{info.time}</h2>
            <p>{info.place}</p>
            </div>
            </div>
            )}
         </div>
      )
}
export default Theprogram