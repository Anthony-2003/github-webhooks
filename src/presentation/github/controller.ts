import {Request, Response} from 'express';

export class GithubController {

    constructor(){

    }

    webHookHandler = (req: Request, res: Response) => {
        res.json('WebHookContrroller');
    }

}