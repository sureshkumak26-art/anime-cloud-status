'use client';

import { useEffect, useState } from 'react';

type Service = { name: string; description: string; status: 'operational'|'degraded'|'outage'; uptime: string; latency: string; icon: string };

const services: Service[] = [
  { name:'Website', description:'Anime Cloud customer website', status:'operational', uptime:'99.99%', latency:'42 ms', icon:'◈' },
  { name:'Control Panel', description:'Server management dashboard', status:'operational', uptime:'99.98%', latency:'58 ms', icon:'⌘' },
  { name:'Minecraft Hosting', description:'Game server infrastructure', status:'operational', uptime:'99.97%', latency:'71 ms', icon:'▣' },
  { name:'VPS Hosting', description:'Virtual private servers', status:'operational', uptime:'99.99%', latency:'36 ms', icon:'◆' },
  { name:'Payment Gateway', description:'Payments and checkout services', status:'operational', uptime:'99.95%', latency:'83 ms', icon:'₹' },
  { name:'Mail Hosting', description:'Transactional and hosted email', status:'degraded', uptime:'99.72%', latency:'126 ms', icon:'✉' },
  { name:'API', description:'Public and internal APIs', status:'operational', uptime:'99.99%', latency:'39 ms', icon:'⌁' },
  { name:'Discord Bot', description:'Anime Cloud community bot', status:'operational', uptime:'99.96%', latency:'64 ms', icon:'◉' },
];

const labels = { operational:'Operational', degraded:'Degraded Performance', outage:'Major Outage' };

export default function Home() {
  const [updated, setUpdated] = useState(new Date());
  const [paused, setPaused] = useState(false);
  useEffect(() => { const id = setInterval(() => { if (!paused) setUpdated(new Date()); }, 30000); return () => clearInterval(id); }, [paused]);
  const degraded = services.filter(s=>s.status==='degraded').length;
  const overall = degraded ? 'Minor Service Degradation' : 'All Systems Operational';
  return (
    <main>
      <nav className="nav"><div className="brand"><span className="brandMark">A</span><span>ANIME <b>CLOUD</b></span></div><div className="navLinks"><a href="#services">Services</a><a href="#incidents">Incidents</a><a href="#maintenance">Maintenance</a><button onClick={()=>setPaused(v=>!v)}>{paused?'Resume':'Pause'} refresh</button><a className="admin" href="/admin">Admin</a></div></nav>
      <section className="hero"><div className="glow"/><p className="eyebrow">ANIME CLOUD · SYSTEM STATUS</p><h1>Infrastructure,<br/><span>without the guesswork.</span></h1><p className="sub">Real-time visibility into every Anime Cloud service. We keep you informed when it matters.</p></section>
      <section className="overall"><div><span className="pulse"/><div><strong>{overall}</strong><small>Last checked {updated.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</small></div></div><span className="refresh">● Live monitoring</span></section>
      <section id="services" className="section"><div className="sectionHead"><div><p className="eyebrow">LIVE MONITORING</p><h2>Services</h2></div><span className="count">{services.length} services</span></div><div className="grid">{services.map(s=><article className="card" key={s.name}><div className="cardTop"><div className="icon">{s.icon}</div><span className={`status ${s.status}`}>● {labels[s.status]}</span></div><h3>{s.name}</h3><p>{s.description}</p><div className="metrics"><div><small>24H UPTIME</small><b>{s.uptime}</b></div><div><small>LATENCY</small><b>{s.latency}</b></div></div><div className="bars">{Array.from({length:30},(_,i)=><i key={i} className={s.status==='degraded' && i>25?'warn':''}/>)}</div></article>)}</div></section>
      <section id="incidents" className="section split"><div><p className="eyebrow">INCIDENT HISTORY</p><h2>Recent incidents</h2></div><div className="timeline"><div className="incident"><span className="dot resolved"/><div><b>Mail delivery delays</b><p>Resolved · Mail Hosting · Today</p><small>Outbound mail experienced elevated queue times. Service has returned to normal.</small></div><em>Resolved</em></div><div className="incident"><span className="dot resolved"/><div><b>Scheduled network maintenance</b><p>Completed · Core Network · Aug 28</p><small>Routine routing optimization completed successfully.</small></div><em>Resolved</em></div></div></section>
      <section id="maintenance" className="maintenance"><div><p className="eyebrow">UPCOMING</p><h2>Scheduled maintenance</h2><p>Nothing currently scheduled. If maintenance is planned, it will appear here with timing and affected services.</p></div><div className="calendar"><span>SEP</span><b>—</b><small>NO EVENTS</small></div></section>
      <footer><div className="brand"><span className="brandMark">A</span><span>ANIME <b>CLOUD</b></span></div><p>Transparent status. Reliable infrastructure.</p><span>Auto-refresh every 30 seconds</span></footer>
    </main>
  );
}