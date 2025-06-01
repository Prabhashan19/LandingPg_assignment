# Use the official Nginx image as base
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Create directory for website files
RUN mkdir -p /var/www/html

# Set working directory
WORKDIR /var/www/html

# Expose port 80 (Nginx default port)
EXPOSE 80

# Start Nginx when container runs
CMD ["nginx", "-g", "daemon off;"]