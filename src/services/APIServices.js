
export const getCharacters = async (dispatch) => {
    try {
        const response = await fetch("https://www.swapi.tech/api/people/")
        const data = await response.json()
        dispatch({type: "set_characters", payload: data.results})
      } catch (error) {
        console.log(error);
         
      }
}
export const getPlanets = async (dispatch) => {
  try {
      const response = await fetch("https://www.swapi.tech/api/planets/")
      const data = await response.json()
      dispatch({type: "set_planets", payload: data.results})
    } catch (error) {
      console.log(error);
      
    }
}
export const getVehicles = async (dispatch) => {
  try {
      const response = await fetch("https://www.swapi.tech/api/vehicles/")
      const data = await response.json()
      dispatch({type: "set_vehicles", payload: data.results})
    } catch (error) {
      console.log(error);
      
    }
} 

export const loadAllCharacterDetails = async (dispatch, characters) => {
  try {
    const promises = characters.map(async (character) => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${character.uid}`);
        const data = await response.json();
        return {
          uid: character.uid,
          properties: data.result.properties
        };
      } catch (error) {
        console.error(`Error loading character ${character.uid}`, error);
        return null; // Devuelves null para luego filtrar
      }
    });

    const results = await Promise.all(promises);

    results
      .filter(item => item !== null) // Solo los que no fallaron
      .forEach(item => {
        dispatch({ type: "add_character_info", payload: { uid: item.uid, result: item } });
      });

  } catch (error) {
    console.error("Error loading all character details", error);
  }
};