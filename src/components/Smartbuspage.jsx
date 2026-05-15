import React, { useEffect, useState } from "react";
import {
  Bus,
  Wifi,
  MapPin,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Clock,
  Battery,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";

function SmartBusPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.8s ease-out",
  };

  const staggerDelay = (index) => ({
    ...fadeInUp,
    transitionDelay: `${index * 0.1}s`,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center" style={fadeInUp}>
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Bus className="w-16 h-16 text-blue-200" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Smart Bus Solution
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing Public Transportation with Intelligent Technology
              and Seamless Connectivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Explore Solutions
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Overview
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div style={staggerDelay(1)}>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Smart Bus Solution represents a comprehensive approach to
                modernizing public transportation through the integration of
                cutting-edge technology. This innovative system transforms
                traditional bus services into intelligent, connected, and
                efficient transportation networks that serve both operators and
                passengers with unprecedented levels of service quality and
                operational insight.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By leveraging advanced IoT sensors, real-time data analytics,
                and seamless connectivity solutions, our Smart Bus Solution
                creates an ecosystem where every aspect of public transportation
                is optimized for performance, safety, and user experience. The
                system provides comprehensive monitoring, predictive maintenance
                capabilities, and enhanced passenger services that set new
                standards for urban mobility.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This solution addresses the growing demands of modern cities for
                sustainable, efficient, and user-friendly public transportation
                while providing operators with the tools they need to optimize
                routes, reduce costs, and improve service reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6" style={staggerDelay(2)}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Enhanced Experience
                </h3>
                <p className="text-gray-600 text-sm">
                  Improved passenger comfort and convenience
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <BarChart3 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Smart Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Data-driven operational insights
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Enhanced Safety
                </h3>
                <p className="text-gray-600 text-sm">
                  Advanced security and monitoring
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <Zap className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Efficiency</h3>
                <p className="text-gray-600 text-sm">
                  Optimized routes and operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Smart Transit Bus Solution */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is a Smart Transit Bus Solution?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            style={staggerDelay(1)}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A Smart Transit Bus Solution is an integrated technology
                  platform that transforms conventional public buses into
                  intelligent, connected vehicles capable of providing enhanced
                  services to passengers while delivering comprehensive
                  operational data to transit authorities. This solution
                  encompasses hardware, software, and connectivity components
                  that work together to create a seamless and efficient public
                  transportation experience.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The system integrates multiple technologies including GPS
                  tracking, passenger counting sensors, environmental
                  monitoring, Wi-Fi connectivity, digital displays, and advanced
                  communication systems. These components collect and process
                  real-time data to optimize routes, improve passenger
                  experience, and enable predictive maintenance strategies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By connecting buses to a central management platform, transit
                  operators gain unprecedented visibility into their fleet
                  operations, enabling data-driven decision making that improves
                  efficiency, reduces costs, and enhances service quality for
                  passengers.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Real-time Tracking
                    </h3>
                    <p className="text-gray-600">
                      Precise location monitoring and route optimization
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                  <div className="p-2 bg-green-600 rounded-lg">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Connected Services
                    </h3>
                    <p className="text-gray-600">
                      Seamless connectivity and digital services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                  <div className="p-2 bg-purple-600 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Data Analytics
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive insights and reporting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Technology Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "GPS Tracking & Navigation",
                description:
                  "Advanced GPS systems provide real-time location tracking with high accuracy, enabling precise route monitoring, arrival time predictions, and optimal path planning for improved service reliability.",
                color: "blue",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Passenger Counting Systems",
                description:
                  "Automated passenger counting using advanced sensors and AI algorithms to monitor boarding and alighting patterns, optimize capacity management, and improve service planning.",
                color: "green",
              },
              {
                icon: <Wifi className="w-8 h-8" />,
                title: "Wi-Fi Connectivity",
                description:
                  "High-speed internet access for passengers with robust connectivity solutions that maintain stable connections throughout the journey, enhancing the overall travel experience.",
                color: "purple",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Digital Display Systems",
                description:
                  "Interactive displays providing real-time information including next stops, route maps, arrival times, and important announcements to keep passengers informed throughout their journey.",
                color: "orange",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security & Surveillance",
                description:
                  "Comprehensive security systems including CCTV cameras, emergency communication systems, and real-time monitoring capabilities to ensure passenger safety and security.",
                color: "red",
              },
              {
                icon: <Battery className="w-8 h-8" />,
                title: "Environmental Monitoring",
                description:
                  "Advanced sensors monitoring air quality, temperature, humidity, and noise levels to ensure optimal passenger comfort and provide valuable environmental data.",
                color: "teal",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Real-time Communication",
                description:
                  "Seamless communication systems enabling instant updates between buses, dispatch centers, and passengers for improved coordination and service delivery.",
                color: "indigo",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Predictive Maintenance",
                description:
                  "IoT sensors monitoring vehicle health parameters to predict maintenance needs, reduce downtime, and optimize fleet availability through proactive maintenance strategies.",
                color: "yellow",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Fleet Management Integration",
                description:
                  "Comprehensive integration with existing fleet management systems to provide unified control, monitoring, and optimization of entire bus networks from a single platform.",
                color: "pink",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
                style={staggerDelay(index)}
              >
                <div
                  className={`p-3 bg-${feature.color}-600 text-white rounded-lg w-fit mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Data & Analytics */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Big Data & Analytics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            style={staggerDelay(1)}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Smart Bus Solution generates vast amounts of data from
                  multiple sources including GPS systems, passenger counters,
                  environmental sensors, and operational systems. This big data
                  is processed through advanced analytics platforms to extract
                  meaningful insights that drive operational improvements and
                  strategic decision-making.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our analytics platform employs machine learning algorithms and
                  artificial intelligence to identify patterns, predict trends,
                  and provide actionable recommendations for route optimization,
                  maintenance scheduling, and service improvements.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The system provides comprehensive dashboards and reporting
                  tools that enable transit operators to monitor performance
                  metrics, track key performance indicators, and make
                  data-driven decisions that improve efficiency and passenger
                  satisfaction.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-xl text-white">
                <BarChart3 className="w-16 h-16 mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Analytics Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Route Efficiency</span>
                    <span className="font-bold">94%</span>
                  </div>
                  <div className="w-full bg-blue-500 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>On-time Performance</span>
                    <span className="font-bold">87%</span>
                  </div>
                  <div className="w-full bg-blue-500 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Passenger Satisfaction</span>
                    <span className="font-bold">91%</span>
                  </div>
                  <div className="w-full bg-blue-500 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "91%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Performance Analytics
                </h4>
                <p className="text-gray-600">
                  Real-time monitoring of operational metrics and KPIs
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Predictive Insights
                </h4>
                <p className="text-gray-600">
                  AI-powered predictions for maintenance and optimization
                </p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Smart Recommendations
                </h4>
                <p className="text-gray-600">
                  Data-driven suggestions for service improvements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Ready Innovations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Future-Ready Innovations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="space-y-12">
            <div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
              style={staggerDelay(1)}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The Smart Bus Solution is designed with future scalability and
                emerging technology integration in mind. Our platform is built
                to accommodate evolving transportation needs and incorporate
                cutting-edge innovations as they become available, ensuring
                long-term value and adaptability.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="p-4 bg-blue-600 text-white rounded-full w-fit mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Electric Vehicle Integration
                  </h4>
                  <p className="text-gray-600">
                    Seamless compatibility with electric and hybrid bus fleets
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-green-600 text-white rounded-full w-fit mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    5G Connectivity
                  </h4>
                  <p className="text-gray-600">
                    Ultra-fast, low-latency communication capabilities
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-purple-600 text-white rounded-full w-fit mx-auto mb-4">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    AI-Powered Optimization
                  </h4>
                  <p className="text-gray-600">
                    Advanced machine learning for route and schedule
                    optimization
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-orange-600 text-white rounded-full w-fit mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Autonomous Features
                  </h4>
                  <p className="text-gray-600">
                    Preparation for semi-autonomous and autonomous vehicle
                    integration
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div style={staggerDelay(2)}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Scalable Architecture
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our solution is built on a modular, cloud-native architecture
                  that can scale from small transit systems to large
                  metropolitan networks. The platform supports incremental
                  deployment and can grow with your organization's needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">
                      Cloud-based infrastructure for unlimited scalability
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">
                      Modular components for flexible deployment
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">
                      API-first design for easy integration
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">
                      Future-proof technology stack
                    </span>
                  </li>
                </ul>
              </div>

              <div
                className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-xl text-white"
                style={staggerDelay(3)}
              >
                <h4 className="text-xl font-bold mb-6">Innovation Roadmap</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-white/30 pl-4">
                    <h5 className="font-semibold mb-1">Q1 2024</h5>
                    <p className="text-indigo-100">
                      Enhanced AI analytics and predictive maintenance
                    </p>
                  </div>
                  <div className="border-l-4 border-white/30 pl-4">
                    <h5 className="font-semibold mb-1">Q2 2024</h5>
                    <p className="text-indigo-100">
                      5G connectivity and edge computing integration
                    </p>
                  </div>
                  <div className="border-l-4 border-white/30 pl-4">
                    <h5 className="font-semibold mb-1">Q3 2024</h5>
                    <p className="text-indigo-100">
                      Autonomous vehicle preparation features
                    </p>
                  </div>
                  <div className="border-l-4 border-white/30 pl-4">
                    <h5 className="font-semibold mb-1">Q4 2024</h5>
                    <p className="text-indigo-100">
                      Advanced passenger experience enhancements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            style={staggerDelay(1)}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our Smart Bus Solution stands out in the market through our
                  commitment to innovation, reliability, and customer success.
                  We combine deep industry expertise with cutting-edge
                  technology to deliver solutions that not only meet current
                  needs but anticipate future requirements.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With a proven track record of successful implementations
                  across diverse transit systems, we understand the unique
                  challenges faced by public transportation operators and have
                  developed solutions that address these challenges effectively.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our comprehensive approach includes not just technology
                  deployment but also ongoing support, training, and continuous
                  improvement to ensure maximum return on investment and
                  long-term success.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Industry Leader
                  </h4>
                  <p className="text-gray-600">
                    Recognized expertise in smart transportation
                  </p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Proven Results
                  </h4>
                  <p className="text-gray-600">
                    Successful deployments worldwide
                  </p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Reliable Support
                  </h4>
                  <p className="text-gray-600">
                    24/7 technical support and maintenance
                  </p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <Lightbulb className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Innovation Focus
                  </h4>
                  <p className="text-gray-600">
                    Continuous technology advancement
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border-l-4 border-blue-500 bg-blue-50">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Comprehensive Solution
                </h4>
                <p className="text-gray-700">
                  End-to-end platform covering all aspects of smart bus
                  operations from hardware to analytics
                </p>
              </div>
              <div className="p-6 border-l-4 border-green-500 bg-green-50">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Scalable Platform
                </h4>
                <p className="text-gray-700">
                  Flexible architecture that grows with your needs, from pilot
                  projects to full-scale deployments
                </p>
              </div>
              <div className="p-6 border-l-4 border-purple-500 bg-purple-50">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Expert Partnership
                </h4>
                <p className="text-gray-700">
                  Dedicated team of transportation technology experts providing
                  ongoing support and guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Transit System?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the smart transportation revolution and provide your passengers with the modern, efficient service they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule a Demo
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bus className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Smart Bus Solution</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing public transportation through intelligent technology and seamless connectivity.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>GPS Tracking</li>
                <li>Passenger Analytics</li>
                <li>Fleet Management</li>
                <li>Predictive Maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Partners</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Contact Support</li>
                <li>Training</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Smart Bus Solution. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default SmartBusPage;
