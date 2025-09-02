# Prosjektnavn

<url?>

## Medlemmer

- Per Christian Kvalvik
- Espen Kvernstad
- Anne Dahl
- Henrik Solbjør
- Terje Rødahl
- Lars Even Halse
- Lana Hansen

# Running the app using docker

1. Copy the template configuration file: `cp .env.template .env`
2. Edit all configurations following the instructions of the comments in the file
3. Run the Nginx compose file and the application's compose file
   ```bash
   docker-compose -f nginx.docker-compose.yml up -d
   docker-compose -f docker-compose.yml up -d
   ```

This system can also be used to host other applications under different domains. See `docker-compose.yml` for more information.

## How it works

GitHub Actions are used to build and push the docker images to the GitHub Container Registry on every push to the main branch.
These images are public and you can use the `docker-compose.yml` configuration files to run the app locally.

- `nginx.docker-compose.yml` will run a local nginx-proxy which exposes port 80 and 443 to the internet, and acme-companion which
  will automatically generate SSL certificates using Let's Encrypt. These images are public and not hosted by us.
- `docker-compose.yml` contains the configuration for the application itself, and depends on
  `nginx.docker-compose.yml` as a proxy. This is the file that runs our public images for GreenTechSee KSU 2025.

# Development

Guides to run the app locally for development.

## App

Powered by [React](https://reactjs.org/)

### Requirements

Dowload and install Node LTS from [nodejs.org](https://nodejs.org/en/download/)

> [!NOTE]
> Make sure to change directory to the `app` folder by running `cd app`.

To install requiremnts run:

```bash
$ npm install -g pnpm@latest-10
$ pnpm install
```

### Run locally

```bash
$ pnpm start
```
