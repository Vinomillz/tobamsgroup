import React from "react";
import { CardData } from "./types";
import { GiAlarmClock } from "react-icons/gi";

interface CardProps {
	data: CardData;
}

const Auctions: React.FC<CardProps> = ({ data }) => {
	return (
		<div className='border border-gray-200 rounded-lg transform hover:scale-95 transition duration-300 ease-in-out w-[250px]'>
			{/* Image Section */}
			<img
				src={data.image}
				alt='Item'
				className='w-[180px] h-[300px] mt-[24px] ml-[20px] mr-[20px] rounded-lg'
			/>

			{/* Content */}
			<div className='p-4'>
				<div className='flex justify-between'>
					{/* Name */}
					<h3 className='text-sm font-medium text-white mb-2'>{data.Name}</h3>
					{/* Price */}
					<button className='text-sm font-medium bg-[#111138ff] w-16 py-1 text-[#4845e6ff] mb-2'>
						{data.price} ETH
					</button>
				</div>

				{/* Time Left */}
				<div className='flex'>
					<GiAlarmClock className='flex text-white mr-1' />
					<div className='text-sm text-gray-500 mb-2'>
						min left: {data.timeLeft}
					</div>
				</div>

				<div className='h-[1px] bg-gray-400 w-full mb-2 '></div>

				{/* Likes */}
				<div className='flex justify-between items-center'>
					{/* Bidding People */}
					<div>
						<img src={data.BiddingPeople} className='w-[70%]' alt='' />
					</div>

					{/* Likes Section */}
					<div className='text-sm text-gray-600'>❤️ {data.likes}</div>
				</div>
			</div>
		</div>
	);
};

export default Auctions;
