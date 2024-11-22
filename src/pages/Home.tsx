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
					<div className='mt-32 p-8 text-white w-full max-w-md text-center'>
						<p className='pt-4 pb-6 text-sm font-thin'>Non-fungible tokens</p>

						<p className='text-5xl font-bold flex items-center'>
							A new NFT{" "}
							<span className='flex items-center'>
								<img src={Vector} className='h-[1.25em] ml-2' alt='' />
							</span>
						</p>

						<h1 className='text-5xl font-bold flex items-center pl-8'>
							<img src={Frame} className='h-[1em] mr-2' alt='Frame Icon' />
							Experience
						</h1>

						<p className='pt-6 text-sm'>Discover, collect & sell.</p>

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
		</div>
	);
};

export default Home;
