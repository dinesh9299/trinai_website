// import React from "react";
// import {
//   FaFacebookSquare,
//   FaTwitter,
//   FaInstagram,
//   FaPinterestSquare,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import blogo from "../images/highbtlogo.png";
// import trinaiLogo from "../images/logo/logo6.png";

// const Footer = () => {
//   const socialLinks = [
//     {
//       icon: <FaFacebookSquare size={18} />,
//       href: "https://www.facebook.com/profile.php?id=61574150717517",
//     },
//     {
//       icon: <FaTwitter size={18} />,
//       href: "https://x.com/trinai_official",
//     },
//     {
//       icon: <FaInstagram size={18} />,
//       href: "https://www.instagram.com/trinai_cctv/",
//     },
//     {
//       icon: <FaLinkedinIn size={18} />,
//       href: "https://www.linkedin.com/company/106424439",
//     },
//     {
//       icon: <FaPinterestSquare size={18} />,
//       href: "https://in.pinterest.com/trinai_official/",
//     },
//   ];

//   return (
//     <footer className="relative bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white pb-8 overflow-hidden">
//       {/* Foreground content */}
//       <div className="relative z-10">
//         {/* MAIN FOOTER CONTENT */}
//         <div className="max-w-screen-xl mx-auto px-4 mt-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-x-24">
//             {/* About Trinai */}
//             <div className="max-w-sm">
//               <img src={trinaiLogo} alt="Trinai Logo" className="w-40 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-white">
//                 About Trinai
//               </h3>
//               <p className="text-white/90 text-sm leading-relaxed">
//                 Trinai is a Manufacturing Unit specialized in security products,
//                 delivering the best solutions based on real-world scenarios.
//                 Using AI-Analytics, we empower our CCTV cameras to deliver the
//                 best results across every field.
//               </p>
//             </div>

//             {/* Quick Links */}
//             <div className="lg:mx-auto text-left">
//               <h3 className="text-xl font-semibold mb-4 text-white">
//                 Quick Links
//               </h3>

//               <ul className="text-white/90">
//                 {["Home", "About", "Products", "Solutions", "Contact"].map(
//                   (text) => (
//                     <li key={text}>
//                       <Link
//                         to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
//                       >
//                         <button className="hover:text-white hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out text-white/90">
//                           {text}
//                         </button>
//                       </Link>
//                     </li>
//                   ),
//                 )}
//               </ul>
//             </div>
//             {/* Contact & Address */}
//             <div className="lg:pl-10">
//               <h3 className="text-xl font-semibold mb-4 text-white">
//                 Contact Details
//               </h3>

//               <p className="text-white/90 text-sm mb-2">
//                 <strong className="text-white">Email:</strong>{" "}
//                 <a
//                   href="mailto:trinai@brihaspathi.com"
//                   className="hover:text-white/70 transition-colors"
//                 >
//                   trinai@brihaspathi.com
//                 </a>
//               </p>

//               <p className="text-white/90 text-sm mb-4">
//                 <strong className="text-white">Phone:</strong> +91 98858 88835
//               </p>

//               <p className="text-white/90 text-sm mb-3">
//                 <strong className="text-white">Corporate Office:</strong>
//                 <br />
//                 #501, #508-510, Shangrila Plaza,
//                 <br />
//                 Road No. 2, Park View Enclave,
//                 <br />
//                 Banjara Hills, Hyderabad,
//                 <br />
//                 Telangana – 500034
//               </p>

//               <p className="text-white/90 text-sm">
//                 <strong className="text-white">Manufacturing Unit:</strong>
//                 <br />
//                 Sy No. 340, Plot No. 198/2, 201–204,
//                 <br />
//                 Tuniki Bollaram, Siddipet,
//                 <br />
//                 Telangana – 502279
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM BAR */}
//         <div className="bg-gradient-to-r from-[#008CC4] to-[#254375] text-white py-4 px-6 lg:px-20 mt-10 border-t border-white/20">
//           <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-center md:text-left">
//             {/* Left Section */}
//             <div className="flex flex-col md:flex-row md:items-center gap-4">
//               <p>&copy; 2025 Trinai. All rights reserved.</p>
//               <span className="hidden md:block">|</span>
//               <Link
//                 to="/privacy-policy"
//                 className="hover:text-white/70 transition-colors"
//               >
//                 Privacy Policy
//               </Link>
//               <span className="hidden md:block">|</span>
//               <p>
//                 Email ID:{" "}
//                 <a
//                   href="mailto:trinai@brihaspathi.com"
//                   className="hover:text-white/70 transition-colors"
//                 >
//                   trinai@brihaspathi.com
//                 </a>
//               </p>
//               <span className="hidden md:block">|</span>
//               <p>+91 98858 88835</p>
//             </div>

