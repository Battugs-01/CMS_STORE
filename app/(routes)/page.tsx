import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards(
    "d8d3e8c6-0a07-4bd1-b511-c9f7a7e203b0"
  );
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
