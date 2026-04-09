import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-black/10 px-[110px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
              <Image src="/logo.png" alt="Duoph" width={100} height={100} />
            </Link>
            <p className="text-black/50 text-sm mt-2 max-w-xs">
              Future-driven digital agency building modern solutions for growing brands.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-black/60">
            <Link href="#about" className="hover:text-black transition-colors">About</Link>
            <Link href="#services" className="hover:text-black transition-colors">Services</Link>
            <Link href="#contact" className="hover:text-black transition-colors">Contact</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
          </div>

          <div className="text-black/50 text-sm">
            © {new Date().getFullYear()} Duoph. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
