import React from "react";
import { CardData } from "./types";

interface CardProps {
	data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
	return (
		<div className=' border border-gray-200 rounded-lg  transform hover:scale-95 transition duration-300 ease-in-out '>
			{/* Image Section */}

			<img
				src={data.image}
				alt='Item'
				className='w-[300px] h-[400px] mt-[24px] ml-[20px] mr-[20px] rounded-lg '
			/>

			{/* Content */}
			<div className='p-4 text-center'>
				{/* Name */}
				<h3 className='text-lg font-semibold text-gray-800 mb-2'>
					{data.Name}
				</h3>

				{/* Time Left */}
				<div className='text-sm text-gray-500 mb-2'>
					⏳ Time Left: {data.timeLeft}
				</div>

				{/* Price */}
				<div className='text-lg font-bold text-blue-600 mb-2'>
					💰 Price: ${data.price}
				</div>

				{/* Likes */}
				<div className='flex justify-center items-center text-sm text-gray-600'>
					❤️ {data.likes} Likes
				</div>
			</div>
		</div>
	);
};

export default Card;
