"use client";

import React from 'react';
import { MapPin, Clock, Phone, Mail, Star, TrendingUp, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, label: "Active Physios", value: "500+" },
    { icon: Star, label: "Average Rating", value: "4.8" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ];

  const popularLocations = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
  ];

  const popularSpecializations = [
    "Sports Injury",
    "Back Pain",
    "Neurological Rehab",
    "Joint Pain",
    "Stroke Recovery",
  ];

  return (
    <div className="w-full mt-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stats Section */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Stats</h3>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-6 h-6 text-[#35B6B4] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Locations */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Locations</h3>
            <div className="space-y-2">
              {popularLocations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#35B6B4] cursor-pointer transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Specializations */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Specializations</h3>
            <div className="space-y-2">
              {popularSpecializations.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#35B6B4] cursor-pointer transition-colors"
                >
                  <Star className="w-4 h-4" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-br from-[#35B6B4] to-[#003A70] rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>support@call2physio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#35B6B4]/10 rounded-lg">
                <Star className="w-5 h-5 text-[#35B6B4]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Verified Professionals</h4>
                <p className="text-sm text-gray-600">All physios are verified and licensed</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#35B6B4]/10 rounded-lg">
                <Clock className="w-5 h-5 text-[#35B6B4]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Quick Response</h4>
                <p className="text-sm text-gray-600">Get appointments within 24 hours</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#35B6B4]/10 rounded-lg">
                <Users className="w-5 h-5 text-[#35B6B4]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Expert Care</h4>
                <p className="text-sm text-gray-600">Specialized treatment for all conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection; 