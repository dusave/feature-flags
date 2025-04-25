import MurmurHash3 from 'murmurhash3js';

/**
 * Converts a string input into a normalized float between [0, 1) using MurmurHash3.
 *
 * @param {string} input - The input string to hash.
 * @returns {number} A float between 0 (inclusive) and 1 (exclusive).
 */
export function hashToPercentage(input: string): number {
  const hash32 = MurmurHash3.x86.hash32(input, 0);
  const unsignedHash = Math.abs(hash32); // Ensures a non-negative integer

  // Normalize to [0, 1) by dividing by 2^32
  const floatValue = unsignedHash / Math.pow(2, 32);

  return floatValue;
}