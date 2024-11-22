import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className='w-full bg-[#090921ff] text-white py-4 px-6 flex items-center justify-between'>
			{/* Logo */}
			<div className='text-2xl font-bold'>
				<a href='/'>
					<img src={logo} alt='' />
				</a>
			</div>

			{/* Desktop Navigation Links */}
			<ul className='hidden md:flex space-x-8 text-sm'>
				<li>
					<a href='/' className='hover:text-gray-300'>
						Auctions
					</a>
				</li>
				<li>
					<a href='/' className='hover:text-gray-300'>
						Roadmap
					</a>
				</li>
				<li>
					<a href='/' className='hover:text-gray-300'>
						Discover
					</a>
				</li>
				<li>
					<a href='/' className='hover:text-gray-300'>
						Community
					</a>
				</li>
			</ul>

			{/* Buttons (Desktop View) */}
			<div className='hidden md:flex space-x-4'>
				<button className=' hover:bg-blue-600 text-white font-semibold text-sm py-2 px-4 border rounded'>
					Contact
				</button>
				<button className='bg-[#2826c7] hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded'>
					My Account
				</button>
			</div>

			{/* Mobile Menu Toggle */}
			<div className='md:hidden'>
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className='text-2xl focus:outline-none'
				>
					☰
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className='absolute top-16 left-0 w-full bg-gray-800 text-center md:hidden'>
					<ul className='space-y-4 text-lg py-4'>
						<li>
							<a
								href='#home'
								className='hover:text-gray-300 block'
								onClick={() => setIsMenuOpen(false)}
							>
								Auctions
							</a>
						</li>
						<li>
							<a
								href='#about'
								className='hover:text-gray-300 block'
								onClick={() => setIsMenuOpen(false)}
							>
								Roadmap
							</a>
						</li>
						<li>
							<a
								href='#services'
								className='hover:text-gray-300 block'
								onClick={() => setIsMenuOpen(false)}
							>
								Discover
							</a>
						</li>
						<li>
							<a
								href='#contact'
								className='hover:text-gray-300 block'
								onClick={() => setIsMenuOpen(false)}
							>
								Community
							</a>
						</li>
					</ul>
					<div className='space-y-4 py-4'>
						<button
							className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
							onClick={() => setIsMenuOpen(false)}
						>
							Login
						</button>
						<button
							className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded'
							onClick={() => setIsMenuOpen(false)}
						>
							Sign Up
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
