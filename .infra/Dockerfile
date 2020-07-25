# Desenvolvimento
FROM node:12.16.1-alpine3.9 AS development

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

COPY . .


# Build do projeto
FROM development AS build

ARG REACT_APP_BACKEND_URL
ARG NODE_ENV

ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}
ENV NODE_ENV=${NODE_ENV}

RUN npm run build


# Produção
FROM nginx:1.17-alpine AS production

COPY --from=build /app/build /var/www

RUN rm /etc/nginx/conf.d/default.conf

COPY ./.infra/nginx/default.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
