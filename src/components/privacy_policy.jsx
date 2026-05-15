import React, { useState, useEffect } from "react";
import {
  ChevronUp,
  Menu,
  X,
  Shield,
  Eye,
  Lock,
  FileText,
  Users,
  Globe,
} from "lucide-react";

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "definitions", title: "Definitions", icon: FileText },
    { id: "data-collection", title: "Data Collection", icon: Eye },
    { id: "data-usage", title: "Data Usage", icon: Users },
    { id: "data-sharing", title: "Data Sharing", icon: Globe },
    { id: "data-retention", title: "Data Retention", icon: Lock },
    { id: "your-rights", title: "Your Rights", icon: Shield },
    { id: "security", title: "Security", icon: Lock },
    { id: "contact", title: "Contact Us", icon: Users },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8" />
              <h1 className="text-xl font-bold">Trinai Privacy Policy</h1>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          {/* <aside
            className={`lg:w-80 ${
              mobileMenuOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="sticky top-24 bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {section.title}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside> */}

          {/* Main Content (your sections remain the same as you wrote) */}
          <main className="flex-1 bg-white rounded-xl shadow-md border border-gray-200 p-8 lg:p-12">
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-xl p-8 text-white mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  Privacy Policy
                </h1>
                <p className="text-lg opacity-90 leading-relaxed">
                  This Privacy Policy describes our policies and procedures on
                  the collection, use and disclosure of your information when
                  you use our Service and tells you about your privacy rights
                  and how the law protects you.
                </p>
                <div className="mt-6 text-sm opacity-80">
                  <p>Last updated: January 2025</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  We use your Personal data to provide and improve the Service.
                  By using the Service, you agree to the collection and use of
                  information in accordance with this Privacy Policy. This
                  Privacy Policy has been created with the help of the Privacy
                  Policy Generator.
                </p>
              </div>
            </section>

            {/* Definitions */}
            <section id="definitions" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Interpretation and Definitions
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Interpretation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Definitions
                </h3>
                <p className="text-gray-700 mb-4">
                  For the purposes of this Privacy Policy:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      term: "Account",
                      definition:
                        "means a unique account created for You to access our Service or parts of our Service.",
                    },
                    {
                      term: "Affiliate",
                      definition:
                        'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
                    },
                    {
                      term: "Company",
                      definition:
                        '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Trinai (A dedicated unit of Brihaspathi Technologies Limited, specializing in camera products), 501,#508-510, Shangrila Plaza, Road No. 2, Park View Enclave, Banjara Hills, Hyderabad, Telangana-500034.',
                    },
                    {
                      term: "Cookies",
                      definition:
                        "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.",
                    },
                    {
                      term: "Country",
                      definition: "refers to: Telangana, India",
                    },
                    {
                      term: "Device",
                      definition:
                        "means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
                    },
                    {
                      term: "Personal Data",
                      definition:
                        "is any information that relates to an identified or identifiable individual.",
                    },
                    {
                      term: "Service",
                      definition: "refers to the Website.",
                    },
                    {
                      term: "Service Provider",
                      definition:
                        "means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.",
                    },
                    {
                      term: "Usage Data",
                      definition:
                        "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
                    },
                    {
                      term: "Website",
                      definition:
                        "refers to Trinai, accessible from https://www.trinai.in/",
                    },
                    {
                      term: "You",
                      definition:
                        "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#27AAE1]"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {item.term}:
                      </h4>
                      <p className="text-gray-700">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Data Collection */}
            <section id="data-collection" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Collecting and Using Your Personal Data
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Types of Data Collected
                </h3>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">
                    Personal Data
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    While using Our Service, We may ask You to provide Us with
                    certain personally identifiable information that can be used
                    to contact or identify You. Personally identifiable
                    information may include, but is not limited to:
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Usage Data</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">
                    Usage Data
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Usage Data is collected automatically when using the
                    Service.
                  </p>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Usage Data may include information such as Your Device's
                      Internet Protocol address (e.g. IP address), browser type,
                      browser version, the pages of our Service that You visit,
                      the time and date of Your visit, the time spent on those
                      pages, unique device identifiers and other diagnostic
                      data.
                    </p>
                    <p>
                      When You access the Service by or through a mobile device,
                      We may collect certain information automatically,
                      including, but not limited to, the type of mobile device
                      You use, Your mobile device unique ID, the IP address of
                      Your mobile device, Your mobile operating system, the type
                      of mobile Internet browser You use, unique device
                      identifiers and other diagnostic data.
                    </p>
                    <p>
                      We may also collect information that Your browser sends
                      whenever You visit our Service or when You access the
                      Service by or through a mobile device.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">
                    Tracking Technologies and Cookies
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use Cookies and similar tracking technologies to track
                    the activity on Our Service and store certain information.
                    The technologies We use may include:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#27AAE1]">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Cookies or Browser Cookies
                      </h5>
                      <p className="text-gray-700 text-sm">
                        A cookie is a small file placed on Your Device. You can
                        instruct Your browser to refuse all Cookies or to
                        indicate when a Cookie is being sent. However, if You do
                        not accept Cookies, You may not be able to use some
                        parts of our Service. Unless you have adjusted Your
                        browser setting so that it will refuse Cookies, our
                        Service may use Cookies.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#27AAE1]">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Web Beacons
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Certain sections of our Service and our emails may
                        contain small electronic files known as web beacons
                        (also referred to as clear gifs, pixel tags, and
                        single-pixel gifs) that permit the Company, for example,
                        to count users who have visited those pages or opened an
                        email and for other related website statistics (for
                        example, recording the popularity of a certain section
                        and verifying system and server integrity).
                      </p>
                    </div>
                    {/* Cookie Types */}
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Cookies can be <strong>"Persistent"</strong> or{" "}
                        <strong>"Session"</strong> Cookies. Persistent Cookies
                        remain on Your personal computer or mobile device when
                        You go offline, while Session Cookies are deleted as
                        soon as You close Your web browser.You can learn more
                        about cookies on <u>Terms Feed website</u> article.
                      </p>

                      <p className="text-gray-700 leading-relaxed text-sm mt-4">
                        We use both Session and Persistent Cookies for the
                        purposes set out below:
                      </p>
                    </div>

                    {/* Necessary Cookies */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                      <h5 className="font-semibold text-gray-900 mb-3 text-base">
                        Necessary / Essential Cookies
                      </h5>

                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Type:</strong> Session Cookies
                      </p>

                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Administered by:</strong> Us
                      </p>

                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Purpose:</strong> These Cookies are essential to
                        provide You with services available through the Website
                        and to enable You to use some of its features. They help
                        to authenticate users and prevent fraudulent use of user
                        accounts. Without these Cookies, the services that You
                        have asked for cannot be provided, and We only use these
                        Cookies to provide You with those services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="data-usage" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Cookies Policy / Notice Acceptance Cookies{" "}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Type: Persistent Cookies{" "}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Purpose: These Cookies identify if users have accepted the use
                of cookies on the Website.
              </p>
              <div className="text-xl font-bold text-gray-900 mb-6 ">
                Functionality Cookies
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Type: Persistent Cookies{" "}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Administered by: Us
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {" "}
                For more information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy or the
                Cookies section of our Privacy Policy.
              </p>
            </section>

            {/* Data Usage */}
            <section id="data-usage" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Use of Your Personal Data
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Company may use Personal Data for the following purposes:
              </p>

              <div className="grid gap-4">
                {[
                  {
                    title: "To provide and maintain our Service",
                    description:
                      "including to monitor the usage of our Service.",
                  },
                  {
                    title: "To manage Your Account",
                    description:
                      "to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
                  },
                  {
                    title: "For the performance of a contract",
                    description:
                      "the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
                  },
                  {
                    title: "To contact You",
                    description:
                      "To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services.",
                  },
                  {
                    title: "To provide You",
                    description:
                      "with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.se Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.",
                  },
                ].map((purpose, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {purpose.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {purpose.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Sharing */}
            <section id="data-sharing" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Sharing Your Personal Information
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                We may share Your personal information in the following
                situations:
              </p>

              <div className="space-y-4">
                {[
                  "With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.",
                  "For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.",
                  "With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy.",
                  "With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.",
                  "With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.",
                  "With Your consent: We may disclose Your personal information for any other purpose with Your consent.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200"
                  >
                    <div className="w-2 h-2 bg-[#27AAE1] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Retention */}
            <section id="data-retention" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Retention of Your Personal Data
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </p>
                <p>
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Transfer of Your Personal Data{" "}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Delete Your Personal Data
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    You have the right to delete or request that We assist in
                    deleting the Personal Data that We have collected about You.
                  </p>
                  <p>
                    Our Service may give You the ability to delete certain
                    information about You from within the Service.
                  </p>
                  <p>
                    You may update, amend, or delete Your information at any
                    time by signing in to Your Account, if you have one, and
                    visiting the account settings section that allows you to
                    manage Your personal information. You may also contact Us to
                    request access to, correct, or delete any personal
                    information that You have provided to Us.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">
                  <strong>Important:</strong> We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </p>
              </div>
            </section>

            <section id="security" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Disclosure of Your Personal Data{" "}
              </h2>

              <h2 className="text-xl font-bold text-gray-700 mb-6 pb-2 ">
                Business Transactions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>

              <h2 className="text-xl font-bold text-gray-700 mb-6 pb-2 ">
                Law enforcement{" "}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
              <h2 className="text-xl font-bold text-gray-700 mb-6 pb-2 ">
                Other legal requirements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                {" "}
                <li>Comply with a legal obligation</li>
                <li>
                  Protect and defend the rights or property of the Company
                </li>{" "}
                <li>
                  {" "}
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </li>
                <li>
                  {" "}
                  Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li> Protect against legal liability</li>
              </ul>
            </section>

            {/* Security */}
            <section id="security" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Security of Your Personal Data
              </h2>

              <div className="bg-gradient-to-br  from-blue-50 to-teal-50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  {/* <Lock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" /> */}
                  <div>
                    {/* <h3 className="text-green-800 font-semibold mb-2">
                      Security Commitment
                    </h3> */}
                    <p className="text-gray-700 text-sm">
                      The security of Your Personal Data is important to Us, but
                      remember that no method of transmission over the Internet,
                      or method of electronic storage is 100% secure. While We
                      strive to use commercially acceptable means to protect
                      Your Personal Data, We cannot guarantee its absolute
                      security.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-700 my-6 pb-2 ">
                Children's Privacy{" "}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {" "}
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent's consent before We collect
                and use that information.{" "}
              </p>

              <h2 className="text-xl font-bold text-gray-700 my-6 pb-2 ">
                Links to Other Websites{" "}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
              </p>
              <h2 className="text-xl font-bold text-gray-700 my-6 pb-2 ">
                Changes to this Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {" "}
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {" "}
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                "Last updated" date at the top of this Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.{" "}
              </p>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#27AAE1]">
                Contact Us
              </h2>

              <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Have Questions About This Privacy Policy?
                </h3>
                <p className="mb-6 opacity-90">
                  If you have any questions about this Privacy Policy, you can
                  contact us:
                </p>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="font-semibold">Email:</p>
                  <a
                    href="mailto:trinai@brihaspathi.com"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    trinai@brihaspathi.com
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 z-40"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default PrivacyPolicy;
