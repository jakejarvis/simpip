FROM node:10

# gyp requires `--unsafe-perm`:
# https://stackoverflow.com/a/52658196/1438024
RUN npm install -g --unsafe-perm @dollarshaveclub/cloudworker

WORKDIR /app
COPY . .

EXPOSE 3000

ENTRYPOINT ["cloudworker"]
CMD ["index.js"]
