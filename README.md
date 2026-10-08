# TaskTracker

Стартовый Angular-проект с Taiga UI и LESS.

- Angular 22, standalone-компоненты, маршрутизация и строгий TypeScript.
- Taiga UI 5: подключены `provideTaiga()`, `TuiRoot`, тема, шрифты и иконки.
- LESS для глобальных стилей и компонентов; новые компоненты используют LESS по умолчанию.

## Запуск

Требуется Node.js 24.15 или новее в ветке 24 LTS и npm.

```sh
npm install
npm start
```

Приложение доступно по адресу http://localhost:4200/.
В PowerShell при ограничении выполнения `npm.ps1` используйте `npm.cmd`.

## Проверки

```sh
npm run build
npm test -- --watch=false
```

## Структура

- `src/app/app.*` — стартовая страница с компонентами Taiga UI.
- `src/app/app.config.ts` — провайдеры приложения.
- `src/app/app.routes.ts` — маршруты.
- `src/styles.less` — глобальные стили.

Документация: [Angular](https://angular.dev/), [Taiga UI](https://taiga-ui.dev/getting-started/).
