const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 mt-28 dark:bg-dark dark:text-light xl:p-24 xl:m-0 lg:p-16 lg:mt-8 md:p-12 md:mt-0 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
