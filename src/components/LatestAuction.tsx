import Card from "./Cards";
import { CardData } from "./types";
import ITEM1 from "../assets/ITEM1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/Image3.png";
import image0 from "../assets/Image0.png"
import { useState } from "react";

const LatestAuction = () => {
	const cardData: CardData[] = [
		{
			image: image0,
			Name: "lorem20",
			timeLeft: "12:30:00",
			price: 100,
			likes: 120,
		},
		{
			image: ITEM1,
			Name: "lorem20",
			timeLeft: "08:15:00",
			price: 250,
			likes: 75,
		},
		{
			image: image2,
			Name: "lorem20",
			timeLeft: "04:45:00",
			price: 150,
			likes: 300,
		},
		{
			image: image3,
			Name: "lorem20",
			timeLeft: "02:30:00",
			price: 80,
			likes: 20,
		},
		{
			image: "https://via.placeholder.com/400x300",
			Name: "lorem20",
			timeLeft: "02:30:00",
			price: 80,
			likes: 20,
		},
		{
			image: "https://via.placeholder.com/400x300",
			Name: "lorem20",
			timeLeft: "02:30:00",
			price: 80,
			likes: 20,
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
						<div
							key={index}
							className='flex-shrink-0  px-2' // Card width: 1/3 of the container
						>
							<Card data={data} />
						</div>
					))}
				</div>

				{/* Left Arrow */}
				{currentIndex > 0 && (
					<button
						onClick={handlePrev}
						className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full shadow-md z-10'
					>
						◀
					</button>
				)}

				{/* Right Arrow */}
				{currentIndex < cardData.length - 3 && (
					<button
						onClick={handleNext}
						className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full shadow-md z-10'
					>
						▶
					</button>
				)}
			</div>
		</div>
	);
};

export default LatestAuction;
