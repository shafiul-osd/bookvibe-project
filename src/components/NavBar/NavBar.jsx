import { NavLink } from "react-router-dom";

const NavBar = () => {
	const links = (
		<>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/listedbooks">Listed Books</NavLink></li>
			<li><NavLink to="/pagestoread">Pages To Read</NavLink></li>
			<li><NavLink to="/anotherpage">Another Page</NavLink></li> {/* Added new route */}
			<li><NavLink to="/newpage">New Page</NavLink></li> {/* Added new route */}
		</>
	);

	return (
		<div className="max-w-[1440px] mx-auto">
			<div className="navbar bg-base-100 w-[95%] mx-auto flex justify-between">
				<div className="flex justify-center">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</div>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
							{links}
						</ul>
					</div>
					<a className="btn btn-ghost text-xl md:text-4xl font-bold">BookVibe</a>
				</div>
				<div className=" hidden md:flex">
					<ul className="menu menu-horizontal px-1">
						{links}
					</ul>
				</div>
				<div className=" flex gap-2 items-center">
					<a className="btn btn-sm md:btn-md btn-success">Sign in</a>
					<a className="btn btn-sm md:btn-md btn-primary">Sign Up</a>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
