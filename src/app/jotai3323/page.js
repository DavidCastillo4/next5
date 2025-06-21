'use client';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { countAtom } from '@/lib/state/global';
import css from './style.module.css';

export default function Jotai() {
 let [local, setLocal] = useState(0);
 let [global, setGlobal] = useAtom(countAtom);

 return <>
  <button className={css.btn}
   onClick={() => setLocal(i => i + 1)}>useState {local}
  </button>
  <br />
  <button className={css.btn}
   onClick={() => setGlobal(i => i + 1)}>Jotai {global}
  </button>
 </>
}
