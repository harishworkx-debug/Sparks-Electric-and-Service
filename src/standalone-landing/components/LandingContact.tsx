import { useState } from 'react';
import { Phone, MapPin, ShieldCheck, Clock, Send, CheckCircle2 } from 'lucide-react';
import { LANDING_CONFIG } from '../landingConfig';

export default function LandingContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'electrical-repair',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-lightgray scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-navy-500 border border-gray-200 text-xs font-semibold uppercase tracking-wider mb-3">
            Get in Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 tracking-tight">
            Contact Local Electrician in Duvall
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            The fastest and most direct way to schedule electrical repairs, panel evaluations, or EV charger installations is by calling us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Phone & Verified Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Box */}
            <div className="rounded-2xl bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 p-8 text-white shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-warmyellow-400">
                Direct Phone Line
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Speak Directly with an Electrician
              </h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                Call to discuss your electrical issue, confirm service availability in Duvall or Snoqualmie Valley, and schedule an appointment.
              </p>

              <div className="mt-6 pt-6 border-t border-navy-400/40">
                <a
                  href={LANDING_CONFIG.phoneLink}
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-bold text-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="h-6 w-6 text-warmyellow-300 fill-warmyellow-300" />
                  <span>{LANDING_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Location & License Details Card */}
            <div className="rounded-2xl bg-white p-7 border border-gray-200 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-500 text-base">Service Base Address</h4>
                  <p className="text-sm text-gray-700 mt-0.5">{LANDING_CONFIG.address.street}</p>
                  <p className="text-xs text-gray-500">
                    {LANDING_CONFIG.address.city}, {LANDING_CONFIG.address.state} {LANDING_CONFIG.address.zip} ({LANDING_CONFIG.address.county})
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-500 text-base">State Contractor License</h4>
                  <p className="text-sm text-gray-700 mt-0.5">{LANDING_CONFIG.licensing}</p>
                  <p className="text-xs text-gray-500">{LANDING_CONFIG.regulatoryBody}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-warmyellow-50 text-warmyellow-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-500 text-base">Service Inquiries</h4>
                  <p className="text-sm text-gray-700 mt-0.5">Monday &ndash; Saturday: 7:00 AM &ndash; 7:00 PM</p>
                  <p className="text-xs text-gray-500">Fast phone response for urgent troubleshooting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Request Service Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-8 sm:p-10 border border-gray-200 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-navy-500">
                Request an Electrical Service Estimate
              </h3>
              <p className="text-sm text-gray-600 mt-1 mb-8">
                Fill out the form below and an electrician will review your project details. For immediate assistance, please call {LANDING_CONFIG.phoneDisplay}.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-900">Message Received</h4>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto">
                    Thank you! We have received your request. A local electrician will contact you at {formData.phone || 'the provided number'} shortly.
                  </p>
                  <div className="pt-4">
                    <a
                      href={LANDING_CONFIG.phoneLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Now for Immediate Assistance</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-navy-500 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-navy-500 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(773) 555-0123"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-navy-500 uppercase tracking-wider mb-2">
                      Service Requested *
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none text-sm bg-white transition-all"
                    >
                      <option value="electrical-repair">Electrical Repair &amp; Troubleshooting</option>
                      <option value="panel-upgrades">Electrical Panel Upgrade (200-Amp)</option>
                      <option value="ev-chargers">Level 2 EV Charger Installation</option>
                      <option value="wiring">Electrical Wiring / Rewiring</option>
                      <option value="lighting-fans">Lighting &amp; Ceiling Fan Installation</option>
                      <option value="generators">Generator Transfer Switch</option>
                      <option value="other">Other Electrical Service</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-navy-500 uppercase tracking-wider mb-2">
                      Project Details / Issues Observed
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the electrical issue or what you need installed in your Duvall home..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-500 focus:border-electric-500 outline-none text-sm transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-bold text-base shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Service Inquiry</span>
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Your information is kept strictly private. For immediate service, call {LANDING_CONFIG.phoneDisplay}.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
