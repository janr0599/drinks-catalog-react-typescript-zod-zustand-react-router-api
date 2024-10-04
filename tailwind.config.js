/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                header: "url('/bg.jpg')",
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ["light"],
    },
};
