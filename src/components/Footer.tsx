import React from "react";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";
import logo from "../assets/FooterLogo.png";
import { FaGithub } from "react-icons/fa6";

const Footer: React.FC = () => {
	return (
		<footer className='bg-black text-white py-10'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-[80%] border border-gray-700 rounded-md p-8'>
				{/* Left Section - Logo and Links */}
				<div className='flex flex-col border-r border-gray-700 pr-6'>
					<div className='flex items-center space-x-2'>
						{/* Logo */}
						<div className=''>
							<div className='text-2xl font-bold'>
								<a href='/'>
									<img src={logo} alt='' />
								</a>
							</div>
						</div>
					</div>
					<div className='flex flex-col mt-4 space-y-1 text-sm text-gray-400'>
						<a href='#' className='hover:text-white'>
							Support
						</a>
						<a href='#' className='hover:text-white'>
							Term of service
						</a>
						<a href='#' className='hover:text-white'>
							License
						</a>
					</div>
				</div>

				{/* Middle Section - Menu and Social Icons */}
				<div className='flex flex-col items-center md:items-start border-r border-gray-700 px-6'>
					<div className='flex flex-col space-y-2 text-sm'>
						<a href='/' className='hover:text-white'>
							Auctions
						</a>
						<a href='/' className='hover:text-white'>
							Roadmap
						</a>
						<a href='/' className='hover:text-white'>
							Discover
						</a>
						<a href='/' className='hover:text-white'>
							Community
						</a>
					</div>
					{/* Button */}
					<button className='mt-4 px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-500'>
						My account
					</button>

					{/* Social Media Icons */}
					<div className='flex space-x-4 mt-6 text-gray-400'>
						<a href='https://github.com/Vinomillz' className='hover:text-white'>
							<FaGithub />
						</a>
						<a href='#' className='hover:text-white'>
							<FaFacebookF />
						</a>
						<a
							href='https://www.linkedin.com/in/vincent-umezinwa-772678249/'
							className='hover:text-white'
						>
							<FaLinkedinIn />
						</a>
						<a href='https://x.com/Vinomillz_' className='hover:text-white'>
							<FaTwitter />
						</a>
						<a href='#' className='hover:text-white'>
							<FaInstagram />
						</a>
					</div>
				</div>

				{/* Right Section - Newsletter */}
				<div className='flex flex-col items-center md:items-start pl-6'>
					<p className='text-gray-400 text-sm'>
						Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
						velit, sed egestas in. Id nam semper dolor tellus vulputate eget
						turpis.
					</p>

					{/* Newsletter Form */}
					<form className='mt-6 flex items-center w-full max-w-sm bg-white rounded-md overflow-hidden shadow-md'>
						<input
							type='text'
							placeholder='Newsletter'
							className='flex-1 px-4 py-2 text-sm text-gray-700 focus:outline-none'
						/>
						<button
							type='submit'
							className='px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500'
						>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
