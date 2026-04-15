const USER = {
  email: "admin@gmail.com",
  password: "123456",
};

exports.login = ({ email, password }) => {
  if (!email || !password) {
    return {
      success: false,
      message: "Email and password required",
    };
  }

  if (email === USER.email && password === USER.password) {
    return {
      success: true,
      message: "Login successful",
      data: { email },
    };
  }

  return {
    success: false,
    message: "Invalid credentials",
  };
};
