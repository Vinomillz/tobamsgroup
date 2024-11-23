import { FaRegUserCircle } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import ArtWorksIcon from "../assets/ArtworksIcon.png";
import { MdOutlinePalette } from "react-icons/md";
import Users from "../assets/Users.png";
import ScrollingETH from "./ScrollingETH";

const SectionWithIcons = () => {
	return (
		<div className='bg-[#090921ff] pt-16 flex justify-center items-center flex-col'>
			{/* First Section with Icons */}
			<div className='flex flex-col items-center space-y-8 p-6'>
				{/* Icon Section */}
				<div className='flex justify-between items-center w-full space-x-10'>
					<div className='flex flex-col items-center'>
						<div className='mt-4'>
							<FaRegUserCircle className='text-white text-2xl' />
						</div>
						<h1 className='text-4xl font-bold text-white mt-2'>300K</h1>
						<p className='text-sm text-gray-400 mt-2'>Users Active</p>
					</div>
					<div className='flex flex-col items-center'>
						<div className='mt-4'>
							<img src={ArtWorksIcon} className='h-[24px]' alt='' />
						</div>
						<h1 className='text-4xl font-bold text-white mt-2'>52.5K</h1>
						<p className='text-sm text-gray-400 mt-2'>Artworks</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='mt-4'>
							<MdOutlinePalette className='text-white text-2xl' />
						</div>
						<h1 className='text-4xl font-bold text-white mt-2'>17.5K</h1>
						<p className='text-sm text-gray-400 mt-2'>Artists</p>
					</div>
					<div className='flex flex-col items-center'>
						<div className='mt-4'>
							<FaWallet className='text-white text-2xl' />
						</div>
						<h1 className='text-4xl font-bold text-white mt-2'>35.58</h1>
						<p className='text-sm text-gray-400 mt-2'>ETH spent</p>
					</div>
				</div>
			</div>

			{/* Folder-like Div */}
			<div className='mt-16 w-full'>
				<div className='bg-[#090921ff]'>
					<div className='flex items-center justify-center'>
						<div className='flex flex-col md:flex-row items-center shadow-lg rounded-lg p-6 max-w-4xl'>
							{/* Text Section */}
							<div className='md:w-1/2 text-center md:text-left mb-4 md:mb-0'>
								<p className='pt-6 text-sm text-gray-400 font-thin'>OVERLINE</p>
								<h2 className='text-5xl font-bold mb-2 text-white'>
									Sapien ipsum scelerisque convallis fusce
								</h2>
								<p className='text-gray-400'>
									Ut amet vulputate faucibus vitae semper eget auctor. Diam
									tempor pulvinar ultricies dolor feugiat aliquam commodo.
								</p>
								<div className='hidden md:flex space-x-4 mt-4'>
									<button className=' hover:bg-blue-600 text-white font-semibold text-sm py-2 px-4 border rounded'>
										Get Started
									</button>
									<button className='bg-[#2826c7] hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded'>
										Learn more
									</button>
								</div>
							</div>

							{/* Image Section */}
							<div className='md:w-1/2 flex justify-center'>
								<img
									src={Users}
									alt='Placeholder'
									className='rounded-lg max-w-full'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ScrollingETH />
		</div>
	);
};

export default SectionWithIcons;
