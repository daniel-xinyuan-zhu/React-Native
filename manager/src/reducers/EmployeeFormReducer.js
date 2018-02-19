const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'employee-update':
      return {... state, [action.payload.prop]: action.payload.value}
    default:
      return state;
  }
};
