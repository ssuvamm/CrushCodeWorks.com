import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const company = {
  name: 'CrushCodeWorks',
  url: 'https://crushcodeworks.com',
  email: 'hello@crushcodeworks.com',
  phone: '+91 90000 00000',
  pricing: {
    base: '₹30k',
    ecommerce: '₹50k+'
  }
};
