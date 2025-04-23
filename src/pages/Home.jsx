import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Card } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { loadAllCharacterDetails } from "../services/APIServices"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		if (store.characters.length > 0) {
			loadAllCharacterDetails(dispatch, store.characters);
		}
	  }, []);

	return (
		<div className="container-fluid">
			<div className="container-characters mt-4">
				<h2>Characters</h2>
				<div className="container-scroll d-flex overflow-x-scroll">
					{
						store.characters.map(character => {
							return (
								<Card key={character.uid} type={"character"} data={character}/>
						)
						})
					}

				</div>
			</div>
		</div>
	);
}; 