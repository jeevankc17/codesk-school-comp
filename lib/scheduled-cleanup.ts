import { cleanupExpiredTokens } from "./token-cleanup";

let cleanupInterval: NodeJS.Timeout;

export function startTokenCleanupSchedule() {
  // Run cleanup every 24 hours
  const CLEANUP_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  
  // Initial cleanup
  cleanupExpiredTokens().catch(console.error);
  
  // Schedule regular cleanup
  cleanupInterval = setInterval(() => {
    cleanupExpiredTokens().catch(console.error);
  }, CLEANUP_INTERVAL);
}

export function stopTokenCleanupSchedule() {
  if (cleanupInterval) {
    clearInterval(cleanupInterval);
  }
}
