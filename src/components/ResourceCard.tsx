type Resource = {
  id: number;
  title: string;
  description: string;
  link: string;
  category: string;
  gradient: string;
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <div
      className={`
        w-full max-w-[420px]
        bg-linear-to-r ${resource.gradient}
        rounded-2xl border-2 border-white/80 shadow-lg 
        hover:scale-[1.02] transition-transform 
        overflow-hidden p-5 sm:p-6 space-y-4
        text-white
      `}
    >
      {/* Category */}
      <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-black/60 rounded-md">
        {resource.category}
      </span>

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
        {resource.title}
      </h2>

      {/* Description */}
      <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
        {resource.description}
      </p>

      {/* Link */}
      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-cyan-300 underline text-sm sm:text-base hover:text-cyan-400 transition-colors"
      >
        Visit →
      </a>
    </div>
  );
};

export default ResourceCard;
