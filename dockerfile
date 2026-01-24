# Используем официальный Node.js образ
FROM node:20-alpine

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json / yarn.lock
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем остальной исходный код
COPY . .

# Собираем Nuxt-приложение (для production)
RUN npm run build

# Указываем порт, на котором будет работать приложение внутри контейнера
EXPOSE 3000

# Команда для запуска Nuxt
CMD ["npm", "run", "preview", "--", "-p", "3000"]
