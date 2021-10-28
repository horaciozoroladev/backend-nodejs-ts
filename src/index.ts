import { App } from './app';

const port = 3030;

async function main() {
    const app = new App(port);
    await app.listen();
}

main();
