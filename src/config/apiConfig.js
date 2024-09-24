const apiConfig = {
  development: {
    API_BASE_URL: "http://localhost:5000/api",
    TIMEOUT: 5000,
  },
  production: {
    API_BASE_URL: "https://your-production-api.com/api",
    TIMEOUT: 10000,
  },
  staging: {
    API_BASE_URL: "https://staging-api.yourdomain.com/api",
    TIMEOUT: 8000,
  },
};

const getConfig = () => {
  const env = process.env.NODE_ENV || "development";
  return apiConfig[env];
};

export default getConfig();
