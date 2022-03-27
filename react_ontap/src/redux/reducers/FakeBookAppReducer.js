const stateDefault = {
  arrContent: [
    { name: "Trường", content: "Hello, hello!" },
    { name: "Khải", content: "How are you ??" },
  ],
};

export const FakeBookAppReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "COMMENT": {
      state.arrContent = [...state.arrContent, action.userComment];
      return { ...state };
    }
    default:
      return state;
  }
};
