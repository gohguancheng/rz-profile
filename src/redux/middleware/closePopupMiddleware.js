const closePopupMiddleware = (store) => (next) => (action) => {
  const popupIsOpened = store.getState().appState.showPopup;

  if (!!action.type?.includes("profiles/") && popupIsOpened) {
    store.dispatch({
      type: "appState/setShowPopup",
      payload: false,
    });
  }
  const result = next(action);
  return result;
};

export default closePopupMiddleware;
