import crypto from 'crypto';

const SECRET = 'CHEMICLY-REST-API'
export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt:string, password:string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
}

export const encodeSessionToken = (userId: string) => {
    const salt = random(); 
    const token = crypto.createHmac('sha256', salt).update(userId).digest('hex');
    return `${salt}:${token}`; 
};


export const decodeSessionToken = (sessionToken: string) => {
    const [salt, token] = sessionToken.split(':'); 
    if (!salt || !token) return null; 

    return { userId: token, salt }; 
};

export const generateOrderId = (): string => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    return `ORDER-${randomDigits}`;
  };