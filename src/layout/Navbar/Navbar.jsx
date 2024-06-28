import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-[10vh] flex justify-between items-center w-full'>
            <div>
                <img className='h-[50px] w-[148px]' src='images/Group 324.svg' alt='logo'></img>
            </div>
            <div className='flex items-center gap-16'>
                <ul className='font_Heebo flex items-center flex-row gap-4 text-[#000000]'>
                    <li>
                        <a href='#'>Challenges</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Technology</a>
                    </li>
                    <li>
                        <a href='#'>Features</a>
                    </li>
                    <li>
                        <a href='#'>Platform</a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className='flex items-center' >
                            Products
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" >
                            <ul >
                                <li>
                                    <a href="#" >Dashboard</a>
                                </li>
                            </ul>
                            <div >
                                <a href="#" >Sign out</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>
                <div className='font_Heebo flex gap-5'>
                    <button className='w-40 h-10 text-[#9F77EB] border-solid border-[1px] px-5 py-1 rounded border-[#9F77EB] font-medium '>Free Trial</button>
                    <button className='w-40 h-10 text-[#FFFFFF] bg-[#9F77EB] border-solid border-[1px] px-5 py-1 rounded text-sm'>Request Demo</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar