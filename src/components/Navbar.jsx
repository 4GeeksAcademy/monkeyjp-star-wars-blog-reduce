import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	
	const {store, dispatch} = useGlobalReducer()

	return (
		<nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Navbar</a>
				
				
					<div className="btn-group">
						<button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{
								store.favorites.map(favorite => {
									return (
										<li className="d-flex justify-content-between">
											<a className="dropdown-item" href="#">{favorite}</a>
											<i class="fa-solid fa-trash-can" onClick={()=> dispatch({type: "handle_favorites", payload: favorite})}></i>
										</li>

									)
								})
							}
						</ul>
					</div>
				
			</div>

		</nav>

	);
};