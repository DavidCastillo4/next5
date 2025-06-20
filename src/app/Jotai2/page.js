'use client';
import { useAtom } from 'jotai';
import { countAtom } from '@/lib/state/global.js';

export default function Jotai2() {
 let [cnt, setCnt] = useAtom(countAtom);

 return <>
  <button className='bg-gray-300' onClick={() => setCnt(i => i + 1)}>globalAtom {cnt}</button>
 </>
}
