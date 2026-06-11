export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_REGISTRO":
      return {
        ...state,
        registros: [...state.registros, action.payload],
      };

    case "FAVORITAR":
      return {
        ...state,
        favoritos: state.favoritos.includes(action.payload)
          ? state.favoritos
          : [...state.favoritos, action.payload],
      };

    default:
      return state;
  }
};