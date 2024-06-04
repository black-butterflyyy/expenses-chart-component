export function calcHeight(amount) {
  if (amount >= 0 && amount <= 10) return 'h-6';
  if (amount >= 11 && amount <= 20) return 'h-12';
  if (amount >= 21 && amount <= 24) return 'h-14';
  if (amount >= 25 && amount <= 30) return 'h-16';
  if (amount >= 31 && amount <= 33) return 'h-20';
  if (amount >= 34 && amount <= 35) return 'h-24';
  if (amount >= 36 && amount <= 45) return 'h-32';
  if (amount >= 46 && amount <= 70) return 'h-36';
  if (amount >= 71 && amount <= 100) return 'h-40';
}
