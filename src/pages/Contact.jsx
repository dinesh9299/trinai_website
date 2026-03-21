import React, { useEffect, useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import { IoMdMail } from "react-icons/io";
import { TiSupport } from "react-icons/ti";
import { MdCall, MdPrecisionManufacturing } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { ScrollTop } from "primereact/scrolltop";
import { Turnstile } from "@marsidev/react-turnstile";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Turnstile state
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const turnstileRef = useRef(null);

  // 🔄 Cloudflare Turnstile Config - YOUR SITE KEY
  const TURNSTILE_CONFIG = {
    siteKey: "0x4AAAAAACuHkkNabbbUTjv3", // ← Your Site Key
  };

  // 🔄 API URL for backend (uses env var or fallback)
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

  useEffect(() => {
    window.scrollTo(0, 0);
    // ✅ EmailJS init removed - no longer needed
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (submitted) validateField(name, value);
  };

  const validateField = (field, value) => {
    let error = "";
    if (field === "name" && !value.trim()) error = "Name is required";
    if (field === "email") {
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Email is not valid";
    }
    if (field === "phone") {
      if (!value) error = "Mobile number is required";
      else if (!/^\d{10}$/.test(value))
        error = "Mobile number should be 10 digits";
    }
    if (field === "message" && !value.trim()) error = "Message is required";
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
      valid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Mobile number should be 10 digits";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Turnstile callbacks
  const handleTurnstileSuccess = (token) => {
    console.log("✅ Turnstile Success - Token received");
    setTurnstileToken(token);
    setTurnstileError("");
    setTurnstileLoaded(true);
  };

  const handleTurnstileError = (errorCode) => {
    console.error("❌ Turnstile Error:", errorCode);
    setTurnstileToken("");
    setTurnstileError("Security verification failed. Please try again.");
    setTurnstileLoaded(false);
  };

  const handleTurnstileExpired = () => {
    console.warn("⚠️ Turnstile Token Expired");
    setTurnstileToken("");
    setTurnstileError("Security verification expired. Please verify again.");
    setTurnstileLoaded(false);
  };

  const resetTurnstile = () => {
    if (turnstileRef.current?.reset) {
      turnstileRef.current.reset();
    }
    setTurnstileToken("");
    setTurnstileLoaded(false);
  };

  // 🔄 NEW: Backend SMTP Submission Handler (NO EmailJS)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoader(true);

    const valid = validateForm();
    if (!valid) {
      setLoader(false);
      return;
    }

    if (!turnstileToken || turnstileToken.length < 10) {
      setTurnstileError("⚠️ Please complete the CAPTCHA verification above.");
      setLoader(false);
      return;
    }

    try {
      // 🔄 Call YOUR backend API for SMTP email sending
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          turnstileToken: turnstileToken, // Send token for server validation
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("✅ Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitted(false);
        setErrors({});
        resetTurnstile();
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("❌ Submission Error:", error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  // Gradient focus style (unchanged)
  const gradientFocusStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#00ADE7",
        borderWidth: "2px",
      },
      "&:hover fieldset": { borderColor: "#305292" },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#00ADE7" },
    "& .MuiInputBase-input": { color: "#1e293b" },
    "& .MuiOutlinedInput-root.Mui-focused": {
      boxShadow:
        "0 0 0 3px rgba(0, 173, 231, 0.2), 0 0 0 6px rgba(48, 82, 146, 0.1)",
      transition: "box-shadow 0.3s ease",
    },
  };

  const bannerImageUrl =
    "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Untitled%20design%20(1).jpg";

  return (
    <div className="relative">
      {/* SVG Gradient */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ADE7" />
            <stop offset="100%" stopColor="#305292" />
          </linearGradient>
        </defs>
      </svg>

      {/* Global CSS for gradient icons */}
      <style>{`
        .gradient-icon {
          display: inline-flex;
          fill: url(#iconGradient) !important;
          color: transparent !important;
          transition: all 0.3s ease;
        }
        .gradient-icon-hover {
          transition: all 0.3s ease;
        }
        .gradient-icon-hover:hover svg,
        .gradient-icon-hover:active svg {
          fill: url(#iconGradient) !important;
          color: transparent !important;
        }
        .gradient-icon-hover svg {
          transition: fill 0.3s ease;
        }
      `}</style>

      {/* Hero Banner */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url('${bannerImageUrl}')` }}
        >
          <img
            src={bannerImageUrl}
            alt="Contact Banner"
            className="hidden"
            onError={(e) => {
              e.target.onerror = null;
              document
                .querySelector(".banner-fallback")
                ?.classList.remove("hidden");
            }}
          />
        </div>
        <div className="banner-fallback hidden absolute inset-0 bg-gradient-to-r from-[#00ADE7] to-[#305292]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 font-sans">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Contact Our Team
          </h1>
          <p className="text-white text-sm md:text-lg max-w-3xl leading-relaxed drop-shadow-md">
            Contact Trinai today for customized, high-quality security and
            surveillance solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-slate-50 py-12 px-4 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-slate-100">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Please let us know if you have a question or want to leave a
              comment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-6">
                {/* Name */}
                <TextField
                  error={!!errors.name}
                  label="Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  sx={gradientFocusStyle}
                  InputLabelProps={{ className: "font-sans" }}
                  inputProps={{ className: "font-sans" }}
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm -mt-4">{errors.name}</p>
                )}

                {/* Email */}
                <TextField
                  error={!!errors.email}
                  label="Email*"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  sx={gradientFocusStyle}
                  InputLabelProps={{ className: "font-sans" }}
                  inputProps={{ className: "font-sans" }}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm -mt-4">{errors.email}</p>
                )}

                {/* Phone */}
                <TextField
                  error={!!errors.phone}
                  label="Phone Number*"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  sx={gradientFocusStyle}
                  InputLabelProps={{ className: "font-sans" }}
                  inputProps={{
                    className: "font-sans",
                    pattern: "[0-9]{10}",
                    maxLength: 10,
                  }}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm -mt-4">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <TextField
                error={!!errors.message}
                label="Message*"
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                fullWidth
                sx={gradientFocusStyle}
                InputLabelProps={{ className: "font-sans" }}
                inputProps={{ className: "font-sans", maxLength: 1000 }}
              />
              {errors.message && (
                <p className="text-red-500 text-sm -mt-4">{errors.message}</p>
              )}
              <p className="text-gray-400 text-xs text-right -mt-2">
                {formData.message.length}/1000
              </p>

              {/* ✅ Cloudflare Turnstile Widget */}
              <div className="my-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="text-gray-800 font-semibold text-lg">
                      Security Verification
                    </span>
                    <span className="text-red-500">*</span>
                  </div>

                  {/* Verified Badge */}
                  {turnstileLoaded && turnstileToken && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Verified
                    </div>
                  )}
                </div>

                {/* Turnstile Widget Container */}
                <div className="w-full min-h-24 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-lg p-2">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={TURNSTILE_CONFIG.siteKey}
                    onSuccess={handleTurnstileSuccess}
                    onError={handleTurnstileError}
                    onExpired={handleTurnstileExpired}
                    options={{
                      size: "normal",
                      theme: "light",
                      language: "en",
                    }}
                  />
                </div>

                {/* Success Message */}
                {turnstileLoaded && turnstileToken && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-sm text-center font-medium flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Security verification complete
                    </p>
                  </div>
                )}

                {/* Helper Text */}
                <p className="mt-2 text-xs text-gray-500 text-center">
                  This helps us prevent spam and automated submissions
                </p>
              </div>

              {/* Error Message */}
              {turnstileError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-700 text-sm text-center">
                    {turnstileError}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                {loader ? (
                  <button
                    type="submit"
                    disabled
                    className="bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white py-3 px-10 rounded-lg opacity-70 cursor-not-allowed transition-all duration-300 shadow-md font-sans flex items-center gap-2"
                  >
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!turnstileToken || turnstileToken.length < 10}
                    className={`
                      py-3 px-10 rounded-lg transition-all duration-300 shadow-md font-sans font-medium
                      ${
                        !turnstileToken || turnstileToken.length < 10
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white hover:from-[#305292] hover:to-[#00ADE7] hover:shadow-lg"
                      }
                    `}
                  >
                    {!turnstileToken || turnstileToken.length < 10
                      ? "Please Complete Verification"
                      : "Submit Message"}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right Side Cards - Unchanged */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4 flex items-center gap-2">
                <FaLocationDot className="gradient-icon" size={20} />
                Our Locations
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">
                    Registered Office
                  </p>
                  <p className="text-gray-600 text-sm mt-1 pl-6">
                    #501,#508-510, Shangrila Plaza, Park View Enclave, Banjara
                    Hills, Hyderabad, Telangana-500034
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">
                    Manufacturing Unit
                  </p>
                  <p className="text-gray-600 text-sm mt-1 pl-6">
                    Sy No. 340, Plot No.198/2, 201-204, Tuniki Bollaram,
                    Siddipet, TS-502279
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-3 flex items-center gap-2">
                <IoMdMail className="gradient-icon" size={20} />
                Email Us
              </h3>
              <a
                href="mailto:trinai@brihaspathi.com"
                className="text-gray-700 hover:text-[#00ADE7] transition-colors font-medium break-all"
              >
                trinai@brihaspathi.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-3 flex items-center gap-2">
                <MdCall className="gradient-icon" size={20} />
                Call Us
              </h3>
              <a
                href="tel:+919885888835"
                className="text-gray-700 hover:text-[#00ADE7] transition-colors font-medium"
              >
                +91 9885888835
              </a>
            </div>

            {/* Social Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4 flex-wrap">
                <SocialIcon
                  href="https://www.facebook.com/profile.php?id=61574150717517"
                  Icon={FaFacebookF}
                  label="Facebook"
                />
                <SocialIcon
                  href="https://x.com/trinai_official"
                  Icon={FaTwitter}
                  label="Twitter"
                />
                <SocialIcon
                  href="https://www.instagram.com/trinai_cctv/"
                  Icon={AiFillInstagram}
                  label="Instagram"
                />
                <SocialIcon
                  href="https://www.linkedin.com/company/trinai/"
                  Icon={FaLinkedinIn}
                  label="LinkedIn"
                />
                <SocialIcon
                  href="https://in.pinterest.com/trinai_official/"
                  Icon={FaPinterest}
                  label="Pinterest"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="bg-slate-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <iframe
            className="rounded-xl w-full h-80 border-0 shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.711194228244!2d78.417589310894!3d17.425642201632733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ee53f272eb%3A0x9d0e4f397c0bbaa9!2sBrihaspathi%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1742625400376!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      {/* Scroll to Top */}
      <ScrollTop
        target="window"
        threshold={100}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer fixed bottom-6 right-6 z-50"
        icon={
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        }
      />
    </div>
  );
};

// SocialIcon Component - Unchanged
const SocialIcon = ({ href, Icon, label }) => (
  <a
    href={href.trim()}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] transition-all duration-300"
    aria-label={label}
  >
    <Icon
      className="text-[#00ADE7] group-hover:text-white transition-colors duration-300"
      size={18}
    />
  </a>
);

export default Contact;
