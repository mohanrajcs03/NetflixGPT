export const validateData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  // const isNameValid = /^[A-Za-zà-ÿÀ-ß'-]{4,30}( [A-Za-zà-ÿÀ-ß'-]{2,50})*$/.test(
  //   name
  // );

  // if (!isNameValid) return "Name is Not Valid";
  if (!isEmailValid) return "Email Not Valid";
  if (!isPasswordValid) return "Password Not Valid";

  return null;
};
