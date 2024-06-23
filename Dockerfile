FROM node:20

WORKDIR /app
# Creates directory for the images

COPY package*.json ./
# Copies p1 into p2 of workDIR

RUN npm install

COPY . .

# RUN npm run dev <- build here if not dev
EXPOSE 3000


# Start app
CMD [ "npm", "run", "dev" ]
