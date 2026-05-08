import imagelogo from '../img/logo.png';
import { Link } from 'react-router-dom'

function Header() {
   return(
     <header className=' flex justify-between'>
        <img className='imagelogo m-5 w-30' src={imagelogo} alt="logo" />
        <div className=''>
         <nav className='cursorpo m-10 flex gap-15 '>
             <Link to=""className='text-[#F5C542] hover:text-amber-50 '>Home</Link>
             <Link to="/theprogram" className='text-[#F5C542] hover:text-amber-50 '>PROGRAM</Link>
             <Link to="/artists" className='text-[#F5C542] hover:text-amber-50'>ARTISTE</Link>
             <Link to="/planning"className='text-[#F5C542] hover:text-amber-50 '>PLANNING</Link>
             <Link to="/passport"className='text-[#F5C542] hover:text-amber-50 '>PASSPORT</Link>
         </nav>
        </div>
     </header>

   );
}
export default Header