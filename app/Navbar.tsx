import Link from 'next/link';
import styles from './page.module.css'

export default function Navbar(){

    return(
        <nav className='bg-gray-800'>
            <div className='py-2'>
                <Link href='/' className='px-3 hover:text-slate-300 transition-all'>Home</Link>
            </div>
        </nav>
    );
}