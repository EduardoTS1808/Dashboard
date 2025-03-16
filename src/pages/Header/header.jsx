  import { useState } from "react"
  import {Link} from "react-router-dom"
  import logo from '../../assets/business-finance-corporate-26-svgrepo-com.svg'
import Main from "../Main/main"
import Tasks from "../Tasks/tasks"

  const menuItems = [
    {name: "Dashboard", icon:<div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
      <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      </svg>
    </div>  , path: "/Dashboard"},
    {name: "Novo+", icon:   <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
      <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
      </svg>
    </div> ,  path: "/Novo"},
    {name: "Histórico",  icon: <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
      <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
      </svg>
    </div>,   path: "/Historico"},
  
   
  ]

function Header() {

  const [isOpen, setIsOpen] = useState(false)
  return ( 
    <>
 
    <div>
 
      <div className="bg-white top-0 h-16 w-full    m-0 p-0  fixed z-10 flex items-center justify-between ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 ml-1.5 bg-neutral-200 text-black rounded-md"
      >
         <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button> 
      <h2 className="text-2xl font-extrabold ">Dashboard</h2>
      <img src={logo} className="w-12" alt="" /></div>
     
      {isOpen && (
        <aside className="bg-white fixed m-0  w-64 shadow-md px-4" >
  
        <nav>
          {menuItems.map((item) => (
          
  
  
  
            <Link  key={item.name} to={item.path} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-400 "> {item.icon}
             
                <div className="flex-auto">
                  <a href="#" className="block font-semibold group-hover:text-indigo-600 text-gray-900">
              {item.name}
                  
                  </a>
                </div>
              </Link>
              ))}
  </nav>
      </aside>
      )}
    </div>
    
    <Main/>
    <Tasks/>
    </>
  )
}

export default Header