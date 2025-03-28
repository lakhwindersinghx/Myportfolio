# 1. Use the official Node.js image as base
FROM node:20-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency files
COPY package.json package-lock.json* ./

# 4. Install dependencies
RUN npm ci

# 5. Copy the rest of the project
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Use a lighter base image for production
FROM node:20-alpine AS runner

# 8. Set environment variables
ENV NODE_ENV=production

# 9. Set working directory
WORKDIR /app

# 10. Copy the build output and necessary files from previous stage
COPY --from=deps /app/public ./public
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

# 11. Expose the port Next.js will run on
EXPOSE 3000

# 12. Run the app
CMD ["npm", "start"]
