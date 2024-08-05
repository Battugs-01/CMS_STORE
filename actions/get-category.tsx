import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${URL}/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  return response.json();
};

export default getCategory;
