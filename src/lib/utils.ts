// Import clsx for conditional className construction
import { clsx, type ClassValue } from "clsx";
// Import twMerge to merge Tailwind CSS classes and avoid conflicts
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine and merge class names.
 * Uses clsx for conditional logic and twMerge to resolve Tailwind CSS conflicts.
 * @param inputs - Array of class values (strings, objects, arrays)
 * @returns A single merged className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
