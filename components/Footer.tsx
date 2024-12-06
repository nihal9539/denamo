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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
       

          {/* Useful Links 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">More Links</h2>
            <ul className="space-y-2">
              <li><Link href="/project" className="hover:text-white">Our Project</Link></li>
              <li><Link href="/service" className="hover:text-white">Service</Link></li>
           
            </ul>
          </div>

          {/* Office Address and Phone Number */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Office Address</h2>
            <p className="mb-4">H47V+8J3, Ar Rawdah, Jeddah 23433, Saudi Arabia</p>
            
            <h2 className="text-xl font-semibold mb-4">Phone Number</h2>
            <p>+121 551 579 266</p>
            {/* <p>+86 155 596 1658</p> */}
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
          <p>&copy; 2024 Delano | All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
