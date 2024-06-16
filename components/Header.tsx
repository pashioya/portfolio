import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full">
      <nav className="flex flex-row justify-between w-full px-20 py-8">
        <h1 className="text-lg font-bold ml-2">Paul Ashioya</h1>
        <div className="flex items-center">
          <Image src="/images/profile.png" alt="logo" width={40} height={40} />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
