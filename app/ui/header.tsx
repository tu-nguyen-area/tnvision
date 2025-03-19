import Link from 'next/link';

export default function Header() {
  return (
  <>

  <header>
    <section className="flex justify-between p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <Link href="/">
        TN VISION
      </Link>
      <p>tu-nguyen@tu-nguyen.com</p>
    </section>
  </header>

  </>
  );
}
