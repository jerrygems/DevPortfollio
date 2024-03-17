import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100 py-16 w-screen h-screen flex items-center justify-center ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <p className="text-gray-600 text-center mb-12">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natur
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-mobile-alt fa-2x"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">UX Research</h3>
            <p className="text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
            </p>
          </div>
          <div className="bg-yellow-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-code fa-2x"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
            </p>
          </div>
          <div className="bg-pink-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-mobile-alt fa-2x"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">App Design</h3>
            <p className="text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
            </p>
          </div>
          <div className="bg-green-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-globe fa-2x"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Web Design</h3>
            <p className="text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velitesse
              cillum dolore eu fugiat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
