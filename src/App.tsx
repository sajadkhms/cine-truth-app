import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Film, 
  Store, 
  User, 
  Clapperboard, 
  Users, 
  Clock, 
  PlayCircle,
  Bell,
  ChevronLeft,
  Video,
  Mic,
  Scissors
} from 'lucide-react';

const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    body {
      font-family: 'Vazirmatn', sans-serif;
      background-color: #020617; /* slate-950 */
      color: #f8fafc; /* slate-50 */
    }
    
    /* Custom Scrollbar for dark theme */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #0f172a; 
    }
    ::-webkit-scrollbar-thumb {
      background: #334155; 
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #475569; 
    }
  `}} />
);

const NAV_ITEMS = [
  { id: 'dashboard', label: 'داشبورد', icon: LayoutDashboard },
  { id: 'submissions', label: 'آثار من', icon: Film },
  { id: 'market', label: 'بازار فیلم', icon: Store },
  { id: 'profile', label: 'پروفایل', icon: User },
];

const MY_SUBMISSIONS = [
  {
    id: 1,
    title: 'روزی روزگاری؛ مردم ایران',
    type: 'مستند بلند (۵۱ دقیقه)',
    status: 'در حال بازبینی هیات انتخاب',
    statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    icon: <Clock className="w-4 h-4 mr-1" />,
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    title: 'نیرنگ آمریکایی',
    type: 'مستند سریالی / طرح پیشنهادی',
    status: 'آماده پیچینگ',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    icon: <PlayCircle className="w-4 h-4 mr-1" />,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }
];

const MY_CREW = [
  { id: 1, name: 'علیرضا صمدی', role: 'تدوینگر', icon: <Scissors className="w-5 h-5 text-slate-400" /> },
  { id: 2, name: 'امین فروزش‌فرد', role: 'فیلمبردار', icon: <Video className="w-5 h-5 text-slate-400" /> },
  { id: 3, name: 'محمد معصومی‌اصل', role: 'صداگذار', icon: <Mic className="w-5 h-5 text-slate-400" /> },
];

const DashboardView = () => {
  return (
    <div className="space-y-6 pb-20 md:pb-0 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            خوش آمدید، سید محمد مهدی دزفولی
          </h1>
          <p className="text-slate-400">
            به پنل اختصاصی فیلمسازان جشنواره بین‌المللی سینماحقیقت خوش آمدید.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20">
          <Clapperboard className="w-5 h-5" />
          ارسال اثر جدید
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: My Submissions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-100">
              <Film className="w-6 h-6 text-indigo-400" />
              آثار من
            </h2>
            <button className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center transition-colors">
              مشاهده همه <ChevronLeft className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MY_SUBMISSIONS.map((item) => (
              <div key={item.id} className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
                <div className="h-32 w-full relative overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 right-3 z-20">
                    <span className={`flex items-center px-2.5 py-1 text-xs font-medium rounded-full border backdrop-blur-md ${item.statusColor}`}>
                      {item.icon}
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="p-5 relative z-20">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{item.type}</p>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                      جزئیات پرونده
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Crew & Info */}
        <div className="space-y-6">
          {/* Crew Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-100 mb-6">
              <Users className="w-6 h-6 text-indigo-400" />
              عوامل پروژه‌ها
            </h2>
            
            <div className="space-y-4">
              {MY_CREW.map((member) => (
                <div key={member.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    {member.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200">{member.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-2 border border-slate-700 hover:border-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-colors">
              مدیریت عوامل
            </button>
          </div>

          {/* Quick Stats/Info */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Store className="w-24 h-24" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">بازار فیلم مستند</h3>
            <p className="text-sm text-indigo-200/70 mb-4 relative z-10 leading-relaxed">
              کاتالوگ آثار شما در پورتال خریداران بین‌المللی فعال شده است. جهت تنظیم قرارهای B2B به بخش بازار فیلم مراجعه کنید.
            </p>
            <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center relative z-10">
              ورود به مارکت <ChevronLeft className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const PlaceholderView = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-in fade-in">
    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700">
      <Clapperboard className="w-10 h-10 text-slate-500" />
    </div>
    <h2 className="text-2xl font-bold text-slate-200 mb-2">بخش {title}</h2>
    <p className="text-slate-500 max-w-md">
      این بخش در حال توسعه است و به زودی در دسترس قرار می‌گیرد.
    </p>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'submissions': return <PlaceholderView title="آثار من" />;
      case 'market': return <PlaceholderView title="بازار فیلم" />;
      case 'profile': return <PlaceholderView title="پروفایل کاربری" />;
      default: return <DashboardView />;
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-indigo-500/30 flex">
      <CustomStyles />
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 right-0 bg-slate-950 border-l border-slate-800 z-50">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Film className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-white text-lg leading-tight">سینماحقیقت</h1>
            <p className="text-[10px] text-slate-400">مرکز گسترش سینمای مستند</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10 font-medium' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden border border-slate-600">
              <User className="w-6 h-6 text-slate-400" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-white truncate">سید محمد مهدی...</p>
              <p className="text-xs text-indigo-400">فیلمساز / تهیه‌کننده</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:mr-64 relative min-h-screen">
        {/* Top Header (Desktop) */}
        <header className="hidden md:flex h-20 items-center justify-between px-8 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
          <div className="text-slate-400 text-sm">
            فراخوان هجدهمین جشنواره بین‌المللی فیلم مستند ایران
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors bg-slate-900 rounded-full border border-slate-800">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
            </button>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
              <Film className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-bold text-white text-base">سینماحقیقت</h1>
          </div>
          <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </header>

        {/* Dynamic Content */}
        <div className="p-4 md:p-8">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800 flex items-center justify-around p-2 pb-safe z-50">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-16 h-14 gap-1 transition-colors ${
                isActive ? 'text-indigo-400' : 'text-slate-500'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'fill-indigo-400/20' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
    </div>
  );
}