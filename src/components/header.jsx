import imagelogo from '../img/logo.png';
import { Link } from 'react-router-dom'

export function Header() {
   return(
     <header className=' flex justify-between'>
        <img className='imagelogo m-5 w-30' src={imagelogo} alt="logo" />
        <div className=''>
         <nav className='text-[#F5C542] cursorpo m-10 flex gap-15 '>
             <Link to="">Home</Link>
             <Link to="/theprogram">PROGRAM</Link>
             <Link to="/artiste">ARTISTE</Link>
             <Link to="/planning">PLANNING</Link>
             <Link to="/passport">PASSPORT</Link>
         </nav>
        </div>
     </header>

   );
}
export default Header