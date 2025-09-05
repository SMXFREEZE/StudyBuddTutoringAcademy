
import React, { useRef } from "react";

const HumanIntuitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="about" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>About StudyBudd / À propos de StudyBudd</span>
            </div>
            <h2 className="section-title mb-6">
              Helping students succeed with clarity and motivation<br />
              <span className="text-2xl sm:text-3xl lg:text-4xl">Aider les étudiants à réussir avec clarté et motivation</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At StudyBudd, we believe every student deserves personalized attention and innovative teaching methods. 
              Our approach combines traditional tutoring excellence with modern techniques to create an engaging 
              learning environment that builds both knowledge and confidence.<br /><br />
              <span className="text-base">
                Chez StudyBudd, nous croyons que chaque étudiant mérite une attention personnalisée et des méthodes d'enseignement innovantes. 
                Notre approche combine l'excellence du tutorat traditionnel avec des techniques modernes pour créer un environnement 
                d'apprentissage engageant qui développe à la fois les connaissances et la confiance.
              </span>
            </p>
            <ul className="space-y-4">
              {[
                "Personalized learning plans tailored to each student's unique needs and goals / Plans d'apprentissage personnalisés adaptés aux besoins uniques de chaque étudiant",
                "Patient, professional tutors who adapt their teaching style to match your learning preferences / Tuteurs patients et professionnels qui adaptent leur style d'enseignement à vos préférences d'apprentissage",
                "Flexible scheduling with both individual and group sessions available / Horaires flexibles avec des sessions individuelles et de groupe disponibles",
                "Proven track record of helping students achieve academic success and build confidence / Bilan prouvé d'aide aux étudiants pour atteindre le succès académique et développer la confiance"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Image container div has been removed */}
        </div>
      </div>
    </section>
  );
};

export default HumanIntuitionSection;
