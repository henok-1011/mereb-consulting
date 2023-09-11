/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'bg-img': 'url(../public/assets/back-cover.jpg)'
            }
        },
    },
    plugins: [],
}