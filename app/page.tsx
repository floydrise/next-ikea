import { IKEACarousel } from "@/components/IKEACarousel";

export default function Home() {
  return (
    <div className={"flex my-10 mx-4 xl:mx-0 xl:ml-22"}>
      <IKEACarousel imgUrls={["/CarouselImg1.jpg", "/CarouselImg2.jpg"]} />
    </div>
  );
}
