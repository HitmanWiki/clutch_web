import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  ShieldCheck, 
  Disc, 
  Zap, 
  Twitter, 
  Send, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Monitor,
  Database,
  Layers,
  ChevronRight,
  Globe,
  Trophy,
  Activity,
  Shield,
  Target,
  Disc as DiscordIcon
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                  COMPONENTS                                */
/* -------------------------------------------------------------------------- */

const Nav = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 w-full z-[999] bg-black/60 backdrop-blur-xl border-b border-white/5"
  >
    <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <motion.div 
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-12 h-12 bg-clutch-blue rounded-xl flex items-center justify-center font-display font-black text-3xl text-white shadow-[0_0_30px_rgba(0,51,160,0.6)]"
        >
          C
        </motion.div>
        <span className="font-display font-black text-3xl tracking-tighter text-white italic">CLUTCH</span>
      </div>
      
      <div className="hidden lg:flex gap-12 text-[12px] font-black uppercase tracking-[0.4em] text-white/40">
        {['Scout', 'Tokenomics', 'Buy', 'Mascot'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-clutch-blue transition-all relative group py-2">
            {item}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-clutch-blue transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="hidden sm:block px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-black text-[11px] uppercase tracking-[0.2em] transition-all text-white/60 hover:text-white">
          Dapp
        </a>
        <a href="#buy" className="px-8 py-3 bg-clutch-blue text-white rounded-lg font-black text-[11px] uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(0,51,160,0.4)] hover:shadow-[0_0_50px_rgba(0,51,160,0.6)] hover:scale-105 active:scale-95 transition-all outline outline-1 outline-white/20 block text-center">
          Buy $CLUTCH
        </a>
      </div>
    </div>
  </motion.nav>
);

const SectionDivider = () => (
  <div className="clutch-divider" />
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    {/* Video Background */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover scale-110 opacity-40 brightness-50"
      >
        <source src="/clutch-ezgif.com-gif-to-mp4-converter.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 flag-stripe-overlay pointer-events-none" />
    </div>

    {/* Atmospheric Glow */}
    <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-clutch-blue to-transparent opacity-20 rounded-[100%] scale-x-150 translate-y-1/2 blur-3xl pointer-events-none z-10" />
    
    <div className="relative z-30 text-center px-6 w-full max-w-7xl pt-40 md:pt-48">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="relative inline-block group">
          <div className="absolute -inset-10 bg-clutch-blue/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h1 className="font-display font-black text-[90px] md:text-[180px] leading-[0.8] tracking-tighter text-clutch-gradient uppercase select-none drop-shadow-[0_0_80px_rgba(0,51,160,0.5)] italic pb-4 relative z-10">
            CLUTCH
          </h1>
        </div>
        <h2 className="font-display text-4xl md:text-7xl font-black uppercase tracking-[0.25em] text-white mt-4 mb-16 select-none drop-shadow-2xl">
          THE PRIDE OF BASE
        </h2>
      </motion.div>

      <div className="relative w-full max-w-4xl mx-auto z-40">
        <motion.img 
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          src="/logo.png" 
          alt="Clutch Mascot Logo" 
          className="w-full h-auto drop-shadow-[0_20px_100px_rgba(0,51,160,0.6)] relative z-40 hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-12 md:-mt-8 justify-center relative z-50"
        >
          <a href="#buy" className="clutch-gradient-btn min-w-[240px] text-center flex items-center justify-center">
            Buy on Base
          </a>
          <button className="clutch-red-btn min-w-[240px]">
            Join Telegram
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

const Scout = () => (
  <section id="scout" className="py-40 px-6 relative usa-bg overflow-hidden border-t-8 border-clutch-blue/20">
    <div className="max-w-7xl mx-auto relative z-20">
      {/* Floating background icons */}
      <div className="absolute -top-20 -left-20 text-clutch-blue/10 animate-float-football hidden lg:block">
        <Target size={200} strokeWidth={0.5} />
      </div>
      <div className="absolute top-1/2 -right-40 text-clutch-red/10 animate-float-football hidden lg:block" style={{ animationDelay: '2s' }}>
        <Trophy size={300} strokeWidth={0.5} />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-clutch-blue/20 blur-[120px] opacity-40 shadow-[0_0_100px_rgba(0,51,160,0.3)]" />
          <img 
            src="/5857306030277069676.jpg" 
            alt="Clutch Action" 
            className="w-full h-auto relative z-10 drop-shadow-[0_0_60px_rgba(0,51,160,0.6)] rounded-2xl border-2 border-white/10"
          />
          {/* Field effect */}
          <div className="absolute -bottom-16 left-0 w-full h-32 stadium-bg [mask-image:linear-gradient(to_top,black,transparent)] opacity-60 z-0" />
        </motion.div>
        
        <div className="space-y-16">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            NATIVE TO <span className="text-clutch-blue">BASE.</span>
          </motion.h2>
          
          <div className="space-y-12">
            {[
              { 
                label: "BASE",
                title: "Layer 2 Speed", 
                desc: "Clutch is deployed on Coinbase's Base chain, ensuring ultra-fast transactions and minimal gas fees for all holders." 
              },
              { 
                label: "BET",
                title: "Clutch Betting App", 
                desc: "Coming soon: A fully decentralized football betting platform where $CLUTCH holders get exclusive odds and rewards." 
              },
              { 
                label: "USA",
                title: "The 2026 Vision", 
                desc: "We are building the biggest football community in crypto, counting down to the 2026 World Cup with massive fan incentives." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-8 group"
              >
                <div className="w-20 h-20 bg-[#0A0A0A] border-2 border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-clutch-blue transition-all shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-clutch-blue/5 group-hover:bg-clutch-blue/10 transition-colors" />
                  <div className="relative z-10 text-clutch-blue font-display font-black text-2xl tracking-tighter italic">
                     {item.label}
                  </div>
                </div>
                <div className="pt-2">
                  <h4 className="text-2xl font-display font-black uppercase tracking-tight mb-2 group-hover:text-clutch-blue transition-colors">{item.title}</h4>
                  <p className="text-white/40 leading-relaxed font-bold uppercase tracking-widest text-xs max-w-md">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Tokenomics = () => {
  const stats = [
    { label: "COMMUNITY AIRDROP", percent: 15, detail: "Loyal Supporters" },
    { label: "LIQUIDITY POOL", percent: 60, detail: "Burned & Locked" },
    { label: "MARKETING & PARTNERS", percent: 10, detail: "World Cup Exposure" },
    { label: "DEVELOPMENT FUND", percent: 10, detail: "Betting App Build" },
    { label: "TEAM ALLOCATION", percent: 5, detail: "Vested for 2 Years" },
  ];

  return (
    <section id="tokenomics" className="py-40 px-6 relative usa-bg overflow-hidden border-t-8 border-clutch-blue/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-7xl md:text-8xl font-black mb-24 uppercase tracking-tighter">
          CLUTCH <span className="text-clutch-red">TOKENOMICS</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-6">
             <h3 className="text-xs font-black uppercase tracking-[0.5em] text-white/30 mb-8 px-2">Supply Distribution</h3>
             {stats.map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="clutch-economy-bar"
               >
                 <div className="text-4xl font-display font-black text-clutch-blue tabular-nums w-20">
                   {item.percent}%
                 </div>
                 <div className="flex-1">
                   <h4 className="font-black uppercase tracking-tighter text-lg">{item.label}</h4>
                   <p className="text-[11px] font-bold text-white/25 uppercase tracking-[0.2em] mt-1">({item.detail})</p>
                 </div>
               </motion.div>
             ))}
          </div>

          <div className="relative group">
            <div className="absolute -inset-10 bg-clutch-blue/20 blur-[120px] rounded-full animate-pulse" />
            <img 
              src="/5855054230463384451.jpg" 
              alt="Tokenomics Illustration" 
              className="w-full h-auto relative z-10 drop-shadow-[0_0_100px_rgba(0,51,160,0.6)] rounded-3xl border-2 border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <motion.div 
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           className="w-full"
        >
          <div className="bg-black/95 border-y-4 border-clutch-red py-10 px-10 transform -rotate-1 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
            <div className="absolute inset-0 bg-clutch-red/5 animate-pulse pointer-events-none" />
            <div className="text-white font-display font-black text-3xl md:text-6xl text-center tracking-tighter uppercase relative z-10 drop-shadow-[0_0_30px_rgba(200,16,46,0.5)]">
               MAX SUPPLY: 1,000,000,000 $CLUTCH ON BASE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Buy = () => (
  <section id="buy" className="py-40 px-6 relative usa-bg overflow-hidden border-t-8 border-clutch-blue/20">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-display text-7xl md:text-8xl font-black mb-24 uppercase tracking-tighter text-center">
        HOW TO <span className="text-clutch-blue">BUY</span>
      </h2>
      
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Create Wallet", desc: "Download Coinbase Wallet or Metamask and bridge some ETH to Base Chain." },
          { step: "02", title: "Select DEX", desc: "Head over to Uniswap or SushiSwap and select the Base Network." },
          { step: "03", title: "Insert CA", desc: "Paste the official $CLUTCH contract address into the swap interface." },
          { step: "04", title: "Swap ETH", desc: "Select the amount of ETH you want to swap and hit 'Confirm'. Welcome to the team!" },
        ].map((item, i) => (
          <div key={i} className="clutch-card p-10 relative group border-2 border-white/5 hover:border-clutch-blue transition-all">
            <div className="text-clutch-blue font-display font-black text-5xl mb-6 italic opacity-50 group-hover:opacity-100 transition-opacity">
              {item.step}
            </div>
            <h4 className="text-xl font-display font-black uppercase mb-4 tracking-tighter">{item.title}</h4>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 bg-black border-2 border-clutch-blue/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Official Contract Address</p>
          <div className="font-mono text-clutch-blue break-all text-sm font-bold bg-white/5 p-4 rounded-lg select-all">
            0x0000000000000000000000000000000000000000 (BASE)
          </div>
        </div>
        <button className="clutch-gradient-btn whitespace-nowrap">
           Copy Address
        </button>
      </div>
    </div>
  </section>
);

const Tactics = () => (
  <section id="tactics" className="py-40 px-6 usa-bg overflow-hidden relative border-t-8 border-clutch-blue/20 bg-gradient-to-b from-black to-[#050505]">
    {/* Background visual element */}
    <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden">
       <img src="/logo.png" className="w-full h-full object-contain scale-150 rotate-12 opacity-50" alt="bg" />
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-white">
          THE <span className="text-clutch-blue italic">ROAD TO 2026</span>
        </h2>
        <p className="text-white/30 font-black uppercase tracking-[0.5em] text-xs">The master strategy. The victory path.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 relative">
        {[
          { 
            phase: "PHASE 1: GENESIS", 
            desc: "TOKEN LAUNCH ON BASE, FAIR LAUNCH PROTOCOL, AND INITIAL COMMUNITY AIRDROPS.",
            icon: Activity
          },
          { 
            phase: "PHASE 2: EVOLUTION", 
            desc: "CLUTCH BETTING APP BETA, TIER 1 EXCHANGE LISTINGS, AND STRATEGIC PARTNERSHIPS.",
            icon: Target
          },
          { 
            phase: "PHASE 3: DOMINANCE", 
            desc: "WORLD CUP 2026 BETTING SEASON. CLUTCH BECOMES THE NATIVE CURRENCY OF FOOTBALL.",
            icon: Trophy
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="clutch-card-accent p-10 flex flex-col items-center text-center group cursor-default h-full relative"
          >
            <div className="w-full aspect-square bg-[#050505] rounded-2xl mb-8 flex items-center justify-center border-2 border-white/5 relative overflow-hidden group-hover:border-clutch-blue/30 transition-all">
               <div className="absolute inset-0 bg-clutch-blue/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
               <item.icon size={100} className="text-clutch-blue drop-shadow-[0_0_30px_rgba(0,51,160,0.5)] relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-display font-black uppercase mb-4 tracking-widest text-clutch-blue">{item.phase}</h3>
            <p className="text-white/50 text-xs leading-relaxed font-bold uppercase tracking-[0.2em] px-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-40 relative pt-20">
        <div className="flex justify-between mb-6 text-[14px] font-black uppercase tracking-[0.6em] text-white/40 px-4">
           <span className="text-white">REGIONALS</span>
           <span className="text-clutch-red animate-pulse">QUALIFIERS IN PROGRESS</span>
           <span className="text-white">FINALS</span>
        </div>
        <div className="h-12 w-full bg-[#050505] border-2 border-clutch-blue/30 rounded-full relative overflow-visible shadow-[inset_0_4px_12px_rgba(0,0,0,1)]">
           <motion.div 
             className="absolute top-0 left-0 h-full bg-gradient-to-r from-clutch-blue via-white/40 to-clutch-red rounded-full shadow-[0_0_40px_rgba(0,51,160,0.4)]"
             initial={{ width: 0 }}
             whileInView={{ width: '45.5%' }}
             viewport={{ once: true }}
             transition={{ duration: 3, ease: "easeInOut" }}
           />
           {/* Moving Mascot Tracker */}
           <motion.div 
             className="absolute top-1/2 -translate-y-1/2 z-30"
             initial={{ left: 0 }}
             whileInView={{ left: '45.5%' }}
             viewport={{ once: true }}
             transition={{ duration: 3, ease: "easeInOut" }}
           >
             <div className="relative -translate-x-1/2 group">
                <div className="absolute -inset-6 bg-clutch-blue/20 blur-2xl rounded-full group-hover:bg-clutch-blue/40 transition-colors" />
                <div className="w-28 h-28 rounded-full border-4 border-clutch-blue bg-[#0A0A0A] p-1 shadow-2xl relative">
                   <img src="/5843827048512687173.jpg" className="w-full h-full object-cover rounded-full" alt="tracker" />
                   <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-clutch-red text-white text-[11px] font-black px-3 py-1.5 rounded uppercase tracking-widest shadow-2xl whitespace-nowrap">
                      CLUTCH ON TOUR
                   </div>
                </div>
             </div>
           </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Mascot = () => (
  <section id="mascot" className="relative usa-bg overflow-hidden border-y-8 border-clutch-red/20 py-40">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-40">
        <h2 className="font-display text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">
          ACTIVATE <span className="text-clutch-blue">CLUTCH</span>
        </h2>
        <p className="text-white/30 font-black uppercase tracking-[0.5em] text-sm">The 12th man. The ultimate crypto advantage.</p>
      </div>

      <div className="relative">
        {/* Center Image - Responsive Scale */}
        <div className="lg:absolute left-1/2 top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 pointer-events-none flex justify-center mb-16 lg:mb-0">
           <div className="relative">
              <div className="absolute -inset-10 lg:-inset-40 bg-clutch-blue/20 blur-[60px] lg:blur-[150px] rounded-full animate-pulse" />
              <img 
                src="/5843827048512687173.png" 
                alt="Main Mascot Clutch" 
                className="w-[280px] md:w-[400px] lg:w-[550px] h-auto relative z-10 drop-shadow-[0_0_60px_rgba(0,51,160,0.4)] lg:drop-shadow-[0_0_100px_rgba(0,51,160,0.5)]" 
              />
           </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-64 relative z-20">
           <div className="space-y-24 md:space-y-64">
             <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex justify-start">
               <div className="w-full max-w-sm p-10 bg-black/95 border-2 border-clutch-blue/30 rounded-3xl shadow-2xl relative group hover:border-clutch-blue transition-all backdrop-blur-xl">
                  <div className="text-clutch-red font-display font-black text-6xl mb-6 tracking-tighter italic">01</div>
                  <h4 className="font-black uppercase tracking-[0.3em] text-lg mb-4 text-white">BETTING APP</h4>
                  <p className="text-white/40 text-xs font-bold leading-relaxed uppercase tracking-widest">WAGER $CLUTCH ON WORLD CUP QUALIFIERS. HIGH ODDS, INSTANT PAYOUTS, ZERO VIG. COMING Q4 2024.</p>
                  <div className="absolute top-8 right-8 text-white/5 group-hover:text-clutch-blue/20 transition-colors"><Monitor size={60} /></div>
               </div>
             </motion.div>
             <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex justify-start">
               <div className="w-full max-w-sm p-10 bg-black/95 border-2 border-clutch-blue/30 rounded-3xl shadow-2xl relative group hover:border-clutch-blue transition-all backdrop-blur-xl">
                  <div className="text-clutch-red font-display font-black text-6xl mb-6 tracking-tighter italic">03</div>
                  <h4 className="font-black uppercase tracking-[0.3em] text-lg mb-4 text-white">DECENTRALIZED FAN-ID</h4>
                  <p className="text-white/40 text-xs font-bold leading-relaxed uppercase tracking-widest">SECURE YOUR ON-CHAIN IDENTITY. ACCESS EXCLUSIVE STADIUM PERKS AND FAN REWARDS GLOBALLY.</p>
                  <div className="absolute top-8 right-8 text-white/5 group-hover:text-clutch-blue/20 transition-colors"><Cpu size={60} /></div>
               </div>
             </motion.div>
           </div>

           <div className="space-y-24 md:space-y-64">
             <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex justify-end">
               <div className="w-full max-w-sm p-10 bg-black/95 border-2 border-clutch-blue/30 rounded-3xl shadow-2xl relative group hover:border-clutch-blue transition-all backdrop-blur-xl text-right">
                  <div className="text-clutch-red font-display font-black text-6xl mb-6 tracking-tighter italic">02</div>
                  <h4 className="font-black uppercase tracking-[0.3em] text-lg mb-4 text-white">SMART STATS</h4>
                  <p className="text-white/40 text-xs font-bold leading-relaxed uppercase tracking-widest">REAL-TIME ON-CHAIN SETTLEMENT FOR ALL BETS. TRANSPARENT, AUDITABLE, AND UNSTOPPABLE.</p>
                  <div className="absolute top-8 left-8 text-white/5 group-hover:text-clutch-blue/20 transition-colors"><Database size={60} /></div>
               </div>
             </motion.div>
             <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex justify-end">
               <div className="w-full max-w-sm p-10 bg-black/95 border-2 border-clutch-blue/30 rounded-3xl shadow-2xl relative group hover:border-clutch-blue transition-all backdrop-blur-xl text-right">
                  <div className="text-clutch-red font-display font-black text-6xl mb-6 tracking-tighter italic">04</div>
                  <h4 className="font-black uppercase tracking-[0.3em] text-lg mb-4 text-white">STAKING LAB</h4>
                  <p className="text-white/40 text-xs font-bold leading-relaxed uppercase tracking-widest">STAKE $CLUTCH TO EARN A SHARE OF BETTING PLATFORM REVENUE. THE HOUSE ALWAYS WINS, AND SO DO YOU.</p>
                  <div className="absolute top-8 left-8 text-white/5 group-hover:text-clutch-blue/20 transition-colors"><Trophy size={60} /></div>
               </div>
             </motion.div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 px-6 bg-black usa-bg border-t-8 border-clutch-red relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="relative inline-block mb-10 group">
           <div className="absolute -inset-10 bg-clutch-blue/10 blur-[80px] rounded-full group-hover:bg-clutch-blue/20 transition-colors" />
           <img 
             src="/logo.png" 
             alt="Standing Clutch" 
             className="w-[300px] md:w-[400px] h-auto relative z-10 drop-shadow-[0_0_50px_rgba(0,51,160,0.3)]" 
             referrerPolicy="no-referrer"
           />
        </div>
        <p className="text-white font-display font-black text-lg md:text-xl uppercase tracking-[0.2em] max-w-[280px] mx-auto lg:mx-0 leading-tight">
           THE ULTIMATE SPIRIT OF BASE CHAIN FOOTBALL.
        </p>
      </div>

      <div className="flex flex-col items-center lg:items-end gap-16">
         <div className="text-center lg:text-right">
            <h3 className="font-display font-black text-4xl md:text-6xl mb-10 uppercase tracking-tighter text-white">THE NATION IS <span className="text-clutch-blue italic">WATCHING</span></h3>
            <div className="flex gap-8 justify-center lg:justify-end">
               {[
                 { Icon: Twitter, label: "Twitter" },
                 { Icon: Send, label: "Telegram" },
                 { Icon: Globe, label: "DexTools" }
               ].map((item, i) => (
                 <motion.a 
                   key={i} 
                   href="#" 
                   whileHover={{ y: -10, scale: 1.1 }}
                   className="w-20 h-20 rounded-full border-4 border-clutch-blue/50 flex items-center justify-center bg-black/80 hover:border-clutch-blue transition-all group shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                 >
                   <item.Icon className="w-10 h-10 text-clutch-blue group-hover:scale-110 transition-transform" />
                 </motion.a>
               ))}
            </div>
         </div>

         <div className="bg-[#0A0A0A] p-8 rounded-2xl border-2 border-white/5 w-full max-w-md shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-clutch-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-[12px] font-black uppercase tracking-[0.4em] mb-6 text-white/40">JOIN THE WHITELIST</h4>
            <div className="flex gap-2">
               <input 
                 placeholder="WALLET ADDRESS"
                 className="flex-1 bg-black border-2 border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-clutch-blue transition-all" 
               />
               <button className="bg-clutch-blue text-white px-8 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">JOIN</button>
            </div>
         </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-32 pt-10 border-t-2 border-white/5 flex flex-col md:flex-row justify-between text-[11px] font-black uppercase tracking-[0.5em] text-white/20 text-center md:text-left gap-6">
       <div>© 2026 CLUTCH ON BASE | ALL RIGHTS RESERVED.</div>
       <div className="flex gap-10 justify-center">
         <span className="text-clutch-blue italic">OFFICIAL CLUTCH PROTOCOL</span>
         <span>FULLY AUDITED SMART CONTRACT.</span>
       </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Scout />
        <Tokenomics />
        <Buy />
        <Tactics />
        <Mascot />
      </main>
      <Footer />
    </div>
  );
}

