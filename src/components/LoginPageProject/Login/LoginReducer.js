const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL_INPUT":
      return {
        ...state,
        email: { value: payload, isValid: payload.includes("@") },
      };
    case "PASSWORD_INPUT":
      return {
        ...state,
        password: { value: payload, isValid: payload.trim().length > 6 },
      };
    case "ON_BLUR_EMAIL":
      return {
        ...state,
        email: {
          value: state.email.value,
          isValid: state.email.value.includes("@"),
        },
      };
    case "ON_BLUR_PASSWORD":
      return {
        ...state,
        password: {
          value: state.password.value,
          isValid: state.password.value.trim().length > 6,
        },
      };
    case "FORM_IS_VALID":
      return {
        ...state,
        formIsValid: state.email.isValid && state.password.isValid,
      };
    default:
      return state;
  }
};

export default formReducer;
