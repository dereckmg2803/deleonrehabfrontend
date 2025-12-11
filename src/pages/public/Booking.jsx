import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const services = [
    { id: 'orthopedic', name: 'Orthopedic Rehabilitation', duration: '60 min' },
    { id: 'neurological', name: 'Neurological Therapy', duration: '60 min' },
    { id: 'post-surgical', name: 'Post-Surgical Care', duration: '45 min' },
    { id: 'balance', name: 'Balance & Fall Prevention', duration: '45 min' },
    { id: 'pain', name: 'Pain Management', duration: '60 min' },
    { id: 'mobility', name: 'Mobility Training', duration: '45 min' }
  ];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const availableDates = generateDates();

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatDateFull = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.toISOString());
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep === 1 && !selectedService) {
      toast({
        title: "Service Required",
        description: "Please select a service to continue.",
        variant: "destructive"
      });
      return;
    }
    if (currentStep === 2 && (!selectedDate || !selectedTime)) {
      toast({
        title: "Date & Time Required",
        description: "Please select both date and time to continue.",
        variant: "destructive"
      });
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed!",
      description: "Your appointment has been successfully scheduled. We'll send a confirmation email shortly.",
    });
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const steps = [
    { number: 1, title: 'Select Service' },
    { number: 2, title: 'Choose Date & Time' },
    { number: 3, title: 'Your Information' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1a1d23] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your First Session
            </h1>
            <p className="text-xl text-gray-300">
              Schedule your free consultation in just a few steps
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${currentStep > step.number
                      ? 'bg-teal-600 text-white'
                      : currentStep === step.number
                        ? 'bg-teal-600 text-white ring-4 ring-teal-100'
                        : 'bg-gray-200 text-gray-600'
                      }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium hidden sm:block ${currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                      }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-4 transition-all duration-300 ${currentStep > step.number ? 'bg-teal-600' : 'bg-gray-200'
                      }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Step 1: Select Service */}
          {currentStep === 1 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Select Your Service
                </h2>
                <p className="text-gray-600">
                  Choose the type of therapy or rehabilitation service you need
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`p-6 border-2 rounded-xl text-left transition-all duration-200 hover:border-teal-600 hover:shadow-md ${selectedService === service.id
                      ? 'border-teal-600 bg-teal-50 shadow-md'
                      : 'border-gray-200'
                      }`}
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {currentStep === 2 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Choose Date & Time
                </h2>
                <p className="text-gray-600">
                  Select your preferred date and available time slot
                </p>
              </div>

              {/* Date Selection */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                  Select Date
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                  {availableDates.slice(0, 14).map((date, index) => {
                    const isSelected = selectedDate === date.toISOString();
                    return (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(date)}
                        className={`p-3 border-2 rounded-lg text-center transition-all duration-200 hover:border-teal-600 ${isSelected
                          ? 'border-teal-600 bg-teal-50 shadow-md'
                          : 'border-gray-200'
                          }`}
                      >
                        <div className="text-xs text-gray-600 mb-1">
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="font-bold text-gray-900">
                          {date.getDate()}
                        </div>
                        <div className="text-xs text-gray-600">
                          {date.toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-teal-600" />
                    Available Times for {formatDateFull(new Date(selectedDate))}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time;
                      // Randomly mark some as unavailable for realism
                      const isAvailable = Math.random() > 0.3;
                      return (
                        <button
                          key={time}
                          onClick={() => isAvailable && handleTimeSelect(time)}
                          disabled={!isAvailable}
                          className={`p-3 border-2 rounded-lg text-center font-medium transition-all duration-200 ${!isAvailable
                            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                            : isSelected
                              ? 'border-teal-600 bg-teal-600 text-white shadow-md'
                              : 'border-gray-200 hover:border-teal-600'
                            }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Personal Information */}
          {currentStep === 3 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Your Information
                </h2>
                <p className="text-gray-600">
                  Please provide your contact details to complete the booking
                </p>
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">
                  Booking Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">
                        {services.find(s => s.id === selectedService)?.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        Duration: {services.find(s => s.id === selectedService)?.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div className="font-medium text-gray-900">
                      {formatDateFull(new Date(selectedDate))}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div className="font-medium text-gray-900">{selectedTime}</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your condition or any specific concerns..."
                  />
                </div>
              </form>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
            {currentStep > 1 ? (
              <Button
                onClick={prevStep}
                variant="outline"
                className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <Button
                onClick={nextStep}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 ml-auto"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 ml-auto"
              >
                Confirm Booking
                <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;