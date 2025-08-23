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
      className={`w-full max-w-3xl bg-gradient-to-r ${resource.gradient} rounded-2xl border-2 border-[#0068c9d2] shadow-lg cursor-pointer hover:scale-[1.02] transition-transform overflow-hidden p-6 space-y-4`}
    >
      {/* Category */}
      <span className="inline-block px-3 py-1 text-sm font-medium bg-black/60 text-white rounded-md">
        {resource.category}
      </span>

      {/* Title */}
      <h2 className="text-2xl font-bold text-white">{resource.title}</h2>

      {/* Description */}
      <p className="text-gray-200 text-sm leading-relaxed">
        {resource.description}
      </p>

      {/* Link */}
      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 underline text-sm"
      >
        Visit →
      </a>
    </div>
  );
};

export default ResourceCard;
