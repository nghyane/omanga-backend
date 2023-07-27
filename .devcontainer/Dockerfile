# Start with the desired devcontainer base image
FROM mcr.microsoft.com/devcontainers/universal:2

# Install Redis
RUN apt-get update && apt-get install -y redis-server

# Expose the default Redis port (optional, but useful for local development)
EXPOSE 6379

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    php-mysql php-redis composer


# Start Redis when the container starts
CMD ["redis-server"]


# WORKDIR 
COPY . /app
WORKDIR /app

# Install dependencies
RUN composer install

# Start the application
CMD ["php", "artisan", "serve"]