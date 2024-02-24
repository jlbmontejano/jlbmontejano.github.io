import { HEADER_OPTIONS } from "../constants/index";

const Header = () => {
	const handleClick = (scrollTo: string) => {
		document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className='header sticky top-0'>
			{HEADER_OPTIONS.map(option => (
				<a onClick={() => handleClick(option.scrollTo)} key={option.name}>
					{option.name}
				</a>
			))}
		</div>
	);
};

export default Header;