//             {/* ✅ Keep your existing gradient definition */}
//             <svg width="0" height="0" className="absolute pointer-events-none">
//               <defs>
//                 <linearGradient
//                   id="iconGradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="0%"
//                 >
//                   <stop offset="0%" stopColor="#00ADE7" />
//                   <stop offset="100%" stopColor="#305292" />
//                 </linearGradient>
//               </defs>
//             </svg>

//             {/* ✅ Add this CSS */}
//             <style>{`
//   .icon-stroke-gradient:hover svg {
//     stroke: url(#iconGradient) !important;
//     transition: stroke 0.3s ease;
//   }
//   .icon-stroke-gradient:hover svg[fill]:not([fill="none"]) {
//     fill: url(#iconGradient) !important;
//   }
// `}</style>

//             {/* ✅ Your social links - only added 2 classes */}
//             <div className="flex justify-center gap-3">
//               {socialLinks.map(({ icon, href }, index) => (
//                 <a
//                   key={index}
//                   href={href}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-stroke-gradient group bg-white/20 text-white hover:bg-white hover:text-[#305292] p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
//                 >
//                   {icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterestSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Vite-compatible env variable
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

  // Fetch data from Strapi
  useEffect(() => {
    const fetchFooter = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${STRAPI_URL}/api/footer?populate=*`);

        if (!res.ok) throw new Error(`API Error: ${res.status}`);

        const json = await res.json();

        if (json?.data) {
          setFooter(json.data);
          setError(null);
        } else {
          throw new Error("No data in response");
        }
      } catch (err) {
        setError(err.message);
        console.error("Footer fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFooter();
  }, [STRAPI_URL]);

  // Helper: Clean URL (trim spaces/tabs)
  const cleanUrl = (url) => url?.trim();

  // Helper: Build full image URL
  const getLogoUrl = (logo) => {
    if (!logo?.url) return null;
    return logo.url.startsWith("http") ? logo.url : `${STRAPI_URL}${logo.url}`;
  };

  // Helper: Format address lines
  const formatAddress = (text) =>
    text?.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line.trim()}
        <br />
      </React.Fragment>
    ));

  // Icon mapping
  const ICONS = {
    facebook: FaFacebookSquare,
    twitter: FaTwitter,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    pinterest: FaPinterestSquare,
  };

  // ─────────────────────────────────────────────────────────────
  // 🔄 LOADING STATE
  // ─────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <footer className="bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white py-12">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-white/20 rounded w-40 mx-auto mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-3">
                  <div className="h-5 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-full"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // ❌ ERROR STATE
  // ─────────────────────────────────────────────────────────────
  if (error || !footer) {
    return (
      <footer className="bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p className="text-white/80">Footer content unavailable</p>
        </div>
      </footer>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 📦 EXTRACT STRAPI DATA (Pure Dynamic - No Hardcoded Values)
  // ─────────────────────────────────────────────────────────────
  const {
    aboutTitle,
    aboutDescription,
    copyrightText,
    privacyPolicyPath,
    logo,
    ContactDetails1,
    QuickLinks1,
    SocialLink1,
  } = footer;

  const contact = ContactDetails1 || {};
  const logoUrl = getLogoUrl(logo);

  // Sort & clean quick links
  const quickLinks = (QuickLinks1 || []).sort(
    (a, b) => parseInt(a.order) - parseInt(b.order),
  );

  // Sort & clean social links (trim platform + url)
  const socialLinks = (SocialLink1 || [])
    .sort((a, b) => parseInt(a.order) - parseInt(b.order))
    .map((s) => ({
      ...s,
      platform: s.platform?.trim().toLowerCase(),
      url: cleanUrl(s.url),
    }));

  // ─────────────────────────────────────────────────────────────
  // 🎨 RENDER FOOTER (All Data from Strapi Only)
  // ─────────────────────────────────────────────────────────────
  return (
    <footer className="relative bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white pb-8 overflow-hidden">
      <div className="relative z-10">
        {/* MAIN CONTENT */}
        <div className="max-w-screen-xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-x-24">
            {/* About Section - PURE DYNAMIC */}
            <div className="max-w-sm">
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt={aboutTitle || "Company Logo"}
                  className="w-40 mb-4"
                  loading="lazy"
                />
              )}
              {aboutTitle && (
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {aboutTitle}
                </h3>
              )}
              {aboutDescription && (
                <p className="text-white/90 text-sm leading-relaxed">
                  {aboutDescription}
                </p>
              )}
            </div>

            {/* Quick Links - PURE DYNAMIC */}
            <div className="lg:mx-auto text-left">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="text-white/90">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.path}>
                      <button className="hover:text-white hover:translate-x-3 my-2 transition-transform duration-300 ease-in-out text-white/90">
                        {link.label}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details - PURE DYNAMIC */}
            <div className="lg:pl-10">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Contact Details
              </h3>

              {contact.contactEmail && (
                <p className="text-white/90 text-sm mb-2">
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href={`mailto:${contact.contactEmail}`}
                    className="hover:text-white/70 transition-colors"
                  >
                    {contact.contactEmail}
                  </a>
                </p>
              )}

              {contact.contactPhone && (
                <p className="text-white/90 text-sm mb-4">
                  <strong className="text-white">Phone:</strong>{" "}
                  {contact.contactPhone}
                </p>
              )}

              {contact.corporateAddress && (
                <p className="text-white/90 text-sm mb-3">
                  <strong className="text-white">Corporate Office:</strong>
                  <br />
                  {formatAddress(contact.corporateAddress)}
                </p>
              )}

              {contact.manufacturingAddress && (
                <p className="text-white/90 text-sm">
                  <strong className="text-white">Manufacturing Unit:</strong>
                  <br />
                  {formatAddress(contact.manufacturingAddress)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR - PURE DYNAMIC */}
        <div className="bg-gradient-to-r from-[#008CC4] to-[#254375] text-white py-4 px-6 lg:px-20 mt-10 border-t border-white/20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-center md:text-left">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {copyrightText && <p>{copyrightText}</p>}

              {copyrightText && <span className="hidden md:block">|</span>}

              {privacyPolicyPath && (
                <Link
                  to={privacyPolicyPath}
                  className="hover:text-white/70 transition-colors"
                >
                  Privacy Policy
                </Link>
              )}

              {(copyrightText || privacyPolicyPath) && (
                <span className="hidden md:block">|</span>
              )}

              {contact.contactEmail && (
                <p>
                  Email ID:{" "}
                  <a
                    href={`mailto:${contact.contactEmail}`}
                    className="hover:text-white/70 transition-colors"
                  >
                    {contact.contactEmail}
                  </a>
                </p>
              )}

              {contact.contactEmail && (
                <span className="hidden md:block">|</span>
              )}

              {contact.contactPhone && <p>{contact.contactPhone}</p>}
            </div>

            {/* Gradient for Icon Hover */}
            <svg width="0" height="0" className="absolute pointer-events-none">
              <defs>
                <linearGradient
                  id="iconGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00ADE7" />
                  <stop offset="100%" stopColor="#305292" />
                </linearGradient>
              </defs>
            </svg>
            <style>{`
              .icon-stroke-gradient:hover svg {
                stroke: url(#iconGradient) !important;
                transition: stroke 0.3s ease;
              }
              .icon-stroke-gradient:hover svg[fill]:not([fill="none"]) {
                fill: url(#iconGradient) !important;
              }
            `}</style>

            {/* Social Links - PURE DYNAMIC */}
            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => {
                const Icon = ICONS[social.platform];
                if (!Icon || !social.url) return null;

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-stroke-gradient group bg-white/20 text-white hover:bg-white hover:text-[#305292] p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                    aria-label={social.platform}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
