export const careerRoles = [
  "Digital Marketing Intern",
  "Digital Sales",
  "Frontend Developer",
] as const;

export type CareerRole = (typeof careerRoles)[number];
