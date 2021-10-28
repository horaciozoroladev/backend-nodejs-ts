import { Request, Response } from 'express';
import { connect } from '../database';
import { Perfil } from '../interfaces/Perfil';

export function getTest(req: Request, res: Response): Response {
    return res.json('Portfolio');
}

export async function list(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const query = `
        SELECT *
        FROM perfil;
    `;
    const portfolio = await conn.query(query);
    return res.json(portfolio);
}