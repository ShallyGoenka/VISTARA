/**
 * Validation utilities for Vistara registration forms
 */

export const validateName = (name) => {
  if (!name || !name.trim()) {
    return { isValid: false, error: 'Full name is required' };
  }
  const trimmed = name.trim();
  if (trimmed.length < 3) {
    return { isValid: false, error: 'Name must be at least 3 characters' };
  }
  // Letters and spaces only
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(trimmed)) {
    return { isValid: false, error: 'Letters and spaces only' };
  }
  return { isValid: true, error: '' };
};

export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return { isValid: false, error: 'Email address is required' };
  }
  const trimmed = email.trim();
  // Valid email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  return { isValid: true, error: '' };
};

export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return { isValid: false, error: 'Phone number is required' };
  }
  const trimmed = phone.trim();
  // Exactly 10 digits, numbers only
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(trimmed)) {
    return { isValid: false, error: 'Phone must be exactly 10 digits' };
  }
  return { isValid: true, error: '' };
};

export const validateField = (fieldName, value) => {
  switch (fieldName) {
    case 'name':
      return validateName(value);
    case 'email':
      return validateEmail(value);
    case 'phone':
      return validatePhone(value);
    default:
      return { isValid: true, error: '' };
  }
};

