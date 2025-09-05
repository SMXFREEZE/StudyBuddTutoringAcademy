
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience Excellence Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            StudyBudd Academy is designed to transform how students learn and excel 
            in their academic journey from primary school to CEGEP.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
            <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center py-16">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-full p-8 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/3417fc76-06df-48dd-8e8b-4e1299bee829.png" 
                      alt="StudyBudd Academy - Quality Learning" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation Learning</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built with innovative teaching methods and personalized attention, StudyBudd Academy seamlessly 
              integrates into students' learning journeys, providing quality tutoring and enriching academic experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
