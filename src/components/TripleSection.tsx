import { useState } from "react";
import hand from "../assets/handRemovebg.png";
import Card from "./Cards";
import { CardData } from "./types";
import ITEM1 from "../assets/touch.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/Image3.png";
import hotsales from "../assets/hotsales.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/image5.png";
import BiddingPeoples from "../assets/BiddingPeople.png";

const TripleSection = () => {
	const cardData: CardData[] = [
		{
			id: 13,
			image: hotsales,
			Name: "Tristique diam a, enim, . Viverra etiam",
			timeLeft: "12:30:00",
			price: 2.55,
			likes: 120,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 14,
			image: ITEM1,
			Name: "Vulputate felis purus viverra morbi ",
			timeLeft: "08:15:00",
			price: 3.19,
			likes: 75,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 15,
			image: image2,
			Name: "Dui accumsan leo vestibulum ornare",
			timeLeft: "04:45:00",
			price: 1.11,
			likes: 300,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 16,
			image: image3,
			Name: "Senectus adipiscing nascetur accumsan ",
			timeLeft: "02:30:00",
			price: 1.63,
			likes: 20,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 17,
			image: image4,
			Name: "Mattis at diam lorem nisl nam sed sociis",
			timeLeft: "02:30:00",
			price: 5,
			likes: 20,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 18,
			image: image5,
			Name: "lorem20",
			timeLeft: "02:30:00",
			price: 2.1,
			likes: 20,
			BiddingPeople: BiddingPeoples,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => Math.min(prev + 1, cardData.length - 1));
	};

	return (
		<div className='bg-[#090921ff] pt-20 pb-20'>
			<div className='flex justify-center items-start gap-6'>
				{/* Slider Section */}
				<div className='ml-2 w-[450px] h-[700px] rounded-lg'>
					<p className='w-80 font-bold text-white text-4xl mb-6'>
						Check out the hottest sale offer
					</p>
					<div className='relative w-full overflow-hidden h-full'>
						<div
							className='flex transition-transform duration-300'
							style={{
								transform: `translateX(-${currentIndex * 100}%)`, // Move cards by 100% per slide
							}}
						>
							{cardData.map((data, index) => (
								<div
									key={index}
									className='flex-shrink-0'
									style={{
										width: "450px", // slider has 450px width
										height: "700px", // slider has 700px height
									}}
								>
									<Card data={data} />
								</div>
							))}
						</div>

						{/* Left Arrow */}
						{currentIndex > 0 && (
							<button
								onClick={handlePrev}
								className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#1e2238ff] hover:bg-gray-300 text-gray-800 p-4 rounded-full shadow-md z-10'
							>
								◀
							</button>
						)}

						{/* Right Arrow */}
						{currentIndex < cardData.length - 1 && (
							<button
								onClick={handleNext}
								className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1e2238ff] hover:bg-gray-300 text-gray-800 p-4 rounded-full shadow-md z-10'
							>
								▶
							</button>
						)}
					</div>
					
				</div>

				{/* Middle Section */}
				<div className='border-[1px] border-gray-600 text-white rounded-lg shadow-lg w-[450px] h-[800px] flex flex-col items-center p-6'>
					<img src={hand} alt='Hand Image' className='mb-6' />
					<h3 className='text-lg font-bold w-[220px] text-left mb-4'>
						Get started Creating & Selling your NFTs
						<p className='text-gray-100 text-sm font-thin'>
							Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.
							Mi est sit.
						</p>
					</h3>
					<button className='w-[80%] text-center p-4 bg-[#3835ccff] rounded-lg text-white'>
						Get Started
					</button>
				</div>

				{/* Third Section (Modified as per the requirement) */}
				<div className='w-[450px] h-[750px] overflow-hidden rounded-md  border-gray-600'>
					<p className='font-bold text-white text-4xl mb-6  w-80'>
						Top NFT at a lower price
					</p>
					<div className='overflow-y-auto border mr-2 pl-2 pt-2'>
						{cardData.map((data, index) => (
							<div
								key={index}
								className='flex mb-4 border-b-[1px] border-gray-600 pb-2'
							>
								<img
									src={data.image}
									alt={data.Name}
									className='w-[150px] h-[120px] object-cover rounded-lg'
								/>
								<div className='ml-4 text-left'>
									<h4 className='text-xl font-semibold text-white'>
										{data.Name}
									</h4>
									<p className='text-sm text-gray-300'>{data.timeLeft}</p>
									<div>
										<p className='text-lg font-semibold text-[#4845e6ff]'>
											${data.price}
										</p>
										{/* <p className='text-sm text-gray-400'>{data.likes}</p> */}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TripleSection;
