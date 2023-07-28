# Start with the desired devcontainer base image
FROM mcr.microsoft.com/devcontainers/universal:2

# Install Redis
RUN apt-get update && apt-get install -y redis-server

# Expose the default Redis port (optional, but useful for local development)
EXPOSE 6379

# WORKDIR 
COPY . /app
WORKDIR /app

# Start the application
CMD ["php", "artisan", "serve"]