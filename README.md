# eCommerce - Next.js, TypeScript, React, Tailwind, Docker, PostgreSQL

## Descripción

Este es un proyecto de eCommerce desarrollado con **Next.js**, **TypeScript**, **React**, **Tailwind CSS**, **Docker**, y **PostgreSQL**. La plataforma cuenta con funcionalidades como login de usuarios, una pasarela de pago integrada con PayPal

*Actualmente el proyecto sigue en desarrollo*

![alt text](image.png)

---

## Instrucciones para Desarrollo

Sigue los pasos a continuación para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**

   ``` bash
   git clone https://github.com/tu_usuario/ecommerce.git
   cd ecommerce
   ```

2. **Crear y configurar el archivo de entorno**
   - Crea una copia del archivo `.env.template`.
   - Renómbralo a `.env`.
   - Actualiza las variables de entorno con los valores necesarios.

3. **Instalar dependencias**

   ```bash
   npm install
   # o
   pnpm install
   ```

4. **Levantar la base de datos**

   ```bash
   docker compose up -d
   ```

5. **Ejecutar las migraciones de Prisma**

   ```bash
   npx prisma migrate dev
   # o
   pnpm exec prisma migrate dev
   ```

6. **Ejecutar el seed de datos**

   ```bash
   npm run seed
   # o
   pnpm seed
   ```

7. **Levantar el proyecto**

   ```bash
   npm run dev
   # o
   pnpm dev
   ```

---

## Tecnologías Utilizadas

- **Next.js**
- **TypeScript**
- **React**
- **Tailwind CSS**
- **Docker**
- **PostgreSQL**
- **Prisma**

---

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- Autor: [Jose Luis](https://www.linkedin.com/in/j0selu/)
- Email: <joseluissgz97@gmail.com>
