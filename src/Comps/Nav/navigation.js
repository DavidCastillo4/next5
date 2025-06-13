'use client'
import Link from 'next/link'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import s from  './style.module.css';

export let Navigation = () => {
 let pathname = usePathname();
 useEffect(() => { console.log(pathname) }, [pathname]);
 return (
  <nav>
   <Link className={s.isActive} href='/' >Home</Link>
   <Link className='notActive' href='/' >Home</Link>
   <Link className={s.notActive3} href='/' >Home</Link>
   {/* <Link className={notActive} href='/Contact' >Contact</Link>
   <Link className={isActive} href='/Product' >Product</Link> */}
  </nav>
 )
};