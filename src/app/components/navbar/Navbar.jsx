import React from 'react';
 
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='cotainer'>
           <ul>
            <li>
            <Link href="/">HomePage</Link>
            <Link href="/blogpage">BlogPage</Link>
            
            <Link href="/postpage">PostPage</Link>
            </li>
           </ul>
        </div>
    );
};

export default Navbar;