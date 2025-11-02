import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  minHeight?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
  subtitle,
  minHeight = "min-h-[600px]",
}) => {
  // accept either tailwind minHeight class or fallback
  const minHClass = minHeight || "min-h-[600px]";

  return (
    <div
      className={`
        w-[95%] sm:w-[92%] md:w-[90%] lg:w-[85%] ${minHClass} 
        p-4 sm:p-6 md:p-8 flex flex-col items-center mx-auto my-2 gap-6
      `}
    >
      {title && (
        <>
          <h1 className="mt-5 mb-2 text-2xl sm:text-3xl md:text-3xl font-semibold text-center">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-0 mb-0 text-sm sm:text-base text-center text-gray-300">
              {subtitle}
            </p>
          )}
          <hr className="w-full border-gray-400" />
        </>
      )}
      {children}
    </div>
  );
};

export default PageWrapper;
