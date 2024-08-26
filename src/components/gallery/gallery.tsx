type TGalleryProps = {
  images: string[];
  maxCount: number;
};

function Gallery({ images, maxCount }: TGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.slice(0, maxCount).map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
