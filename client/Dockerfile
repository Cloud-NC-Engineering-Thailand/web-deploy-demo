FROM node:20-alpine AS development

# Create a working directory
WORKDIR /app

# Copy necessary files for frontend build
COPY package*.json ./ 
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose the port on which the Next.js dev server will run
EXPOSE 3000

RUN npm run build

# Command to start the Next.js development server
CMD ["npm", "run", "start"] 
