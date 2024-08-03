import { Category } from "@/types";

const url = `${process.env.NODE_ENV}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(url);
  const categories = await response.json();
  return categories;
};

export default getCategories;
