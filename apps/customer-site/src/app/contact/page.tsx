
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organizationType: 'individual',
    organizationName: '',
    projectAddress: '',
    projectType: 'consultation',
    preferredDate: '',
    preferredTime: '',
    courtSize: '',
    surfaceCondition: '',
    timeline: '',
    budget: '',
    message: '',
    agreedToPolicies: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // This would typically submit to an API endpoint that saves to the dealer portal
      const response = await fetch('/api/contact-appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          organizationType: 'individual',
          organizationName: '',
          projectAddress: '',
          projectType: 'consultation',
          preferredDate: '',
          preferredTime: '',
          courtSize: '',
          surfaceCondition: '',
          timeline: '',
          budget: '',
          message: '',
          agreedToPolicies: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold font-heading leading-7 text-blue-600">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let&apos;s Build Your Dream Court
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready to take the next step? Fill out the form below to schedule a consultation and get a free, no-obligation quote for your pickleball court project.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mx-auto mt-8 max-w-xl p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Request Submitted Successfully!
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Thank you for your interest! We&apos;ll review your request and contact you within 24 hours to confirm your appointment.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mx-auto mt-8 max-w-xl p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Submission Error
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>There was an error submitting your request. Please try again or call us directly at (540) 473-8250.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="organizationType" className="block text-sm font-semibold leading-6 text-gray-900">
                Organization Type
              </label>
              <div className="mt-2.5">
                <select
                  name="organizationType"
                  id="organizationType"
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="individual">Individual/Homeowner</option>
                  <option value="hoa">Homeowners Association (HOA)</option>
                  <option value="municipality">Municipality/Government</option>
                  <option value="school">School/Educational</option>
                  <option value="church">Church/Religious</option>
                  <option value="business">Business/Commercial</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {formData.organizationType !== 'individual' && (
              <div className="sm:col-span-2">
                <label htmlFor="organizationName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Organization Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="organizationName"
                    id="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}

            <div className="sm:col-span-2">
              <label htmlFor="projectAddress" className="block text-sm font-semibold leading-6 text-gray-900">
                Project Address <span className="text-gray-500">(Where the court will be located)</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="projectAddress"
                  id="projectAddress"
                  value={formData.projectAddress}
                  onChange={handleInputChange}
                  required
                  placeholder="123 Main St, City, State ZIP"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="projectType" className="block text-sm font-semibold leading-6 text-gray-900">
                Service Level Interested In
              </label>
              <div className="mt-2.5">
                <select
                  name="projectType"
                  id="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="consultation">Initial Consultation (Free)</option>
                  <option value="level1">Level 1 - DIY Resources ($0)</option>
                  <option value="level2">Level 2 - Monthly Membership ($49.99/month)</option>
                  <option value="level3">Level 3 - Coating & Lining Specialist ($10,000-15,000)</option>
                  <option value="level4">Level 4 - Project Management + Finish ($15,000-25,000)</option>
                  <option value="level5">Level 5 - Full Project Management ($30,000-45,000)</option>
                  <option value="level5_5">Level 5.5 - Premium Personalized (Contact for Pricing)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-sm font-semibold leading-6 text-gray-900">
                Preferred Date
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="preferredDate"
                  id="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-semibold leading-6 text-gray-900">
                Preferred Time
              </label>
              <div className="mt-2.5">
                <select
                  name="preferredTime"
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="courtSize" className="block text-sm font-semibold leading-6 text-gray-900">
                Court Size <span className="text-gray-500">(Optional - helps with accurate quoting)</span>
              </label>
              <div className="mt-2.5">
                <select
                  name="courtSize"
                  id="courtSize"
                  value={formData.courtSize}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select court size</option>
                  <option value="20x44">20' x 44' (Standard Pickleball)</option>
                  <option value="30x60">30' x 60' (Recommended with buffer)</option>
                  <option value="36x78">36' x 78' (Tournament Size)</option>
                  <option value="multiple">Multiple Courts</option>
                  <option value="custom">Custom Size</option>
                  <option value="unknown">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="surfaceCondition" className="block text-sm font-semibold leading-6 text-gray-900">
                Current Surface Condition <span className="text-gray-500">(Optional)</span>
              </label>
              <div className="mt-2.5">
                <select
                  name="surfaceCondition"
                  id="surfaceCondition"
                  value={formData.surfaceCondition}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select condition</option>
                  <option value="new">New construction (no existing surface)</option>
                  <option value="excellent">Excellent (minor touch-ups needed)</option>
                  <option value="good">Good (moderate repairs needed)</option>
                  <option value="fair">Fair (significant repairs needed)</option>
                  <option value="poor">Poor (major renovation required)</option>
                  <option value="unknown">Not sure / Need assessment</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold leading-6 text-gray-900">
                Desired Timeline <span className="text-gray-500">(Optional)</span>
              </label>
              <div className="mt-2.5">
                <select
                  name="timeline"
                  id="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (Rush job)</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="next-year">Next year</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-gray-900">
                Budget Range <span className="text-gray-500">(Optional - helps us recommend the right service level)</span>
              </label>
              <div className="mt-2.5">
                <select
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-20k">$10,000 - $20,000</option>
                  <option value="20k-35k">$20,000 - $35,000</option>
                  <option value="35k-50k">$35,000 - $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Additional Details
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project goals, timeline, budget considerations, or any specific questions..."
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <input
                  id="agreedToPolicies"
                  name="agreedToPolicies"
                  type="checkbox"
                  checked={formData.agreedToPolicies}
                  onChange={handleInputChange}
                  required
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                />
              </div>
              <label htmlFor="agreedToPolicies" className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{
                ' '}
                <a href="#" className="font-semibold text-blue-600">
                  privacy&nbsp;policy
                </a>
                {' '}and consent to be contacted about your project.
              </label>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreedToPolicies}
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting Request...' : 'Schedule My Consultation'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
