import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ITEM1 from "../assets/ITEM1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/Image3.png";
import image0 from "../assets/Image0.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/image5.png";
import Frame77 from "../assets/Frame77.png";
import Frame67 from "../assets/Frame67.png";
import Frame68 from "../assets/Frame78.png";
type AuctionData = {
	image: string;
	Name: string;
	timeLeft: string;
	price: number;
	likes: number;
	description: string;
};

// Example auction data
const auctionData: Record<number, AuctionData> = {
	1: {
		image: image0,
		Name: "Tristique diam a, enim, . Viverra etiam",
		timeLeft: "12:30:00",
		price: 2.55,
		likes: 120,
		description: "Detailed description of the auction item...",
	},
	2: {
		image: ITEM1,
		Name: "Vulputate felis purus viverra morbi",
		timeLeft: "08:15:00",
		price: 3.19,
		likes: 75,
		description: "Detailed description of the auction item...",
	},
	3: {
		image: image2,
		Name: "Vulputate felis purus viverra morbi",
		timeLeft: "08:15:00",
		price: 3.19,
		likes: 75,
		description: "Detailed description of the auction item...",
	},
	4: {
		image: image3,
		Name: "Vulputate felis purus viverra morbi",
		timeLeft: "08:15:00",
		price: 3.19,
		likes: 75,
		description: "Detailed description of the auction item...",
	},
	5: {
		image: image4,
		Name: "Vulputate felis purus viverra morbi",
		timeLeft: "08:15:00",
		price: 3.19,
		likes: 75,
		description: "Detailed description of the auction item...",
	},
	6: {
		image: image5,
		Name: "Vulputate felis purus viverra morbi",
		timeLeft: "08:15:00",
		price: 3.19,
		likes: 75,
		description: "Detailed description of the auction item...",
	},
	7: {
		image: image5,
		Name: "Vulputate felis purus viverra morbi",
		timeLeft: "08:15:00",
		price: 3.19,
		likes: 75,
		description: "Detailed description of the auction item...",
	},
};

const AuctionDetails = () => {
	// Type "id" explicitly as a string or undefined
	const { id } = useParams<{ id: string }>();

	// Convert "id" to a number (or handle it if it's undefined or invalid)
	const auctionId = id ? parseInt(id, 10) : undefined;

	// Find the auction based on the ID
	const auction = auctionId ? auctionData[auctionId] : undefined;

	if (!auction) {
		return <p>Auction not found</p>;
	}

	return (
		<div className='bg-[#090921ff]'>
			<div className='fixed top-0 left-0 w-full z-20'>
				<Navbar />
			</div>

			<div className='flex justify-center items-center min-h-screen pt-40 '>
				<div className='flex flex-col md:flex-row items-center md:items-start  shadow-lg rounded-lg p-6 w-[90%] max-w-[1000px]'>
					{/* Image Section */}
					<div className='w-full md:w-1/2'>
						<img
							src={auction.image}
							alt='Sample'
							className='w-full max-w-[500px] h-[500px]  rounded-lg'
						/>
					</div>

					{/* Text Section */}
					<div className='w-full md:w-1/2 mt-4 md:mt-0 md:pl-8'>
						<div className=' '>
							<img
								src={Frame77}
								className='h-[180px] mb-4 mt-4 bg-red- w-[80%]'
								alt=''
							/>
						</div>
						<div className=' '>
							<img
								src={Frame67}
								className='h-[180px]  bg-red- w-[80%]'
								alt=''
							/>
						</div>
						<div className=' '>
							<img
								src={Frame68}
								className='h-[180px] mb-4 mt-4 bg-red- w-[80%]'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuctionDetails;
