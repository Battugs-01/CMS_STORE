import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL, {
    next: {
      revalidate: 0,
    },
  });

  return response.json();
};

export default getCategories;
