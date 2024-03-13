import { NavLink } from "react-router-dom";

const LINKS = [
  { path: 'search', name: 'All' },
  { path: 'news', name: 'News' },
  { path: 'image', name: 'Image' },
  { path: 'video', name: 'Video' },
]

function Links() {
  return (
    <nav className="w-full">
      <ul className="flex justify-center items-center flex-wrap">
        {
          LINKS.map((link, index) => 
            <li key={ index } className="mt-4 mx-4 mb-2">
              <NavLink 
                to={ link.path } 
                className={({ isActive }) =>
                  isActive ? 'pb-2 dark:text-blue-300 text-blue-600 border-b-2 border-blue-700' : 'pb-2'
                }
              >
                { link.name }
              </NavLink>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Links;