import Navbar from "../components/Navbar";
import Circles from "../assets/Circles.png";
import SearchWithDropdown from "../components/SearchWithDropdown";
import Vector from "../assets/Vector.png";
import Frame from "../assets/Frame.png";
import Squares from "../assets/Squares.png";
import RitterSport from "../assets/RitterSport.png";
import Nike from "../assets/Nike.png";
import Adidas from "../assets/Adidas.png";
import LatestAuction from "../components/LatestAuction";
import RightImage from "../assets/RightImage.png";
import TripleSection from "../components/TripleSection";
import LeftImage from "../assets/LeftImage.png";
import PopularAuction from "../components/PopularAuction";
import SectionWithIcons from "../components/SectionWithIcons";
import Footer from "../components/Footer";


const Home = () => {
	return (
		<div>
			<div className='fixed top-0 left-0 w-full z-20'>
				<Navbar />
			</div>

			<div className='bg-[#090921ff]'>
				<div
					className='min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center'
					style={{
						backgroundImage: `url(${Squares}), url(${Circles})`,
						backgroundPosition: "center, center",
						backgroundSize: "contain, cover",
						backgroundRepeat: "no-repeat, no-repeat",
					}}
				>
					<div className='mt-32 p-8  w-full max-w-md text-center'>
						<p className='pt-4 pb-6 text-sm font-thin text-gray-500'>
							NON-FUNGIBLE TOKENS
						</p>

						<p className='text-6xl font-bold flex items-center text-white'>
							A new NFT{" "}
							<span className='flex items-center'>
								<img src={Vector} className='h-[1.25em] ml-2' alt='' />
							</span>
						</p>

						<h1 className='text-6xl font-bold flex items-center pl-8 text-white'>
							<img src={Frame} className='h-[1em] mr-2' alt='Frame Icon' />
							Experience
						</h1>

						<p className='pt-6 text-sm text-gray-400'>
							Discover, collect & sell.
						</p>

						<div className='flex items-center justify-center bg-gray-100 my-4'>
							<SearchWithDropdown />
						</div>

						<div className='flex justify-between items-center mt-36'>
							<img src={RitterSport} className='w-16' alt='Image 1' />
							<img src={Nike} className='w-16' alt='Image 2' />
							<img src={RitterSport} className='w-16' alt='Image 3' />
							<img src={Adidas} className='w-16' alt='Image 4' />
						</div>
					</div>
				</div>
			</div>

			<LatestAuction />

			<div className='bg-[#090921ff]'>
				<div className='flex items-center justify-center '>
					<div className='flex flex-col md:flex-row items-center  shadow-lg rounded-lg p-6 max-w-4xl'>
						{/* Text Section */}
						<div className='md:w-1/2 text-center md:text-left mb-4 md:mb-0'>
							<p className='pt-6 text-sm text-gray-400 font-thin'>OVERLINE</p>
							<h2 className='text-5xl font-bold mb-2 text-white'>
								Sapien ipsum scelerisque convallis fusce
							</h2>
							<p className=' text-gray-400'>
								Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
								pulvinar ultricies dolor feugiat aliquam commodo.
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
								src={RightImage}
								alt='Placeholder'
								className='rounded-lg max-w-full'
							/>
						</div>
					</div>
				</div>
			</div>

			<TripleSection />

			<div className='bg-[#090921ff] pt-24'>
				<div className='flex items-center justify-center'>
					<div className='flex flex-col md:flex-row items-center shadow-lg rounded-lg p-6 max-w-4xl'>
						{/* Image Section */}
						<div className='md:w-1/2 flex justify-center mb-4 md:mb-0'>
							<img
								src={LeftImage}
								alt='Placeholder'
								className='rounded-lg max-w-full'
							/>
						</div>

						{/* Text Section */}
						<div className='md:w-1/2 text-center md:text-left'>
							<p className='pt-6 text-sm text-gray-400 font-thin'>OVERLINE</p>
							<h2 className='text-5xl font-bold mb-2 text-white'>
								Habitant tristique aliquam in vel scelerisque
							</h2>
							<p className='text-gray-400 mt-4'>
								Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
								pulvinar ultricies dolor feugiat aliquam commodo.
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
					</div>
				</div>
			</div>
			<div className='h-[1px] bg-gray-400 w-full'></div>

			<PopularAuction />

			<SectionWithIcons />

		

			<Footer />
		</div>
	);
};

export default Home;
