# Étape de construction
FROM node:14 AS build-stage
LABEL authors="Robin"

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape de production
FROM node:14 AS production-stage

WORKDIR /app

# Copier les fichiers construits depuis l'étape de construction
COPY --from=build-stage /app/build ./build

# Installer le serveur web statique 'serve'
RUN npm install -g serve

# Exposer le port 80
EXPOSE 80

# Démarrer le serveur sur le port 80
CMD ["serve", "-s", "build", "-l", "80"]