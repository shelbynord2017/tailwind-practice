import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 text-center py-4 px-6">
            <p>&copy; 2026 DevProfile. All rights reserved.</p>
            <div className="flex justify-center my-2 gap-4 md:gap-6">
                <a href="#" className="md:text-lg hover:text-white transition-colors duration-200"><CiFacebook /></a>
                <a href="#" className="md:text-lg hover:text-white transition-colors duration-200"><FaInstagram /></a>
                <a href="#" className="md:text-lg hover:text-white transition-colors duration-200"><CiTwitter /></a>
            </div>
        </footer>
    )
}

export default Footer