import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cover relative bg-center bg-no-repeat text-white py-12"
      style={{ backgroundImage: "url('/footer.jpg')" }}  // Ensure the image URL is correct
    >
      {/* Darker black overlay for better text visibility */}
      <div className="absolute inset-0 z-0 bg-black opacity-80"></div>

      {/* Footer content with increased z-index */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About Company */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Company</h2>
            <p className="mb-4">A small business can be better than a big business because of agility and adaptability due to their size and scale.</p>
            <p className="font-semibold mb-2">Since 2000</p>
            <p className="uppercase mb-1">WE ARE AVAILABLE</p>
            <p><span>Mon-Sat:</span> 10:00am to 07:30pm</p>
          </div>

          {/* Useful Links 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">What We Do</Link></li>
              <li><Link href="#" className="hover:text-white">News & Article</Link></li>
              <li><Link href="#" className="hover:text-white">Success Story</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ&apos;s</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">More Links</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Our Team</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of use</Link></li>
            </ul>
          </div>

          {/* Office Address and Phone Number */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Office Address</h2>
            <p className="mb-4">Losangle, Street Road 24, New York, USA - 67452</p>
            
            <h2 className="text-xl font-semibold mb-4">Phone Number</h2>
            <p>+121 551 579 266</p>
            <p>+86 155 596 1658</p>
          </div>

          {/* Email and Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Email Address</h2>
            <p className="mb-1">Get in Touch !</p>
            <p className="mb-4">support@gmail.com</p>
            
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-white"><Linkedin size={20} /></Link>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Denamo | All rights reserved</p>
          <div className="mt-4 md:mt-0 text-sm flex space-x-4">
            <Link href="#" className="hover:text-white">Terms & Condition</Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
