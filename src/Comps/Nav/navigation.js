/*navigation.js*/
'use client'
import Link from 'next/link'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import css from './style.module.css';

export let Navigation = () => {
 let pathname = usePathname();
 useEffect(() => { console.log(pathname) }, [pathname]);
 return (
  <nav>
   <Link className={css.moduleGreen} href='/' >Home</Link>
   <Link className='globalPink' href='/contact2' >Contact</Link>
   <Link className='bg-amber-500' href='/jotai333' >Jotai</Link>
   <Link className='bg-green-500' href='/jotai222' >Jotai2</Link>
   <Link className='bg-slate-300' href='/client' >Client</Link>
   <Link className={css.moduleYellow} href='/dashboard44' >Dashboard</Link>
   <Link className={css.moduleRed} href='/product2' >Product</Link>
   <Link className='globalBlue' href='/login2' >Login</Link>
   <Link className='bg-gray-200' href='/register2' >Register</Link>
  </nav>
 )
};