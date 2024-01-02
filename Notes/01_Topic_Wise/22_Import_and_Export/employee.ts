const employee = {
  name: "Roman Ojha",
  id: 2,
};
const makeEmployee = () => {
  return employee;
};

export type Employee = ReturnType<typeof makeEmployee>;
export type AnotherEmployee = typeof employee;
export const getEmployee = makeEmployee;
