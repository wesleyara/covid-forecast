FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN set -x \
  && npm test \
  && npm run lint \
  && echo "Build successful"