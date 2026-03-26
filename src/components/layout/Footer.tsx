import { Link } from "@/i18n/routing";

export default function Footer() {
  return (
    <footer className="bg-playceInk text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6">
        <h2 className="text-2xl font-heading font-bold text-playceCream">
          PLAYce at Home
        </h2>
        
        <p className="max-w-md text-gray-300 text-sm">
          A digital companion to Beloit Public Library’s Discovery PLAYce. Explore, play, and learn together.
        </p>

        <div className="flex space-x-6 text-sm text-gray-400">
          <Link href="/about" className="hover:text-playceCoral transition-colors">
            About
          </Link>
          <a href="#" className="hover:text-playceCoral transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-playceCoral transition-colors">
            Contact
          </a>
        </div>

        <p className="text-xs text-gray-500 pt-6">
          © {new Date().getFullYear()} Beloit Public Library. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
