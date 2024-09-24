const AuthService = {
  login: async (username, password) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      return data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("authToken");
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("authToken");
  },

  getToken: () => {
    return localStorage.getItem("authToken");
  },
};

export default AuthService;
