export const categories = ["Blog", "Project", "Resume"] as const;

export type Category = typeof categories[number];