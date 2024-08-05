import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL, {
    next: {
      revalidate: 0,
    },
  });

  return response.json();
};

export default getSizes;
