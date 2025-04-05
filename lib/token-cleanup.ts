import prisma from "./prisma";

export async function cleanupExpiredTokens() {
  try {
    // Delete all expired and revoked tokens
    const deletedTokens = await prisma.refreshToken.deleteMany({
      where: {
        OR: [
          { expiresAt: { lt: new Date() } }, // Delete expired tokens
          { revoked: true } // Delete revoked tokens
        ]
      }
    });

    console.log(`Cleaned up ${deletedTokens.count} expired/revoked refresh tokens`);
    return deletedTokens.count;
  } catch (error) {
    console.error("Error cleaning up expired tokens:", error);
    throw error;
  }
}
