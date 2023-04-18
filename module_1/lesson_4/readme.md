1. Tailwind CSS

2. CDN > head

3. npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init

4. tailwind.config.js: content: []  ->  content: ["./src/**/*.{html,js}"]

5. main.css: @tailwind base;
             @tailwind components;
             @tailwind utilities;

6. npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch