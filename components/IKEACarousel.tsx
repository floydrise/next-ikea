import {CarouselCard} from "@/components/CarouselCard";

export const IKEACarousel = ({ imgUrls }: { imgUrls: string[] }) => {
  return (
      <div>
        {imgUrls.map((url, index) => (
            <CarouselCard key={index} imgUrls={url}/>
        ))}
      </div>
  );
};
