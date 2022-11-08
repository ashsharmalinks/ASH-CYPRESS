FROM cypress/included:10.10.0
RUN mkdir /app
WORKDIR /app
ADD . /app/
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]
ENTRYPOINT [  ]