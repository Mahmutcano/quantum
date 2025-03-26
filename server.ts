import express, { Request, Response } from 'express';
import { createServer } from 'http';
import next from 'next';

const PORT: number = 3000; // Kullanmak istediğin port numarası
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.all('*', (req: Request, res: Response) => {
        return handle(req, res);
    });

    createServer(server).listen(PORT, () => {
        console.log(`✅ Next.js Server running on port ${PORT}`);
    });
});
