import '@/styles/globals.css';
import { Navigation } from '@/Comps/Nav/navigation';

export const metadata = {
 title: "Url Title",
 description: "Generated by create next app",
 icons: { icon: "/green.ico" }
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body>
    <header className="">
     <p className="text-3xl font-bold text-red-600">Welcome to my site!</p>
     <Navigation />
    </header>
    {children}
    <footer className="bg-amber-600 text-white text-center">
     <p>Footer</p>
    </footer>
   </body>
  </html>
 );
}
