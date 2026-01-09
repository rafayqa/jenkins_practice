function login(username, password) {
  if (username === "admin" && password === "password123") {
    return "Dashboard";
  } else {
    return "Invalid credentials";
  }
}

// Export for testing
if (typeof module !== "undefined") {
  module.exports = login;
}
