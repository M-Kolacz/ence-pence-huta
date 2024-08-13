FROM node:20.16

WORKDIR /app

ADD package.json package-lock.json .npmrc ./

RUN npm install 

COPY . . 

RUN npx playwright install

RUN npx playwright install-deps

EXPOSE 6006

CMD ["npm", "run", "test:storybook-ci"]