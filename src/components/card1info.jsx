function Card1info({ artist }) {
  return (
    <div className="p-6">
      <img className="w-48 rounded-2xl" src={artist.img} alt={artist.name} />
      <p className="text-white text-3xl font-bold mt-4">{artist.name}</p>
      <p className="text-[#F5C542] text-xl mt-2">{artist.time}</p>
      <p className="text-[#F5C542] mt-1">{artist.place}</p>
    </div>
  )
}

export default Card1info