function CodeCard({ title, description, image, tags, link }) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="bg-white rounded-2xl overflow-hidden border border-[#0f2d5c]/10 shadow-md 
                        transition-all duration-300 
                        hover:shadow-xl hover:-translate-y-2">
          
          {/* Image */}
          <div className="w-full h-[200px] bg-gradient-to-br from-[#b3d9f2] to-[#d4e8f7] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
  
          {/* Content */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#0f2d5c] m-6 mb-3">
              {title}
            </h3>
  
            <p className="text-sm text-[#556b82] mx-6 mb-4 leading-relaxed">
              {description}
            </p>
  
            <div className="flex flex-wrap gap-2 px-6 pb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#e8f1f8] text-[#0f2d5c] px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    );
  }
  
  export default CodeCard;
  