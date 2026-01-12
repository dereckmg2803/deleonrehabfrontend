import React, { useState } from 'react';
import { CheckCircle2, Users, Heart, TrendingUp, Clock, DollarSign, Mail, Phone, User, Briefcase, FileText } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    license_type: '',
    license_number: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${API}/applicants`, formData);
      setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We will contact you soon.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        license_type: '',
        license_number: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to submit application. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Schedules',
      description: 'Work-life balance that fits your lifestyle and commitments.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Supportive Team',
      description: 'Collaborative environment with experienced professionals who care.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Competitive Compensation',
      description: 'Fair pay that reflects your expertise and dedication.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth Opportunities',
      description: 'Professional development and career advancement paths.'
    }
  ];

  const requirements = [
    'Licensed DPT (Doctor of Physical Therapy) or PTA (Physical Therapy Assistant)',
    'Patient-centered approach to care and rehabilitation',
    'Strong professional ethics and commitment to excellence',
    'Excellent communication and interpersonal skills',
    'Experience in home health or outpatient rehabilitation (preferred)',
    'Valid driver\'s license and reliable transportation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-wider text-teal-100 font-medium">
              Careers at De Leon Rehab
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 max-w-3xl mx-auto mb-8 leading-relaxed">
            Make a meaningful impact on patients' lives while growing your career in a supportive, professional environment.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-lg font-semibold shadow-xl transition-all duration-200 hover:shadow-2xl"
            data-testid="hero-apply-button"
          >
            Apply Today
          </Button>
        </div>
      </section>

      {/* About Section 
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About De Leon Rehab Inc
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a dedicated physical therapy practice committed to providing exceptional
              home-based rehabilitation services. Our mission is to help patients recover and
              thrive in the comfort of their own homes, with compassionate, expert care.
            </p>
          </div>
        </div>
      </section>
*/}
      {/* What We Offer Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that values your expertise and supports your professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-teal-500">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We're Looking For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We seek passionate, licensed professionals who share our commitment to patient care.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100">
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apply Now
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step towards joining our team. Fill out the form below and we'll be in touch soon.
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="John Doe"
                    data-testid="applicant-name-input"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="john.doe@example.com"
                    data-testid="applicant-email-input"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="(555) 123-4567"
                    data-testid="applicant-phone-input"
                  />
                </div>
              </div>

              {/* License Type */}
              <div>
                <label htmlFor="license_type" className="block text-sm font-semibold text-gray-700 mb-2">
                  License Type *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    id="license_type"
                    name="license_type"
                    value={formData.license_type}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent appearance-none bg-white"
                    data-testid="applicant-license-type-select"
                  >
                    <option value="">Select License Type</option>
                    <option value="DPT">DPT - Doctor of Physical Therapy</option>
                    <option value="PTA">PTA - Physical Therapy Assistant</option>
                  </select>
                </div>
              </div>

              {/* License Number */}
              <div>
                <label htmlFor="license_number" className="block text-sm font-semibold text-gray-700 mb-2">
                  License Number *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="license_number"
                    name="license_number"
                    value={formData.license_number}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="PT123456"
                    data-testid="applicant-license-number-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none"
                  placeholder="Share your experience, specialties, and why you'd like to join De Leon Rehab..."
                  data-testid="applicant-message-textarea"
                />
              </div>

              {/* Submit Status */}
              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border-2 border-green-200' : 'bg-red-50 text-red-800 border-2 border-red-200'}`}>
                  <p className="font-medium">{submitStatus.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="submit-application-button"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-teal-100" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Join our team and help patients achieve their rehabilitation goals in the comfort of their homes.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg rounded-lg font-semibold shadow-xl transition-all duration-200 hover:shadow-2xl"
            data-testid="footer-apply-button"
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
