import React from "react";
import { ShoppingCart, Search, Menu } from "lucide-react";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 w-full border-b ">
           

            <div className=" flex items-center justify-between p-2 px-4 bg-white">
                {/* Left - Logo and Menu */}
                <div className="flex items-center space-x-3">
                    <Menu size={20} className="md:hidden cursor-pointer" />
                    <span className="text-lg font-semibold">PON CRACKERS</span>
                </div>

                {/* Center - Search bar */}
                <div className="flex w-1/2 border rounded overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-2 outline-none"
                    />
                    <button className="bg-gray-900 text-white px-4 flex items-center">
                        <Search size={16} className="mr-1" /> Search
                    </button>
                </div>

                {/* Right - Cart Button */}
                <button className="flex items-center border px-4 py-2 rounded">
                    <ShoppingCart className="mr-2" /> Cart
                </button>
            </div>

            {/* Bottom Navigation Menu */}
            <div className="bg-white text-sm flex justify-center space-x-6 py-2 font-medium">
                <a href="#" className="hover:text-red-600">HOME</a>
                <a href="#" className="hover:text-red-600">TYPES</a>
                <a href="#" className="hover:text-red-600">PRODUCTS</a>
                <a href="#" className="hover:text-red-600">ABOUT US</a>
                <a href="#" className="hover:text-red-600">GALLERY</a>
                <a href="#" className="hover:text-red-600">VIDEOS</a>
                <a href="#" className="hover:text-red-600">TESTIMONIALS</a>
                <a href="#" className="hover:text-red-600">CONTACT US</a>
            </div>
        </div>
    );
};

export default Navbar;
