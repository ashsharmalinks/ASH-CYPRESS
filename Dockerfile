FROM cypress/included:10.10.0
RUN mkdir/app
WORKDIR /app
ADD . /app/
ENTRYPOINT [  ]