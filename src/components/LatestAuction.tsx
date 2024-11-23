import { Link } from "react-router-dom";
import Card from "./Cards";
import { CardData } from "./types";
import ITEM1 from "../assets/ITEM1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/Image3.png";
import image0 from "../assets/Image0.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/image5.png";
import { useState } from "react";
import BiddingPeoples from "../assets/BiddingPeople.png";

const LatestAuction = () => {
	// Add a unique "id" to each auction item
	const cardData: CardData[] = [
		{
			id: 7,
			image: image0,
			Name: "Tristique diam a, enim, . Viverra etiam",
			timeLeft: "12:30:00",
			price: 2.55,
			likes: 120,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 8,
			image: ITEM1,
			Name: "Vulputate felis purus viverra morbi ",
			timeLeft: "08:15:00",
			price: 3.19,
			likes: 75,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 9,
			image: image2,
			Name: "Dui accumsan leo vestibulum ornare",
			timeLeft: "04:45:00",
			price: 1.11,
			likes: 300,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 10,
			image: image3,
			Name: "Senectus adipiscing nascetur accumsan ",
			timeLeft: "02:30:00",
			price: 1.63,
			likes: 20,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 11,
			image: image4,
			Name: "Mattis at diam lorem nisl nam sed sociis",
			timeLeft: "02:30:00",
			price: 5,
			likes: 20,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 12,
			image: image5,
			Name: "Lorem Ipsum",
			timeLeft: "02:30:00",
			price: 2.1,
			likes: 20,
			BiddingPeople: BiddingPeoples,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0)); // Prevent going below 0
	};

	const handleNext = () => {
		setCurrentIndex(
			(prev) => Math.min(prev + 1, cardData.length - 3) // Prevent going beyond the last visible cards
		);
	};

	return (
		<div className='bg-[#060714ff]'>
			<p className='text-center pt-10 pb-10 font-medium text-white text-2xl'>
				Latest live auctions{" "}
			</p>
			<div className='relative w-full overflow-hidden'>
				{/* Slider Container */}
				<div
					className='flex transition-transform duration-300'
					style={{
						transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Move cards
					}}
				>
					{cardData.map((data, index) => (
						<div key={index} className='flex-shrink-0 px-2'>
							{/* Wrap the Card in a Link */}
							<Link to={`/auction/${data.id}`}>
								<Card data={data} />
							</Link>
						</div>
					))}
				</div>

				{/* Left Arrow */}
				{currentIndex > 0 && (
					<button
						onClick={handlePrev}
						className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1e2238ff] hover:bg-gray-300 text-gray-800 p-6 rounded-full shadow-md z-10'
					>
						◀
					</button>
				)}

				{/* Right Arrow */}
				{currentIndex < cardData.length - 3 && (
					<button
						onClick={handleNext}
						className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1e2238ff] hover:bg-gray-300 text-gray-800 p-6 rounded-full shadow-md z-10'
					>
						▶
					</button>
				)}
			</div>
		</div>
	);
};

export default LatestAuction;
