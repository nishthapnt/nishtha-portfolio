function DesignCard({ image, onClick }) {
    return (
      <div
        onClick={onClick}
        className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
      >
        {/* This div creates the square */}
        <div className="w-full pt-[100%]"></div>
  
        {/* Image absolutely positioned inside */}
        <img
          src={image.src}
          alt={image.title}
          className="absolute inset-0 w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
    );
  }
  
  export default DesignCard;
  