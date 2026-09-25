import { useState } from "react"

function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white">DevProfile</span>
                <div className="hidden md:flex gap-4">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
                </div>
                <button 
                    className={`md:hidden text-2xl transition-colors duration-200 ${isMenuOpen ? 'text-white' : 'text-gray-300 hover:text-white'}`} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>
            {isMenuOpen && (
                <div className="flex flex-col gap-2 mt-4 md:hidden">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar