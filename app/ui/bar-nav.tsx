import Link from 'next/link';

const links = [
  { name: 'Products', href: '/home' },
  { name: 'Use cases', href: '/' },
  { name: 'Support', href: '/' },
  { name: 'Documents', href: '/' },
  { name: 'About us', href: '/' },
];

export default function BarNav() {
  return (
    <>

      <div className="sm:flex justify-around hidden m-2">
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href} className="p-3">
              {link.name}
            </Link>
          );
        })}
      </div>

    </>
  );
}
