export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small devices (default)
        md: "768px", // Medium devices (default)
        lg: "1024px", // Large devices (default)
        xl: "1280px", // Extra large devices (default)
        "2xl": "1536px", // Custom breakpoint for even larger devices
        "3xl": "1920px", // Another custom breakpoint
      },
    },
  },
  plugins: [],
};
