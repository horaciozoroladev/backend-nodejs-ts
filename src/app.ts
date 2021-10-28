import express, { Application } from 'express';
import morgan from 'morgan';
import Routes from './routes/index.route'

export class App {

    private app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings(): void {
        this.app.set('port', this.port || process.env.PORT || 3030);
    }

    private middlewares(): void {
        this.app.use(morgan('dev'));
    }

    private routes(): void {
        this.app.use(Routes);
    }

    public async listen(): Promise<any> {
        await this.app.listen(this.app.get('port'));
        console.log(`Server on port ${this.port}`);
    }
}