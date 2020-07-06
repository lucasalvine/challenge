#!/bin/sh
npx sequelize db:migrate:undo:all
npm run migrate
npm run start