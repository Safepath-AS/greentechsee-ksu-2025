interface ServerConfig {
  variable: string;
}

interface CustomWindow extends Window {
  serverConfig: ServerConfig;
}

declare const window: CustomWindow;

const defaultConfig: ServerConfig = {
  variable: import.meta.env.VITE_VARIABLE ?? "http://localhost:8000",
};

export const serverConfig: ServerConfig = window.serverConfig;

const preReplaceConfig: ServerConfig = {
  variable: "__VARIABLE__",
};

for (const key of Object.keys(serverConfig) as Array<keyof ServerConfig>) {
  if (serverConfig[key] === preReplaceConfig[key]) {
    serverConfig[key] = defaultConfig[key];
  }
}
