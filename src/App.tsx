import { useState } from 'react';
import { 
  Search, 
  Bell, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight, 
  ArrowLeft, 
  Star, 
  Heart, 
  Baby, 
  Brain, 
  Eye, 
  Stethoscope, 
  Home, 
  User, 
  Plus,
  CheckCircle2,
  Navigation,
  Info,
  CalendarPlus,
  ChevronLeft,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, DOCTORS, Doctor } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS[3]); // Default to Dr. Julian Vane

  const navigateTo = (screen: Screen, doctor?: Doctor) => {
    if (doctor) setSelectedDoctor(doctor);
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-primary">
      <AnimatePresence mode="wait">
        {currentScreen === 'landing' && (
          <LandingScreen key="landing" onStart={() => navigateTo('dashboard')} />
        )}
        {currentScreen === 'dashboard' && (
          <DashboardScreen 
            key="dashboard" 
            onSelectDoctor={(doc) => navigateTo('profile', doc)}
            onViewAllAppointments={() => {}}
          />
        )}
        {currentScreen === 'profile' && (
          <ProfileScreen 
            key="profile" 
            doctor={selectedDoctor} 
            onBack={() => navigateTo('dashboard')}
            onConfirm={() => navigateTo('confirmation')}
          />
        )}
        {currentScreen === 'confirmation' && (
          <ConfirmationScreen 
            key="confirmation" 
            doctor={selectedDoctor}
            onClose={() => navigateTo('dashboard')}
            onReturnHome={() => navigateTo('dashboard')}
          />
        )}
      </AnimatePresence>

      {currentScreen !== 'landing' && currentScreen !== 'confirmation' && (
        <BottomNav currentScreen={currentScreen} onNavigate={navigateTo} />
      )}
    </div>
  );
}

function LandingScreen({ onStart, key }: { onStart: () => void, key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col md:flex-row relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-1/2 md:h-full bg-gradient-to-br from-primary-container/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-16 md:py-0">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Plus className="text-white w-6 h-6" />
            </div>
            <span className="font-headline font-extrabold text-2xl tracking-tight text-primary">The Clinical Sanctuary</span>
          </div>
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tighter">
          Clinical care, <br/>
          <span className="text-primary italic font-normal">curated</span> for you.
        </h1>
        
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-lg mb-12 leading-relaxed">
          Step into a world where wellness meets precision. The Clinical Sanctuary provides a serene, patient-first approach to modern healthcare.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button 
            onClick={onStart}
            className="px-10 py-5 bg-primary text-white rounded-xl font-headline font-bold text-lg shadow-[0_12px_40px_rgba(0,71,141,0.15)] hover:bg-primary-container transition-all active:scale-95"
          >
            Get Started
          </button>
          <button className="px-8 py-5 text-primary font-headline font-bold text-lg hover:bg-primary-container/10 rounded-xl transition-all">
            Sign In
          </button>
        </div>

        <div className="mt-20 flex items-center gap-8">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img 
                key={i}
                className="w-12 h-12 rounded-full border-4 border-background object-cover" 
                src={`https://picsum.photos/seed/doc${i}/100/100`}
                alt="Doctor"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <div className="text-on-surface-variant text-sm font-medium">
            <span className="text-primary font-bold">500+</span> Specialized Physicians <br/> Ready to assist you
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-surface-container-low relative p-8 md:p-12 flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_24px_80px_rgba(0,71,141,0.1)]">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
            alt="Medical Facility"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute top-8 left-8 right-8 glass-effect p-6 rounded-3xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-on-surface font-bold text-sm">Confirmed</div>
              <div className="text-on-surface-variant text-xs font-medium">Dr. Julianne Moore • 10:30 AM</div>
            </div>
          </div>

          <div className="absolute bottom-12 -right-6 glass-effect bg-primary/90 p-8 rounded-[2rem] shadow-2xl text-white max-w-[240px]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-headline font-bold">Vitals</span>
              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-3xl font-bold">98</span>
              <span className="text-sm opacity-80 mb-1">bpm</span>
            </div>
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-white rounded-full" />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-widest font-bold opacity-70">Optimal Range</div>
          </div>
        </div>
        
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-container/30 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-tertiary-fixed-dim/20 rounded-full blur-[60px]" />
      </div>
    </motion.div>
  );
}

