import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai"; // Importing a down arrow icon

const SearchWithDropdown = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [showCategories, setShowCategories] = useState(false);

	// Sample categories and suggestions
	const categories = ["Frontend", "Backend", "Full Stack", "Design"];
	const suggestions = [
		"React",
		"Tailwind CSS",
		"JavaScript",
		"TypeScript",
		"Frontend Development",
	];

	// Filter suggestions based on input
	const filteredSuggestions = suggestions.filter((item) =>
		item.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Handle dropdown toggling
	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
		setShowCategories(!showCategories); // Toggle categories view
	};

	return (
		<div className='relative w-full max-w-md mx-auto'>
			{/* Search Input and Down Arrow */}
			<div className='flex items-center border border-gray-300 rounded-md'>
				<input
					type='text'
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						setDropdownOpen(e.target.value !== ""); // Open dropdown if input is not empty
						setShowCategories(false); // Hide categories when typing
					}}
					placeholder='items, collections and creators'
					className='w-full p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md '
				/>
				<button
					onClick={toggleDropdown}
					className='p-2 bg-gray-100 hover:bg-gray-200 rounded-md'
				>
					<AiOutlineDown className='text-gray-600' />
				</button>
			</div>

			{/* Dropdown */}
			{dropdownOpen && (
				<div className='absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10'>
					{/* Show Categories if no input, otherwise show suggestions */}
					{showCategories
						? categories.map((category, index) => (
								<div
									key={index}
									className='p-2 hover:bg-blue-500 hover:text-white cursor-pointer'
									onClick={() => {
										setSearchTerm(category);
										setDropdownOpen(false);
									}}
								>
									{category}
								</div>
))
						: filteredSuggestions.map((item, index) => (
								<div
									key={index}
									className='p-2 hover:bg-blue-500 hover:text-white cursor-pointer'
									onClick={() => {
										setSearchTerm(item);
										setDropdownOpen(false); // Close the dropdown
									}}
								>
									{item}
								</div>
						))}
				</div>
			)}
		</div>
	);
};

export default SearchWithDropdown;
