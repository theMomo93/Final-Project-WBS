import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-between">
        <div className="flex justify-center space-x-4 mb-auto">
          <Link href="/privacy-policy" className="text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm">
            Term of Service
          </Link>
          <Link href="/contact" className="text-sm">
            Contact
          </Link>
        </div>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Immigrant Assistance</p>
      </div>
    </footer>
  );
};

export default Footer;
