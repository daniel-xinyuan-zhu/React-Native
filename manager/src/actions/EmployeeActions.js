export const employeeUpdate = ({prop, value}) => {
  return {
    type: 'employee-update',
    payload: {prop, value}
  };
};
