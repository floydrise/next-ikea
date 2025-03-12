import { IKEACarousel } from "@/components/IKEACarousel";
import { OrderAndBuy } from "@/components/OrderAndBuy";

export default function Home() {
  return (
    <div>
      <div className={"flex flex-col my-16 mx-4 md:mx-0 xl:ml-22"}>
        <IKEACarousel imgUrls={["/CarouselImg1.jpg", "/CarouselImg2.jpg"]} />
        <OrderAndBuy />
        <h1 className={"mt-16 font-bold text-2xl"}>Сега в ИКЕА</h1>
      </div>
    </div>
  );
}
