import React from "react";
import { Truck, Shield, Clock, CheckCircle } from "lucide-react";

const LpgTransport = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-16" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/api/placeholder/1920/600')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              LPG Transport{" "}
              <span className="font-extrabold">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Expert petroleum logistics across East Africa since 2006
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Specialized LPG Transport Services
            </h2>
            <p className="text-lg text-gray-600">
              Somo Transporters provides customized solutions for LPG transportation, backed by advanced technologies and an efficient IT system. We maintain a high utilization rate of over 96% with daily truck movements of up to 535 kilometers.
            </p>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Shield className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Safety First</h3>
                  <p className="text-gray-600">Comprehensive HSSE compliance and emergency response protocols</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Truck className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Modern Fleet</h3>
                  <p className="text-gray-600">Standardized and professionally maintained vehicles with GPS tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Reliable Service</h3>
                  <p className="text-gray-600">Expedited and dependable delivery across East Africa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Quality Assurance
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <p className="text-gray-600">Highly trained and vetted drivers</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <p className="text-gray-600">Advanced vehicle monitoring systems</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <p className="text-gray-600">Regular maintenance and inspections</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <p className="text-gray-600">24/7 emergency response capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpgTransport;