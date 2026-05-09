function Card1info({ artist }) {
  return (
        

    <div className="p-6 flex bg-[#070c1b] m-7 rounded-2xl ">
         <img className="w-70 mr-10 rounded-2xl" src={artist.img} alt={artist.img} />

         <div>
      <p className=" text-amber-100 font-serif text-3xl font-bold mt-4">{artist.name}</p>
      <p className="text-[#F5C542] text-xl mt-2">{artist.time}</p>
      <p className="text-[#F5C542] text-xl mt-2">{artist.place}</p>
      <p className="text-[#F5C542] text-xl mt-2">{artist.songs}</p>
      <p className="text-[#F5C542] text-xl mt-2">{artist.Style}</p>\
      <p className="text-[#F5C542] text-xl mt-2">{artist.biography}</p>
              </div>
     
    </div>
  )
}
export default Card1info