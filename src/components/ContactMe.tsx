import { Mail, Phone, Facebook, Instagram, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Hardcoded EmailJS credentials
  const emailjsConfig = {
    serviceId: 'service_3ibazqz', 
    templateId: 'template_fslgagk',
    publicKey: '4u5cGEMWBlybR2bQr' 
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(emailjsConfig.publicKey);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Basic validation
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    setSubmitStatus({
      success: false,
      message: 'Please fill out all fields.'
    });
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    // Debug log
    console.log('Attempting to send with:', {
      serviceId: emailjsConfig.serviceId,
      templateId: emailjsConfig.templateId,
      publicKey: emailjsConfig.publicKey
    });

    // Send main message to yourself
    const mainResponse = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      }
    );
    console.log('Main message response:', mainResponse);

    // Send auto-reply
    const autoReplyResponse = await emailjs.send(
      emailjsConfig.serviceId,
      'template_cl2yp3i', 
      {
        to_name: formData.name,
        to_email: formData.email
      }
    );
    console.log('Auto-reply response:', autoReplyResponse);

    setSubmitStatus({
      success: true,
      message: 'Message sent successfully! Check your email for confirmation.'
    });
    setFormData({ name: '', email: '', message: '' });

  } catch (error: any) {
    console.error('Full error details:', {
      error: error,
      message: error?.message,
      text: error?.text,
      status: error?.status
    });

    let errorMessage = 'Failed to send message. ';
    if (error?.status === 400) {
      errorMessage += 'Invalid template or service ID.';
    } else if (error?.status === 429) {
      errorMessage += 'Too many requests. Please try again later.';
    } else {
      errorMessage += 'Please try again later.';
    }

    setSubmitStatus({
      success: false,
      message: errorMessage + ' Or contact me directly at villanuevajohn519@gmail.com'
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto animate-scale-in" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="group relative p-8 bg-white/5 border border-white/10 rounded-xl transition-all duration-300">
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              {/* Location */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-white/5 rounded-lg">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400 text-sm">
                    Cabadbaran City, Agusan del Norte, Philippines
                  </p>
                </div>
              </div>

              {/* Gmail */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-white/5 rounded-lg">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a 
                    href="mailto:villanuevajohn519@gmail.com"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    villanuevajohn519@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-white/5 rounded-lg">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a 
                    href="tel:09478294412"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    +63 947 829 4412
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-4">Social Media</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/AZHLEEH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    title="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/ashzyed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    title="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-8">
            <div className="group relative p-8 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-opacity duration-300">
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.success 
                    ? 'bg-green-900/50 border border-green-400' 
                    : 'bg-red-900/50 border border-red-400'
                }`}>
                  <p className={submitStatus.success ? 'text-green-300' : 'text-red-300'}>
                    {submitStatus.message}
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors resize-vertical"
                    placeholder="Tell me about your project or just say hello!"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 mt-16 flex justify-center">
          <div className="w-full mx-auto bg-white/10 border border-white/20 rounded-xl text-center text-gray-300 shadow-lg transition-all duration-300 hover:border-white/30 hover:scale-105">
            <span className="block py-4 px-6 text-sm md:text-base font-medium">
              © 2025 John Ashley Villanueva. All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactMe;