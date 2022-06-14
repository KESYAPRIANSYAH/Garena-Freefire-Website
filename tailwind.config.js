module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js", "./node_modules/flowbite/**/*.js"],
  plugins: [require("tw-elements/dist/plugin", "flowbite/plugin")],
};
