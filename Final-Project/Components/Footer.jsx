import Link from 'next/link';


const Footer = () => {
  console.log('Footer rendered');
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-between">
        <div className="flex justify-center space-x-4 mb-auto">
          <Link href="/Legal/Policy" className="text-sm">
            Privacy Policy
          </Link>
          <Link href="/Legal/Terms" className="text-sm">
            Term of Service
          </Link>
          <Link href="/Legal/Contact" className="text-sm">
            Contact
          </Link>
        </div>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Immigrant Assistance</p>
      </div>
    </footer>
  );
};

export default Footer;
