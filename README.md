# eCommerce - Next.js, TypeScript, React, Tailwind, Docker, PostgreSQL

# Descrpción

Este es un proyecto de eCommerce desarrollado con **Next.js**, **TypeScript**, **React**, **Tailwind CSS**, **Docker** y **PostgreSQL**. Proporciona una plataforma moderna para la compra y venta de productos en línea.
![alt text](image.png)

## Correr en DEV

1. Clonar el repositorio
2. Crear una copía del `.evn.template`, renombrarlo a `.env` y cambiar las variables de entorno.
3. Instalar depenedencias ` npm install` o ` pnpm install`
4. Levantar la base de datos ` docker compose up -d`
5. Ejecutar las migraciones de Prisma `npx prisma migrate dev` o `pnpm exec prisma migrate dev`
6. Ejecutar el seed `npm run seed` p `pnpm seed`
7. Levantar el proyecto ` npm run dev` o ` pnpm dev`
