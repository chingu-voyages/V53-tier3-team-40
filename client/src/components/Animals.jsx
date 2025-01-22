import React from "react";
import animals from "../assets/dummydata/animals";

const Animals = () => (
  <div className="w-full max-w-7xl px-4 py-6 bg-gray-200 rounded-3xl shadow-lg">
    <h2 className="text-lg font-semibold mb-6">Our Animals</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {animals.map((animal) => (
        <div 
          key={animal._id} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-[320px]"
        >
          <div className="h-[300px] overflow-hidden">
            <img 
              src={animal.image} 
              alt={animal.name} 
              className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className="p-4 flex-1">
            <h3 className="font-semibold text-lg mb-1">{animal.name}</h3>
            <div className="text-gray-600">
              <p className="capitalize">{animal.animalType}</p>
              <p>{animal.gender}, {animal.age} year{animal.age !== 1 ? 's' : ''} old</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Animals;
