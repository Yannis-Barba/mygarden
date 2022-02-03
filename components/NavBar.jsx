import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Link from 'next/link';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        <div id="navBar" className="bg-primary h-16 flex items-center pl-4">
                <MenuIcon sx={{color: "#00477A", fontSize: 50}} onClick={() => setShowMenu(!showMenu)} className='cursor-pointer'/>
            
        </div>
        {showMenu ?
                <div id="menu" className=' absolute z-50 top-0 flex flex-col gap-4 h-full w-full bg-secondary  text-primary text-4xl'>
                    <CloseIcon sx={{color: "#F8CA95", fontSize: 50}} onClick={() => setShowMenu(!showMenu)} className='cursor-pointer ml-4 mt-4'/>
                    <div className='flex flex-col gap-4 pl-8  justify-center'>
                        <Link passHref href="/">
                            <h2 className="cursor-pointer">Home</h2>
                        </Link>
                        <Link passHref href="/fiches">
                            <h2 className="cursor-pointer">Fiches</h2>
                        </Link>
                        <Link passHref href="planning">
                            <h2 className="cursor-pointer">Planning</h2>
                        </Link>
                        <Link passHref href="data">
                            <h2 className="cursor-pointer">Données</h2>
                        </Link>
                        <Link passHref href="ressources">
                            <h2 className="cursor-pointer">Ressources</h2>
                        </Link>
                        <Link passHref href="plan">
                            <h2 className="cursor-pointer">Plan</h2>
                        </Link>
                        <Link passHref href="recoltes">
                            <h2 className="cursor-pointer">Récoltes</h2>
                        </Link>
                    </div>
                </div> 
                : ""}
        </>
    );
}

export default NavBar;