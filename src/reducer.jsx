const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      role: action.payload.role,
    };
  }
  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      role: action.payload.role,
    };
  }
  if (action.type === "GET_SERVICES") {
    return {
      ...state,
      services: action.payload,
    };
  }
  return action;
};

export { reducer };
