"use client";

import Container from "@/components/ui/container";
import useCard from "@/hooks/use-card";
import CardItem from "./components/card-item";
import Summary from "./components/summary";

const CardPage = () => {
  const cart = useCard();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping cart</h1>
          <div className="mg-12 lg:grid lg:grid-cols-12 lg:items-center gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items added to cart</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CardItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CardPage;
