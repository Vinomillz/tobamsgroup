import Auctions from "./Auctions";
import { CardData } from "./types";
import ITEM1 from "../assets/Auction1.png";
import image2 from "../assets/Auction2.png";
import image3 from "../assets/Auction3.png";
import image0 from "../assets/Auction6.png";
import image4 from "../assets/Auction4.png";
import image5 from "../assets/Auction5.png";
// import { useState } from "react";
import BiddingPeoples from "../assets/BiddingPeople.png";

const PopularAuction = () => {
	const cardData: CardData[] = [
		{
			id: 1,
			image: image0,
			Name: "Tristique diam a, enim, . Viverra etiam",
			timeLeft: "12:30:00",
			price: 2.55,
			likes: 120,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 2,
			image: ITEM1,
			Name: "Vulputate felis purus viverra morbi ",
			timeLeft: "08:15:00",
			price: 3.19,
			likes: 75,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 3,
			image: image2,
			Name: "Dui accumsan leo vestibulum ornare",
			timeLeft: "04:45:00",
			price: 1.11,
			likes: 300,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 4,
			image: image3,
			Name: "Senectus adipiscing nascetur accumsan ",
			timeLeft: "02:30:00",
			price: 1.63,
			likes: 20,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 5,
			image: image4,
			Name: "Mattis at diam lorem nisl nam sed sociis",
			timeLeft: "02:30:00",
			price: 5,
			likes: 20,
			BiddingPeople: BiddingPeoples,
		},
		{
			id: 6,
			image: image5,
			Name: "lorem20",
			timeLeft: "02:30:00",
			price: 2.1,
			likes: 20,
			BiddingPeople: BiddingPeoples,
		},
	];

	return (
		<div className='bg-[#060714ff] w-full'>
			<p className='text-center pt-10 pb-10 font-medium text-white text-2xl'>
				Most Popular live Auctions
			</p>
			<div className='flex justify-center items-center min-h-screen'>
				<div className='relative w-[80%] overflow-hidden'>
					{/* Slider Container */}
					<div className='flex transition-transform duration-300' style={{}}>
						{cardData.map((data, index) => (
							<div
								key={index}
								className='flex-shrink-0 px-2' // Card width: 1/3 of the container
							>
								<Auctions data={data} />
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='flex justify-center mt-40'>
				<div className='h-[1px] bg-gray-400 w-[80%]'></div>
			</div>
		</div>
	);
};

export default PopularAuction;
