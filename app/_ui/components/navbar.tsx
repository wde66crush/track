import Link from 'next/link'


const LINKS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/projects', label: 'Projects' },
  { href: '/targets', label: 'Targets' },
  { href: '/account', label: 'Account' },
]
  

export default function navbar() {
  
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <p className="font-semibold text-xl tracking-tight">Track</p>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path
              d="M0 0h20v20H0V0zm2 4h16v2H2V4zm0 5h16v2H2V9zm0
              5h16v2H2v-2z"
            />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        {LINKS.map(({ href, label }) => (
          <Link href={href} key={href}>
            <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              {label}
            </p>
          </Link>
        ))}
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded
            text-white border-white hover:border-transparent hover:text-teal-500
            hover:bg-white mt-4 lg:mt-0">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
  
    
  
  