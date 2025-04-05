import jwt, { JwtPayload } from "jsonwebtoken";
import { cleanupExpiredTokens } from "./token-cleanup";

interface TokenOptions {
  expiresIn: string | number;
}

const ACCESS_TOKEN_OPTIONS: TokenOptions = {
  expiresIn: "30m", // 30 minutes
};

const REFRESH_TOKEN_OPTIONS: TokenOptions = {
  expiresIn: "7d", // 7 days
};

export interface TokenPayload extends JwtPayload {
  userId: string;
  email: string;
  role: string;
}

export function generateAccessToken(payload: TokenPayload): string {
  const secret = process.env.ACCESS_TOKEN_SECRET!;
  return jwt.sign(payload, secret, ACCESS_TOKEN_OPTIONS);
}

export function generateRefreshToken(payload: TokenPayload): string {
  const secret = process.env.REFRESH_TOKEN_SECRET!;
  return jwt.sign(payload, secret, REFRESH_TOKEN_OPTIONS);
}

export function verifyAccessToken(token: string): TokenPayload {
  const secret = process.env.ACCESS_TOKEN_SECRET!;
  return jwt.verify(token, secret) as TokenPayload;
}

export async function verifyRefreshToken(token: string): Promise<TokenPayload> {
  const secret = process.env.REFRESH_TOKEN_SECRET!;
  
  // Periodically cleanup expired tokens (1% chance on each verification)
  if (Math.random() < 0.01) {
    cleanupExpiredTokens().catch(console.error);
  }
  
  return jwt.verify(token, secret) as TokenPayload;
}
