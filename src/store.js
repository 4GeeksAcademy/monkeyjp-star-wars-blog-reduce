export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    vehicles: [],
    favorites: ["Luke", "Leia", "Tatooine"]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_characters':
      return {
        ...store,
        characters: action.payload
      };
    case 'set_planets':
      return {
        ...store,
        planets: action.payload
      };
    case 'set_vehicles':
      return {
        ...store,
        vehicles: action.payload
      };
    case 'add_character_info':
      const newCharacters = store.characters.map(character => {
        if (character.uid === action.payload.uid) {
          return {...character, ...action.payload.result}
        }
        return character
      })
      return {
        ...store,
        characters: newCharacters
      }
    default:
      throw Error('Unknown action.');
  }
}
