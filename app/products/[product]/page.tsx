import Image from "next/image";
import books from "../../../public/books.jpg";

export async function generateStaticParams() {
  const products: number[] = [1, 2, 3, 4, 5, 6];

  return products.map((product) => ({
    product: product,
  }));
}

async function getData(id: number) {
  const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export const metadata = {
  title: "PRODUCT",
};




export default async function GiveProductDetail(props: any) {
  // console.log(props);
  const product = await getData(props.params.product);

  
  // console.log(product);
  return (
    <div>
      <div className="md:px-[50px] px-[20px] grid grid-col-1 md:grid-cols-2 py-5">
        <div className="md:flex">
          <Image src={books} width={700} height={200} alt="books"></Image>
        </div>
        <div className=" bg-gray-300 w-auto">
          <div className="grid m-5 p-5">
            <div>
              <p className="text-3xl lg:text-5xl uppercase font-bold  my-3">
                {product.name}
              </p>

              <hr />
            </div>
            <div className="grid grid-cols-2 my-3">
              <p className=" text-1xl md:text-2xl  text-orange-800 uppercase">
                Price:
              </p>
              <p className="text-1xl md:text-2xl  text-teal-900 font-bold">
                $ {product.price}
              </p>
            </div>
            <hr />

            <div className="grid grid-cols-2 my-3">
              <p className=" text-1xl md:text-2xl  text-orange-800 uppercase">
                Name:
              </p>
              <p className="text-1xl md:text-2xl  text-teal-900">
                {product.name}
              </p>
            </div>
            <hr />

            <div className="grid grid-cols-2 my-3">
              <p className=" text-1xl md:text-2xl  text-orange-800 uppercase">
                Type:
              </p>
              <p className="text-1xl md:text-2xl  text-teal-900">
                {product.type}
              </p>
            </div>
            <hr />

            <div className="grid grid-cols-2 my-3">
              <p className=" text-1xl md:text-2xl  text-orange-800 uppercase">
                Author:
              </p>
              <p className="text-1xl md:text-2xl  text-teal-900">
                {product.author}
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
