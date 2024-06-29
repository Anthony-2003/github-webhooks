import 'dotenv/config';
import {get} from 'env-var';

export const Envs = {
    PORT: get('PORT').required().asPortNumber(),
      
}