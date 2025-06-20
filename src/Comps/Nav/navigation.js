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
   <Link className='globalPink' href='/Contact' >Contact</Link>
   <Link className='bg-amber-500' href='/Jotai' >Jotai</Link>
   <Link className='bg-green-500' href='/Jotai2' >Jotai2</Link>
   <Link className='bg-slate-300' href='/Client' >Client</Link>
   <Link className={css.moduleYellow} href='/Dashboard' >Dashboard</Link>
   <Link className={css.moduleRed} href='/Product' >Product</Link>
   <Link className='globalBlue' href='/Login' >Login</Link>
   <Link className='bg-gray-200' href='/Register' >Register</Link>
  </nav>
 )
};