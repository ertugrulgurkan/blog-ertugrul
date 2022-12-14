import Link from "next/link";
import Image from "next/image";

export default function Header({ title, keywords, description, children }) {
  return (
    <header className="sticky top-0 z-20 w-full px-2 py-22 bg-gray-900 text-gray-100 sm:px-4 shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <span className="ml-3 text-xl">Ertuğrul Gürkan</span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/blog">
            <a className="mx-5 cursor-pointer  hover:text-indigo-300">Blog</a>
          </Link>
          <Link href="/about">
            <a className="mx-5 cursor-pointer  hover:text-indigo-300">Hakkımda</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Ertuğrul Gürkan",
  keywords: "Blog, Kişisel Blog",
  description: "Bir yazılım ve teknoloji meraklısı",
};
