
export default function Footer() {
  return (
    <footer className="bg-[#1F2937] w-full pb-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-800">
          <div>
            <h4 className="text-white font-semibold mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Explore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contributor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Leader board</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help & Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">WHAT WE DO</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Connect Open Source</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Make Contribution</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">General Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">TALK TO US</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">lazydev@contact.xyz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">+84 123456789</a></li>
              <li>
                <div className="text-gray-400 mb-1">Contact Us</div>
                <div className="flex gap-2 grid-cols-3">
                  <a href="#" className="text-blue-600 hover:text-white">Facebook</a>
                  <a href="#" className="text-blue-600 hover:text-white">LinkedIn</a>
                  <a href="#" className="text-blue-600 hover:text-white">Twitter</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-800">
          © 2025 Lazy dev. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
