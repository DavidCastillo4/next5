import { getData } from '@/lib/data/db';

export default async function Client() {
 const res = await getData();
 console.log(res);
 return (<div>Client</div>);
}

/*

*/