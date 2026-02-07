export default function CreoAIAssistantPage() {
    const features = [
      {
        title: "NLP-Based Chatbot",
        description:
          "Conversational assistant powered by advanced Natural Language Processing for real-time responses."
      },
      {
        title: "IoT Automation",
        description:
          "Controls physical devices through Arduino and HC-05 Bluetooth module for smart automation tasks."
      },
      {
        title: "Voice Interaction",
        description:
          "Supports wake-word detection, speech recognition, and voice-based automation triggers."
      },
      {
        title: "Task Execution",
        description:
          "Can execute tasks like reminders, music control, system actions, and sending IoT commands."
      }
    ];
  
    const technologies = [
      "PyTorch",
      "TensorFlow",
      "Python",
      "NLP",
      "Speech Recognition",
      "Arduino",
      "HC-05 Bluetooth Module",
      "Machine Learning"
    ];

    // Updated Array for the four new screenshots
    const screenshots = [
        {
            src: "/CREOres/normal.jpg", // Listening/Chat UI with user/Creo dialogue
            alt: "CREO Chatbot Interaction UI",
            caption: "Real-time Conversational Dialogue (Listening Mode)"
        },
        {
            src: "/CREOres/gesture2.png", // Gesture detection
            alt: "Hand Gesture Detection",
            caption: "Gesture Recognition for Command Input"
        },
        {
            src: "/CREOres/output.jpg", // Main UI (Dark Mode)
            alt: "CREO IOT System Output",
            caption: "IOT System Output {HC05,Arduino,Relay,etc}"
        },
        {
            src: "/CREOres/addFriend.jpg", // Add a friend/contact form
            alt: "Add a Friend Form",
            caption: "Contact Management for External Communication"
        },
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a
                href="/#projects"
                className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors group"
              >
                <span className="font-medium">Back to Portfolio</span>
              </a>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  CREO – AI Personal Assistant
                </span>
              </div>
            </div>
          </div>
        </header>
  
        <section className="relative py-20 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Personal Assistant – CREO
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A smart NLP-driven personal assistant capable of automation, real-time voice interaction, and IoT control.
              </p>
            </div>
          </div>
        </section>
  
        {/* NEW Visual Showcase Section - Now the main highlight */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Visual Showcase & Core Functionality
              </h2>
              <p className="text-xl text-gray-600">A look at the User Interface and key interaction modes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {screenshots.map((screen, index) => (
                    <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="w-full h-auto overflow-hidden rounded-t-xl">
                            <img 
                                src={`${screen.src}`} // Adjust path if necessary
                                alt={screen.alt} 
                                className="w-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-[1.05]"
                            />
                        </div>
                        <div className="p-4 w-full">
                            <p className="text-center text-md font-semibold text-gray-900">{screen.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </section>
        {/* END Visual Showcase Section */}
  
        {/* Combined Features and Technologies Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Core Features & Capabilities
              </h2>
              <p className="text-xl text-gray-600">Smart automation powered by AI & NLP</p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {features.map((f, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-shadow hover:shadow-2xl">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Technologies Used
                </h2>
                <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                {technologies.map((tech, index) => (
                    <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-lg rounded-full font-semibold border-2 border-indigo-200 shadow-md"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
          </div>
        </section>
        {/* End Combined Features and Technologies Section */}
  
        <footer className="bg-gray-900 text-gray-300 py-12 text-center">
          <a
            href="/#projects"
            className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Back to Portfolio
          </a>
        </footer>
      </div>
    );
  }