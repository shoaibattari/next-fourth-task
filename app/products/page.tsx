import Image from "next/image";
import { Inter } from "next/font/google";
import books from "../../public/books.jpg";
import Link from "next/link";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const res = await fetch("https://simple-books-api.glitch.me/books", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export const metadata = {
  title: "ALL PRODUCTS",
};

export default async function Home() {
  const products = await getData();
  return (
    <section>
      <div>
        <div className="md:px-[60px] px-[20px] grid place-items-center gap-x-40 grid-col-2 md:grid-cols-3 py-5">
          {products.map((ele: { id: number; name: string; type: string }) => (
            <div key={ele.id} className="mt-10  ">
              <Link href={`/products/${ele.id}`}>
                <div>
                  <Image
                    src={books}
                    width={300}
                    height={100}
                    alt="books"
                  ></Image>
                </div>
              </Link>
              <div className="mt-3">
                <p className="text-2xl text-orange-800 uppercase">{ele.name}</p>
                <p className="text-1xl text-gray-700 uppercase"> {ele.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
