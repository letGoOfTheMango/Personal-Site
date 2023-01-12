import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Header=styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	padding: 0 2rem;
	background-color: var(--mainColor);
	color: var(--textColor);
`
const Nav=styled.nav`
	display: flex;
	align-items: center;
a {
	margin: 0 1rem;
	color: var(--textColor);
	text-decoration: none;
}
a:hover {
	color: var(--secondaryColor);
}

`
const abc=styled.abc``

header .nav-btn {
	padding: 5px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: var(--textColor);
	visibility: hidden;
	opacity: 0;
	font-size: 1.8rem;
}
const abc=styled.abc``


const abc=styled.abc``

@media only screen and (max-width: 1024px) {
	header .nav-btn {
		visibility: visible;
		opacity: 1;
	}

	header nav {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background-color: var(--mainColor);
		transition: 1s;
		transform: translateY(-100vh);
	}

	header .responsive_nav {
		transform: none;
	}

	nav .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}

	nav a {
		font-size: 1.5rem;
	}
}

function Navigation() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<Header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</Header>
	);
}

export default Navigation;