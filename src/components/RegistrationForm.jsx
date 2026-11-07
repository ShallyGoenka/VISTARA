import React, { useState } from 'react';
import { Check, AlertCircle, Loader2, Lock } from 'lucide-react';
import { validateName, validateEmail, validatePhone } from '../utils/validators';
import { useRegistrations } from '../context/RegistrationsContext';

export default function RegistrationForm({ event, onSuccess }) {
  const { addRegistration, isAlreadyRegistered } = useRegistrations();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [duplicateError, setDuplicateError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const runValidation = (field, value) => {
    let result = { isValid: true, error: '' };
    if (field === 'name') result = validateName(value);
    if (field === 'email') result = validateEmail(value);
    if (field === 'phone') result = validatePhone(value);

    setErrors(prev => ({ ...prev, [field]: result.error }));
    return result.isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setDuplicateError('');

    // If already touched, validate live
    if (touched[name]) {
      runValidation(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    runValidation(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({ name: true, email: true, phone: true });

    const isNameValid = runValidation('name', formData.name);
    const isEmailValid = runValidation('email', formData.email);
    const isPhoneValid = runValidation('phone', formData.phone);

    if (!isNameValid || !isEmailValid || !isPhoneValid) {
      return;
    }

    // Check for duplicate registration
    if (isAlreadyRegistered(formData.email, event.id)) {
      setDuplicateError(
        'You have already registered for this event with this email. Check "My Registrations" to view your pass, or use a different email.'
      );
      return;
    }

    // Show brief loading state of about 600ms
    setIsSubmitting(true);
    setTimeout(() => {
      const reg = addRegistration({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventId: event.id,
        eventName: event.name,
        eventDate: event.date,
        venue: event.venue,
        image: event.image
      });
      setIsSubmitting(false);
      onSuccess(reg);
    }, 600);
  };

  const isFieldValid = (field) => touched[field] && !errors[field] && formData[field].trim() !== '';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {duplicateError && (
        <div
          role="alert"
          className="p-3.5 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 flex items-start gap-2.5 text-xs text-red-700 dark:text-red-400"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
          <p className="leading-relaxed">{duplicateError}</p>
        </div>
      )}

      {/* Selected Event (Read-only) */}
      <div>
        <label htmlFor="reg-event" className="block text-xs font-semibold text-charcoal/80 dark:text-dark-text/80 uppercase tracking-meta mb-1.5">
          Selected Event
        </label>
        <div className="relative">
          <input
            id="reg-event"
            type="text"
            readOnly
            value={event.name}
            className="w-full px-3.5 py-2.5 min-h-[44px] bg-sand/20 dark:bg-white/5 border border-sand dark:border-white/10 rounded-lg text-sm text-charcoal/80 dark:text-dark-text/80 cursor-not-allowed select-none pr-10 font-medium"
          />
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-charcoal/40 dark:text-white/30">
            <Lock className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="reg-name" className="block text-xs font-semibold text-charcoal/80 dark:text-dark-text/80 uppercase tracking-meta mb-1.5">
          Full Name <span className="text-burgundy dark:text-burgundy-dark">*</span>
        </label>
        <div className="relative">
          <input
            id="reg-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Ananya Sharma"
            className={`w-full px-3.5 py-2.5 min-h-[44px] bg-white dark:bg-dark-card border rounded-lg text-sm text-charcoal dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-muted/50 transition-all focus:outline-none focus:ring-2 focus:ring-burgundy ${
              errors.name && touched.name
                ? 'border-red-500 focus:ring-red-500 pr-10'
                : isFieldValid('name')
                ? 'border-emerald-600/60 dark:border-emerald-500/60 pr-10'
                : 'border-sand dark:border-white/10 hover:border-charcoal/30'
            }`}
            aria-invalid={errors.name && touched.name ? 'true' : 'false'}
            aria-describedby={errors.name && touched.name ? 'reg-name-error' : undefined}
          />
          {/* Subtle green check when valid */}
          {isFieldValid('name') && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
          )}
          {errors.name && touched.name && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500">
              <AlertCircle className="w-4 h-4" />
            </div>
          )}
        </div>
        {errors.name && touched.name && (
          <p id="reg-name-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 font-sans">
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="reg-email" className="block text-xs font-semibold text-charcoal/80 dark:text-dark-text/80 uppercase tracking-meta mb-1.5">
          Email Address <span className="text-burgundy dark:text-burgundy-dark">*</span>
        </label>
        <div className="relative">
          <input
            id="reg-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. ananya@domain.com"
            className={`w-full px-3.5 py-2.5 min-h-[44px] bg-white dark:bg-dark-card border rounded-lg text-sm text-charcoal dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-muted/50 transition-all focus:outline-none focus:ring-2 focus:ring-burgundy ${
              errors.email && touched.email
                ? 'border-red-500 focus:ring-red-500 pr-10'
                : isFieldValid('email')
                ? 'border-emerald-600/60 dark:border-emerald-500/60 pr-10'
                : 'border-sand dark:border-white/10 hover:border-charcoal/30'
            }`}
            aria-invalid={errors.email && touched.email ? 'true' : 'false'}
            aria-describedby={errors.email && touched.email ? 'reg-email-error' : undefined}
          />
          {isFieldValid('email') && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
          )}
          {errors.email && touched.email && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500">
              <AlertCircle className="w-4 h-4" />
            </div>
          )}
        </div>
        {errors.email && touched.email && (
          <p id="reg-email-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 font-sans">
            <span>{errors.email}</span>
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="reg-phone" className="block text-xs font-semibold text-charcoal/80 dark:text-dark-text/80 uppercase tracking-meta mb-1.5">
          Phone Number <span className="text-burgundy dark:text-burgundy-dark">*</span>
        </label>
        <div className="relative">
          <input
            id="reg-phone"
            name="phone"
            type="tel"
            maxLength={10}
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="10-digit mobile number"
            className={`w-full px-3.5 py-2.5 min-h-[44px] bg-white dark:bg-dark-card border rounded-lg text-sm text-charcoal dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-muted/50 transition-all focus:outline-none focus:ring-2 focus:ring-burgundy ${
              errors.phone && touched.phone
                ? 'border-red-500 focus:ring-red-500 pr-10'
                : isFieldValid('phone')
                ? 'border-emerald-600/60 dark:border-emerald-500/60 pr-10'
                : 'border-sand dark:border-white/10 hover:border-charcoal/30'
            }`}
            aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
            aria-describedby={errors.phone && touched.phone ? 'reg-phone-error' : undefined}
          />
          {isFieldValid('phone') && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
          )}
          {errors.phone && touched.phone && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500">
              <AlertCircle className="w-4 h-4" />
            </div>
          )}
        </div>
        {errors.phone && touched.phone && (
          <p id="reg-phone-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1 font-sans">
            <span>{errors.phone}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full shadow-soft-md min-h-[48px] text-sm tracking-wide font-medium"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Saving your spot...</span>
            </span>
          ) : (
            <span>Reserve Spot &mdash; {event.price === 0 ? 'Free' : `₹${event.price.toLocaleString('en-IN')}`}</span>
          )}
        </button>
      </div>

      <p className="text-[11px] text-center text-charcoal/50 dark:text-dark-muted leading-relaxed">
        Need to change plans? You can cancel your pass anytime from My Registrations.
      </p>
    </form>
  );
}
