export const workData = [
  
];

export function getWorkByType(type) {
  if (type === 'all') return workData;
  return workData.filter((item) => item.type === type);
}

export function getFeaturedWork() {
  return workData.filter((item) => item.featured);
}
