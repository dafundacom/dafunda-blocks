/* eslint-disable no-unused-vars */
const { Config } = require("tailwindcss");
const { stylePreset } = require("./src/styles/preset");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,php}"],
  presets: [stylePreset],

};

module.exports = config;
