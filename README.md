# ToDoApp

Приложение для заметок на React + Vite с поддержкой русского и английского языков.

## Возможности

- Создание, редактирование и удаление заметок
- Поиск по заголовку
- Сетка и список
- Адаптивная вёрстка для мобильных, планшетов и десктопа

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте в браузере адрес, который покажет Vite (обычно http://localhost:5173).

## Сборка

```bash
npm run build
npm run preview
```

## Деплой на Netlify

1. Загрузите проект на [Netlify](https://www.netlify.com/) (через Git или drag-and-drop папки `dist`).
2. При подключении репозитория Netlify подхватит настройки из `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. После деплоя сайт будет доступен по адресу вида `https://ваш-сайт.netlify.app`.
