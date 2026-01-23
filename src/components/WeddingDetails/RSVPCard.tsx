import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { cn } from "../../utils/cn";
import axios from "axios";

const RSVPSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .required("Full name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  attending: Yup.string()
    .oneOf(["yes", "no"], "Please select an option")
    .required("Please let us know if you're attending"),
  guests: Yup.string().required("Please select number of guests"),
  message: Yup.string().max(500, "Message is too long"),
});

interface RSVPFormValues {
  name: string;
  email: string;
  attending: string;
  guests: string;
  message: string;
}

const initialValues: RSVPFormValues = {
  name: "",
  email: "",
  attending: "",
  guests: "1",
  message: "",
};

export const RSVPCard = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values: RSVPFormValues) => {
    try {
      // await axios.post("http://localhost:5000/rsvp", values); local host for testing
      await axios.post("https://dnbackend.onrender.com/rsvp", values); // production backend
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Submission failed, try again");
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-purple-50 to-amber-50 rounded-2xl p-8 md:p-10 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-stone-800 mb-2">Thank You!</h3>
        <p className="text-stone-600">Your RSVP has been received. We can&apos;t wait to celebrate with you!</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-stone-100"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-rose-100 to-purple-100 mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-rose-600">
            <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            <path d="M18 15.28c.35-.14.74-.18 1.12-.13 1.08.14 1.88 1.1 1.88 2.2v.65c0 1.1-.8 2.06-1.88 2.2-.38.05-.77.01-1.12-.13" />
            <path d="M18 21h.01" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-stone-800">RSVP</h3>
        <p className="text-stone-500 text-sm mt-1">Kindly let us know if you&apos;ll be joining us</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={RSVPSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-1.5">
                  Full Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 text-stone-700",
                    errors.name && touched.name
                      ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                      : "border-stone-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                  )}
                />
                <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1.5">
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 text-stone-700",
                    errors.email && touched.email
                      ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                      : "border-stone-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                  )}
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="attending" className="block text-sm font-medium text-stone-600 mb-1.5">
                  Will you be attending?
                </label>
                <Field
                  as="select"
                  name="attending"
                  id="attending"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 text-stone-700 bg-white",
                    errors.attending && touched.attending
                      ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                      : "border-stone-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                  )}
                >
                  <option value="">Select...</option>
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </Field>
                <ErrorMessage name="attending" component="p" className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-stone-600 mb-1.5">
                  Number of Guests
                </label>
                <Field
                  as="select"
                  name="guests"
                  id="guests"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all duration-200 text-stone-700 bg-white"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="guests" component="p" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-1.5">
                Message for the Couple (Optional)
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                rows={3}
                placeholder="Share your wishes..."
                className={cn(
                  "w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 text-stone-700 resize-none",
                  errors.message && touched.message
                    ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-stone-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                )}
              />
              <ErrorMessage name="message" component="p" className="text-red-500 text-xs mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-4 rounded-xl font-medium text-white transition-all duration-300",
                isSubmitting
                  ? "bg-stone-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              )}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send RSVP"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};
