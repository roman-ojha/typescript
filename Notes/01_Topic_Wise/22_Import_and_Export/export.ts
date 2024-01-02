const user = {
  name: "Roman Ojha",
  id: 2,
};
const makeUser = () => {
  return user;
};

// export type
export type User = ReturnType<typeof makeUser>;
export type UserAnother = typeof user;

export const getUser = makeUser;

// Export all from all the exported stuff from another file
export * from "./employee";
