import Link from 'next/link';

export default function Footer() {
  return (
  <>

  <footer className="flex justify-center p-3 md:p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
    <section>
      <p>Privacy Polity | Terms of Use</p>
      <p>A product from <Link href="https://tnadvancement.pages.dev/" target="_blank">TN ADVANCEMENT</Link></p>
      <p>&#169; 2025 TN Vision Project. All rights reserved</p>
    </section>
  </footer>

  </>
  );
}
