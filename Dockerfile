# ==========================================
# Dockerfile: landing-prueba (Astro Static)
# ==========================================

# Etapa 1: Build con Node 22 Alpine
FROM node:22.23.4-alpine AS builder

WORKDIR /app

# Optimización de caché de Docker
COPY package*.json ./
RUN npm ci || npm install

# Copiar el código fuente y compilar
COPY . .
RUN npm run build

# Etapa 2: Servidor Web Ultraligero con Nginx Alpine
FROM nginx:alpine

# Copiar configuración optimizada para SPA / estáticos
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos estáticos compilados por Astro
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
