import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-emerald-400 text-white py-4 mb-8'>
            <nav className='max-w-2xl mx-auto px-4'>
                <ul className='flex gap-4'>
                    <li>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/mdx-page'>
                            <a>MDX Page</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
