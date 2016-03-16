const routes = (state = 'login', action) => {
  switch (action.type) {
    case 'CHANGE_ROUTE':
      return action.name;
    default:
      return state;
  }
};

export default routes;
