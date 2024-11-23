import Logo from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import Logo6 from "../assets/logo6.png";
import Logo7 from "../assets/logo7.png";
import Logo8 from "../assets/logo8.png";
import Logo9 from "../assets/logo9.png";
import Logo10 from "../assets/logo10.png";
import Logo11 from "../assets/logo11.png";
import Logo12 from "../assets/logo12.png";
import logo13 from "../assets/logo13.png";
import logo14 from "../assets/logo14.png";
import logo15 from "../assets/logo15.png";
import logo16 from "../assets/logo16.png";

// Logos array with imported logos
const logos = [
	Logo,
	Logo2,
	Logo3,
	Logo4,
	Logo5,
	Logo6,
	Logo7,
	Logo8,
	Logo9,
	Logo10,
	Logo11,
	Logo12,
	logo13,
	logo14,
	logo15,
	logo16,
];

const ScrollingETH = () => {
	return (
		<div className='overflow-hidden w-full bg-[#090921ff] py-6'>
			{/* Scrolling container */}
			<div className='flex animate-scroll space-x-8'>
				{/* Render the logos twice for seamless infinite scrolling */}
				{logos.concat(logos).map((logo, index) => (
					<div key={index} className='flex-shrink-0'>
						<img src={logo} alt={`logo-${index}`} className='w-16 h-auto' />
					</div>
				))}
			</div>
		</div>
	);
};

export default ScrollingETH;
