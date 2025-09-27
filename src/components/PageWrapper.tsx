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
  return (
    <div
      className={`w-full ${minHeight} p-5 flex flex-col items-center mx-auto my-2 gap-6`}
    >
      {title && (
        <>
          <h1 className="mt-5 mb-2 text-3xl font-semibold">{title}</h1>
          {subtitle && <p className="mt-[-20px] mb-[-10px] p-0">{subtitle}</p>}
          <hr className="w-full border-gray-400" />
        </>
      )}
      {children}
    </div>
  );
};

export default PageWrapper;