function DashboardScreen({ onSelectDoctor, onViewAllAppointments, key }: { onSelectDoctor: (doc: Doctor) => void, onViewAllAppointments: () => void, key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-6 pt-24 pb-32 space-y-10"
    >
      <TopAppBar title="The Clinical Sanctuary" />

      <section className="space-y-6">
        <div className="space-y-1">
          <p className="text-on-surface-variant font-medium">Welcome back, Alexander</p>
          <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface">Find Your Specialist</h2>
        </div>
        <div className="relative group max-w-2xl">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="text-on-surface-variant w-5 h-5" />
          </div>
          <input 
            className="w-full h-14 pl-12 pr-4 bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-on-surface-variant/60" 
            placeholder="Search doctors, specialties, or clinics..." 
            type="text"
          />
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-lg font-headline font-bold text-on-surface">Upcoming Appointment</h3>
          <button onClick={onViewAllAppointments} className="text-sm font-semibold text-primary hover:underline">View All</button>
        </div>
        <div className="bg-primary p-8 rounded-[1.5rem] relative overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-ambient">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-20 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10 flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              Confirmed Appointment
            </div>
            <div className="space-y-1">
              <h4 className="text-2xl font-headline font-bold text-white">Dr. Julianne Sterling</h4>
              <p className="text-primary-fixed text-lg">Senior Cardiologist • 8 Years Exp.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Oct 24, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">10:30 AM - 11:15 AM</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-primary-fixed transition-colors active:scale-95">
              Reschedule
            </button>
            <button className="p-4 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-colors active:scale-95">
              <Navigation className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-headline font-bold text-on-surface mb-6">Specialties</h3>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6">
          {[
            { name: 'Cardiology', icon: Heart },
            { name: 'Pediatrics', icon: Baby },
            { name: 'Neurology', icon: Brain },
            { name: 'Ophthalmology', icon: Eye },
            { name: 'General', icon: Stethoscope },
          ].map((spec, i) => (
            <div key={i} className="flex-shrink-0 group cursor-pointer">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 ${i === 0 ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-primary'}`}>
                <spec.icon className="w-8 h-8" />
              </div>
              <p className="text-center text-[10px] font-bold text-on-surface uppercase tracking-tighter">{spec.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h3 className="text-lg font-headline font-bold text-on-surface">Recommended for You</h3>
          <button className="text-sm font-semibold text-primary hover:underline">See Nearby</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.slice(0, 3).map((doc) => (
            <div 
              key={doc.id}
              onClick={() => onSelectDoctor(doc)}
              className="group bg-surface-container-low p-5 rounded-2xl hover:bg-surface-container-lowest transition-all duration-300 cursor-pointer"
            >
              <div className="flex gap-4 items-start">
                <img 
                  src={doc.image} 
                  alt={doc.name}
                  className="w-20 h-24 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-bold text-secondary tracking-widest uppercase">{doc.specialty}</p>
                      <h5 className="text-lg font-headline font-bold text-on-surface">{doc.name}</h5>
                    </div>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold">{doc.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-on-surface-variant flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {doc.distance}
                    </span>
                    <button className="p-2 rounded-full text-primary hover:bg-primary-container/20 active:scale-90 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className="fixed bottom-28 right-8 z-40 w-14 h-14 bg-tertiary text-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
        <Plus className="w-6 h-6" />
      </button>
    </motion.div>
  );
}

function ProfileScreen({ doctor, onBack, onConfirm, key }: { doctor: Doctor, onBack: () => void, onConfirm: () => void, key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-7xl mx-auto px-6 pt-24 pb-32"
    >
      <TopAppBar title="The Clinical Sanctuary" onBack={onBack} />

      <div className="flex items-center gap-2 mb-8 text-on-surface-variant">
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Specialists
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient overflow-hidden relative">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
              <div className="w-48 h-64 rounded-xl overflow-hidden shadow-lg transform -rotate-2">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">
                  {doctor.specialty}
                </span>
                <h2 className="font-headline font-extrabold text-4xl text-on-surface tracking-tight mb-2">{doctor.name}</h2>
                <p className="text-on-surface-variant text-lg font-medium mb-6">Neurological Restoration & Advanced Diagnostics</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface-variant font-medium">Experience</span>
                    <span className="text-primary font-bold text-xl">{doctor.experience}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface-variant font-medium">Patient Score</span>
                    <div className="flex items-center gap-1">
                      <span className="text-primary font-bold text-xl">{doctor.rating}</span>
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface-variant font-medium">Reviews</span>
                    <span className="text-primary font-bold text-xl">{doctor.reviews}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low rounded-xl p-6">
              <h3 className="font-headline font-bold text-lg mb-4 text-on-surface">About {doctor.name.split(' ')[1]}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {doctor.bio}
              </p>
            </div>
            <div className="bg-surface-container-low rounded-xl p-6">
              <h3 className="font-headline font-bold text-lg mb-4 text-on-surface">Practice Philosophy</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm italic">
                "{doctor.philosophy}"
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <h3 className="font-headline font-bold text-2xl text-on-surface">Patient Reflections</h3>
              <button className="text-primary font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Eleanor M.', text: "The atmosphere of the clinic and Dr. Vane's calm demeanor immediately put me at ease. Truly a sanctuary." },
                { name: 'Marcus T.', text: "Precise diagnostics and a clear plan. I felt heard for the first time in years." }
              ].map((rev, i) => (
                <div key={i} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                  <div className="flex gap-1 text-primary mb-3">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-primary" />)}
                  </div>
                  <p className="text-sm text-on-surface italic mb-4">"{rev.text}"</p>
                  <span className="text-xs font-bold text-on-surface-variant">— {rev.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 sticky top-24">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient">
            <h3 className="font-headline font-extrabold text-2xl text-on-surface mb-6">Secure Your Visit</h3>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-on-surface">September 2024</h4>
                <div className="flex gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
                <div className="flex flex-col items-center justify-center min-w-[70px] h-24 bg-primary text-white rounded-xl shadow-lg transform scale-105">
                  <span className="text-[10px] font-medium opacity-80 uppercase tracking-tighter">Mon</span>
                  <span className="text-2xl font-bold">12</span>
                </div>
                {[13, 14, 15, 16].map((day, i) => (
                  <button key={day} className="flex flex-col items-center justify-center min-w-[70px] h-24 bg-surface-container-low text-on-surface-variant rounded-xl hover:bg-surface-container transition-colors">
                    <span className="text-[10px] font-medium opacity-80 uppercase tracking-tighter">
                      {['Tue', 'Wed', 'Thu', 'Fri'][i]}
                    </span>
                    <span className="text-2xl font-bold">{day}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-on-surface mb-4">Available Slots</h4>
              <div className="grid grid-cols-3 gap-3">
                {['09:00 AM', '10:30 AM', '11:00 AM', '01:45 PM', '03:30 PM', '05:00 PM'].map((time, i) => (
                  <button 
                    key={time} 
                    className={`py-3 px-2 border rounded-lg text-xs font-bold text-center transition-all ${i === 0 ? 'border-primary text-primary bg-primary/5' : 'border-surface-container-high text-on-surface-variant hover:border-primary hover:text-primary'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-t border-surface-container-high">
                <div className="flex flex-col">
                  <span className="text-[10px] text-on-surface-variant font-medium">Consultation Fee</span>
                  <span className="text-2xl font-extrabold text-on-surface tracking-tight">$240.00</span>
                </div>
                <span className="text-[10px] font-bold text-tertiary px-3 py-1 bg-tertiary-fixed-dim/20 rounded-full">Insurance Accepted</span>
              </div>
              <button 
                onClick={onConfirm}
                className="w-full py-5 bg-primary text-white font-headline font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                Confirm Appointment
              </button>
              <p className="text-[10px] text-center text-on-surface-variant font-medium">No cancellation fee if changed 24h prior.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ConfirmationScreen({ doctor, onClose, onReturnHome, key }: { doctor: Doctor, onClose: () => void, onReturnHome: () => void, key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col"
    >
      <header className="bg-surface/80 backdrop-blur-lg sticky top-0 z-50 flex justify-between items-center px-6 py-4 w-full shadow-ambient">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-primary">The Clinical Sanctuary</span>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary-container/20 transition-colors active:scale-95 duration-200"
        >
          <X className="w-5 h-5 text-on-surface-variant" />
        </button>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary-container mb-6">
              <CheckCircle2 className="text-on-secondary-container w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">Confirmed.</h1>
            <p className="text-lg text-on-surface-variant max-w-md mx-auto">Your journey to wellness continues. We've reserved your time at the sanctuary.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm">
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Appointment Date</span>
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-3xl font-bold text-on-surface">Thursday, Oct 24</h2>
                    <span className="text-xl text-on-surface-variant font-medium">at 10:30 AM</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-16 h-16 rounded-lg object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-bold text-on-surface">{doctor.name}</h3>
                    <p className="text-sm text-on-surface-variant">{doctor.specialty}</p>
                  </div>
                  <div className="ml-auto">
                    <CheckCircle2 className="text-primary w-6 h-6 fill-primary-fixed" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-4">
              <button className="group w-full h-full min-h-[160px] bg-primary rounded-xl p-6 flex flex-col justify-between items-start text-white hover:bg-primary-container transition-all active:scale-95 duration-200">
                <CalendarPlus className="w-8 h-8" />
                <div className="text-left">
                  <span className="block font-bold text-lg">Add to Calendar</span>
                  <span className="text-sm opacity-80">Sync with Google or iCal</span>
                </div>
              </button>
            </div>

            <div className="md:col-span-6 bg-surface-container rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center">
                <MapPin className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface">The Clinical Sanctuary</h4>
                <p className="text-xs text-on-surface-variant">424 Wellness Row, Suite 102</p>
              </div>
            </div>

            <div className="md:col-span-6 bg-surface-container rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center">
                <Info className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface">Check-in Protocol</h4>
                <p className="text-xs text-on-surface-variant">Please arrive 10 minutes early</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="text-primary font-semibold hover:bg-primary-container/10 px-6 py-3 rounded-full transition-colors">
              Reschedule Appointment
            </button>
            <div className="hidden md:block w-px h-4 bg-surface-container-high" />
            <button className="text-primary font-semibold hover:bg-primary-container/10 px-6 py-3 rounded-full transition-colors">
              Download Summary (PDF)
            </button>
          </div>
        </div>
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <button 
          onClick={onReturnHome}
          className="bg-surface-container-lowest text-primary font-bold px-8 py-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary-fixed transition-all active:scale-90"
        >
          <Home className="w-5 h-5" />
          Return Home
        </button>
      </div>
    </motion.div>
  );
}

function TopAppBar({ title, onBack }: { title: string, onBack?: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg shadow-ambient">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <button onClick={onBack} className="md:hidden p-1 hover:bg-surface-container-high rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
            <img 
              src="https://picsum.photos/seed/user/100/100" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-xl font-headline font-bold tracking-tight text-primary">{title}</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary-container/20 transition-colors active:scale-95">
          <Bell className="w-5 h-5 text-primary" />
        </button>
      </div>
    </header>
  );
}

function BottomNav({ currentScreen, onNavigate }: { currentScreen: Screen, onNavigate: (screen: Screen) => void }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="pointer-events-auto bg-surface/80 backdrop-blur-xl rounded-3xl shadow-ambient flex justify-around items-center py-3 w-full">
          <button 
            onClick={() => onNavigate('dashboard')}
            className={`flex flex-col items-center justify-center px-5 py-2 rounded-2xl transition-all active:scale-90 ${currentScreen === 'dashboard' ? 'bg-primary text-white' : 'text-on-surface-variant hover:text-primary'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-wide mt-1">Home</span>
          </button>
          <button 
            className={`flex flex-col items-center justify-center px-5 py-2 rounded-2xl transition-all active:scale-90 text-on-surface-variant hover:text-primary`}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-wide mt-1">Appointments</span>
          </button>
          <button 
            className={`flex flex-col items-center justify-center px-5 py-2 rounded-2xl transition-all active:scale-90 text-on-surface-variant hover:text-primary`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-wide mt-1">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
