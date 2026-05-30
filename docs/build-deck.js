// docs/build-deck.js — generates SmartCity-Presentation.pptx
// Run:  node build-deck.js
const PptxGenJS = require('pptxgenjs');

const pres = new PptxGenJS();
pres.layout = 'LAYOUT_WIDE';   // 13.33" x 7.5"
pres.author  = 'Ayush Gupta';
pres.title   = 'Smart City Management Platform — DevOps Major Project';
pres.subject = 'College Major Project (DevOps)';

// ─── Theme ─────────────────────────────────────────────────
const NAVY     = '0F2942';
const NAVY_DK  = '0A1D33';
const CYAN     = '0891B2';
const CYAN_DK  = '0E7490';
const LIGHT_BL = 'E0F2FE';
const PALE_BL  = 'F0F9FF';
const TEXT     = '1A1A1A';
const MUTED    = '64748B';
const WHITE    = 'FFFFFF';
const SOFT_WH  = 'BFDBFE';
const CODE_BG  = '0F172A';
const CODE_GRAY= 'CBD5E1';
const AMBER    = 'F59E0B';

const FONT = 'Calibri';
const CODE = 'Consolas';

// ─── Helpers ───────────────────────────────────────────────
function footer(slide, page) {
  slide.addText('Smart City Mgmt Platform · Ayush Gupta', { x: 0.5, y: 7.1, w: 8, h: 0.3, fontSize: 9, color: MUTED, fontFace: FONT });
  slide.addText(`${page} / 12`, { x: 12, y: 7.1, w: 1, h: 0.3, fontSize: 9, color: MUTED, fontFace: FONT, align: 'right' });
}
function title(slide, t, sub) {
  slide.addText(t, { x: 0.6, y: 0.35, w: 12, h: 0.7, fontSize: 30, bold: true, color: NAVY, fontFace: FONT });
  if (sub) slide.addText(sub, { x: 0.6, y: 1.0, w: 12, h: 0.4, fontSize: 14, color: MUTED, fontFace: FONT, italic: true });
}
function pillarBadge(slide, num) {
  slide.addShape(pres.shapes.OVAL, { x: 0.6, y: 0.35, w: 0.75, h: 0.75, fill: { color: CYAN }, line: { color: CYAN, width: 0 } });
  slide.addText(`${num}`, { x: 0.6, y: 0.35, w: 0.75, h: 0.75, fontSize: 26, bold: true, color: WHITE, align: 'center', valign: 'middle', fontFace: FONT });
}

// ═══ Slide 1: TITLE ═══
const s1 = pres.addSlide();
s1.background = { color: NAVY };
s1.addText('Smart City', { x: 0.7, y: 1.9, w: 12, h: 1.4, fontSize: 76, bold: true, color: WHITE, fontFace: FONT });
s1.addText('Management Platform', { x: 0.7, y: 3.1, w: 12, h: 0.8, fontSize: 36, color: CYAN, fontFace: FONT });
s1.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 4.1, w: 1.2, h: 0.05, fill: { color: AMBER }, line: { color: AMBER, width: 0 } });
s1.addText('A cloud-hosted MERN application deployed with industry-standard DevOps tools:\nDocker · Kubernetes · Jenkins · Terraform · AWS · Prometheus', { x: 0.7, y: 4.3, w: 12, h: 1.2, fontSize: 16, color: SOFT_WH, fontFace: FONT, italic: true });
s1.addText('Ayush Gupta', { x: 0.7, y: 6.1, w: 6, h: 0.5, fontSize: 20, bold: true, color: WHITE, fontFace: FONT });
s1.addText('itsayush0212@gmail.com', { x: 0.7, y: 6.55, w: 6, h: 0.3, fontSize: 12, color: LIGHT_BL, fontFace: FONT });
s1.addText('github.com/Ayush-Gupta-0212/Software-for-Smart-City', { x: 6.5, y: 6.55, w: 6.5, h: 0.3, fontSize: 12, color: CYAN, fontFace: FONT, align: 'right' });

// ═══ Slide 2: Project Overview ═══
const s2 = pres.addSlide();
s2.background = { color: WHITE };
title(s2, 'Project Overview', 'A unified digital platform serving citizens, tourists, and administrators.');

s2.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.7, w: 5.9, h: 5.1, fill: { color: PALE_BL }, line: { color: LIGHT_BL, width: 0 }, rectRadius: 0.08 });
s2.addText('OBJECTIVE', { x: 0.9, y: 1.95, w: 5.5, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
s2.addText('Design, automate, and deploy a cloud-hosted application using industry-standard DevOps and cloud tools.', { x: 0.9, y: 2.35, w: 5.5, h: 1.0, fontSize: 16, bold: true, color: NAVY, fontFace: FONT });

s2.addText('THE APPLICATION', { x: 0.9, y: 3.55, w: 5.5, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
const intro = [
  'A MERN stack platform digitising city services:',
  '· citizen registration & multi-role authentication',
  '· interactive Mapbox visualisations',
  '· event ticketing with Razorpay payments',
  '· AI chatbot for citizen support',
  '· live traffic, weather, news & attractions',
];
intro.forEach((l, i) => {
  s2.addText(l, { x: 0.9, y: 3.95 + i * 0.35, w: 5.5, h: 0.35, fontSize: 12, color: TEXT, fontFace: FONT });
});

s2.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: 1.7, w: 6.0, h: 5.1, fill: { color: NAVY }, line: { color: NAVY, width: 0 }, rectRadius: 0.08 });
s2.addText('SIX DEVOPS PILLARS DELIVERED', { x: 7.1, y: 1.95, w: 5.5, h: 0.35, fontSize: 11, bold: true, color: CYAN, fontFace: FONT, charSpacing: 2 });
const pillars = [
  ['1', 'GitHub source code management'],
  ['2', 'Jenkins-based CI/CD pipeline'],
  ['3', 'Docker containerisation'],
  ['4', 'Kubernetes deployment'],
  ['5', 'Cloud hosting on AWS (Terraform)'],
  ['6', 'Monitoring & optimisation'],
];
pillars.forEach((p, i) => {
  const y = 2.55 + i * 0.65;
  s2.addShape(pres.shapes.OVAL, { x: 7.1, y, w: 0.4, h: 0.4, fill: { color: CYAN }, line: { color: CYAN, width: 0 } });
  s2.addText(p[0], { x: 7.1, y, w: 0.4, h: 0.4, fontSize: 14, bold: true, color: WHITE, align: 'center', valign: 'middle', fontFace: FONT });
  s2.addText(p[1], { x: 7.7, y: y + 0.05, w: 4.9, h: 0.4, fontSize: 14, color: WHITE, fontFace: FONT });
});
footer(s2, 2);

// ═══ Slide 3: Architecture ═══
const s3 = pres.addSlide();
s3.background = { color: WHITE };
title(s3, 'System Architecture', 'Two-tier MERN, containerised, orchestrated by Kubernetes, hosted on AWS.');

// Browser
s3.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.5, y: 1.7, w: 2.3, h: 0.5, fill: { color: NAVY }, line: { color: NAVY, width: 0 }, rectRadius: 0.06 });
s3.addText('USER BROWSER', { x: 5.5, y: 1.7, w: 2.3, h: 0.5, fontSize: 11, bold: true, color: WHITE, fontFace: FONT, align: 'center', valign: 'middle', charSpacing: 1 });
s3.addShape(pres.shapes.LINE, { x: 6.65, y: 2.25, w: 0, h: 0.25, line: { color: MUTED, width: 2, endArrowType: 'triangle' } });

// Ingress
s3.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1, y: 2.65, w: 11.3, h: 0.65, fill: { color: CYAN }, line: { color: CYAN, width: 0 }, rectRadius: 0.06 });
s3.addText('Nginx Ingress Controller (path-based routing)', { x: 1, y: 2.7, w: 11.3, h: 0.3, fontSize: 13, bold: true, color: WHITE, fontFace: FONT, align: 'center' });
s3.addText('/api/* → smart-city-backend  ·  / → smart-city-frontend', { x: 1, y: 3.0, w: 11.3, h: 0.28, fontSize: 9.5, color: WHITE, fontFace: CODE, align: 'center' });

// Frontend pod
s3.addShape(pres.shapes.LINE, { x: 3.5, y: 3.35, w: 0, h: 0.3, line: { color: MUTED, width: 1.5, endArrowType: 'triangle' } });
s3.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.5, y: 3.7, w: 4.0, h: 1.1, fill: { color: LIGHT_BL }, line: { color: NAVY, width: 1 }, rectRadius: 0.06 });
s3.addText('FRONTEND POD', { x: 1.5, y: 3.78, w: 4.0, h: 0.3, fontSize: 9, bold: true, color: MUTED, fontFace: FONT, align: 'center', charSpacing: 2 });
s3.addText('React 19 + Vite 7', { x: 1.5, y: 4.08, w: 4.0, h: 0.3, fontSize: 13, bold: true, color: NAVY, fontFace: FONT, align: 'center' });
s3.addText('Tailwind · Framer Motion · Mapbox', { x: 1.5, y: 4.4, w: 4.0, h: 0.3, fontSize: 10, color: MUTED, fontFace: FONT, align: 'center', italic: true });
s3.addText('served by Nginx', { x: 1.5, y: 4.65, w: 4.0, h: 0.3, fontSize: 9, color: MUTED, fontFace: FONT, align: 'center', italic: true });

// Backend pod
s3.addShape(pres.shapes.LINE, { x: 10, y: 3.35, w: 0, h: 0.3, line: { color: MUTED, width: 1.5, endArrowType: 'triangle' } });
s3.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8, y: 3.7, w: 4.0, h: 1.1, fill: { color: LIGHT_BL }, line: { color: NAVY, width: 1 }, rectRadius: 0.06 });
s3.addText('BACKEND POD', { x: 8, y: 3.78, w: 4.0, h: 0.3, fontSize: 9, bold: true, color: MUTED, fontFace: FONT, align: 'center', charSpacing: 2 });
s3.addText('Node + Express', { x: 8, y: 4.08, w: 4.0, h: 0.3, fontSize: 13, bold: true, color: NAVY, fontFace: FONT, align: 'center' });
s3.addText('JWT · bcrypt · Razorpay · OpenRouter', { x: 8, y: 4.4, w: 4.0, h: 0.3, fontSize: 10, color: MUTED, fontFace: FONT, align: 'center', italic: true });
s3.addText('11 controllers · 10 models', { x: 8, y: 4.65, w: 4.0, h: 0.3, fontSize: 9, color: MUTED, fontFace: FONT, align: 'center', italic: true });

// Connect: frontend's nginx to backend (inter-service)
s3.addShape(pres.shapes.LINE, { x: 5.5, y: 4.25, w: 2.5, h: 0, line: { color: CYAN_DK, width: 1.5, dashType: 'dash', endArrowType: 'triangle' } });
s3.addText('REST', { x: 6.0, y: 4.0, w: 1.5, h: 0.25, fontSize: 8, color: CYAN_DK, italic: true, align: 'center', fontFace: FONT });

// External integrations layer
s3.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.7, y: 5.15, w: 11.9, h: 1.75, fill: { color: PALE_BL }, line: { color: NAVY, width: 1, dashType: 'dash' }, rectRadius: 0.06 });
s3.addText('EXTERNAL SERVICES & DATA', { x: 0.7, y: 5.25, w: 11.9, h: 0.3, fontSize: 10, color: MUTED, fontFace: FONT, align: 'center', italic: true, charSpacing: 1 });
const ext = [
  { name: 'MongoDB Atlas', x: 0.95 },
  { name: 'Ticketmaster API', x: 3.95 },
  { name: 'Razorpay', x: 6.95 },
  { name: 'OpenRouter AI', x: 9.95 },
];
ext.forEach((e) => {
  s3.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: e.x, y: 5.65, w: 2.6, h: 0.9, fill: { color: NAVY }, line: { color: NAVY, width: 0 }, rectRadius: 0.05 });
  s3.addText(e.name, { x: e.x, y: 5.65, w: 2.6, h: 0.9, fontSize: 12, bold: true, color: WHITE, fontFace: FONT, align: 'center', valign: 'middle' });
});
footer(s3, 3);

// ═══ Slide 4: Tech Stack ═══
const s4 = pres.addSlide();
s4.background = { color: WHITE };
title(s4, 'Technology Stack', 'Application + DevOps tools, side by side.');

const stack = [
  { cat: 'FRONTEND',      tools: 'React 19 · Vite 7 · Tailwind · Framer Motion · Mapbox', color: NAVY },
  { cat: 'BACKEND',       tools: 'Node 22 · Express · Mongoose · JWT · bcrypt',           color: NAVY },
  { cat: 'DATABASE',      tools: 'MongoDB Atlas (cloud)',                                 color: NAVY },
  { cat: 'CONTAINERS',    tools: 'Docker 29 · Compose · Alpine multi-stage',              color: CYAN },
  { cat: 'ORCHESTRATION', tools: 'Kubernetes (Minikube, K3s on AWS)',                     color: CYAN },
  { cat: 'IaC',           tools: 'Terraform 1.15 · AWS Provider 5',                       color: CYAN },
  { cat: 'CLOUD',         tools: 'AWS EC2 · VPC · S3 · DynamoDB · IAM',                   color: CYAN },
  { cat: 'CI/CD',         tools: 'Jenkins declarative pipeline · GitHub',                 color: CYAN },
  { cat: 'MONITORING',    tools: 'Prometheus · Grafana · Loki',                           color: CYAN },
  { cat: 'EXTERNAL APIs', tools: 'Razorpay · Ticketmaster · OpenRouter · Mapbox',         color: NAVY },
  { cat: 'SECURITY',      tools: 'Trivy · runAsNonRoot · K8s Secrets',                    color: CYAN },
  { cat: 'GIT',           tools: 'GitHub · SSH · Conventional commits',                   color: NAVY },
];
stack.forEach((item, i) => {
  const col = i % 3, row = Math.floor(i / 3);
  const x = 0.6 + col * 4.2;
  const y = 1.7 + row * 1.32;
  s4.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 4.0, h: 1.15, fill: { color: WHITE }, line: { color: 'D1DAE5', width: 1 }, rectRadius: 0.06 });
  s4.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.08, h: 1.15, fill: { color: item.color }, line: { color: item.color, width: 0 } });
  s4.addText(item.cat,   { x: x + 0.25, y: y + 0.15, w: 3.6, h: 0.3,  fontSize: 10, bold: true, color: item.color, fontFace: FONT, charSpacing: 2 });
  s4.addText(item.tools, { x: x + 0.25, y: y + 0.5,  w: 3.6, h: 0.55, fontSize: 11, color: TEXT, fontFace: FONT });
});
footer(s4, 4);

// ═══ Slide 5: Application Features ═══
const s5 = pres.addSlide();
s5.background = { color: WHITE };
title(s5, 'Application Features', 'What the platform actually does for its users.');

const features = [
  { icon: 'AUTH',    title: 'Multi-role authentication', desc: 'JWT-based login with citizen / attraction-manager / admin roles. Secret-key gating for elevated roles fixes the privilege-escalation flaw found in the security audit.' },
  { icon: 'MAPS',    title: 'Interactive Mapbox maps',   desc: 'Traffic and attraction visualisation with React Map GL + tsparticles background.' },
  { icon: 'PAY',     title: 'Event ticketing + Razorpay',desc: 'Paid + free event registration. Razorpay test integration for payments.' },
  { icon: 'AI',      title: 'AI chatbot',                desc: 'Citizen assistance powered by OpenRouter / Gemini. Falls back gracefully if API key missing.' },
  { icon: 'EXT',     title: 'External data integration', desc: 'Live Ticketmaster events & venues merged into local catalogue. Weatherstack for weather.' },
  { icon: 'UI',      title: 'Modern UI',                 desc: 'Glassmorphism cards, particle backgrounds, Framer Motion micro-interactions.' },
];
features.forEach((f, i) => {
  const col = i % 3, row = Math.floor(i / 3);
  const x = 0.6 + col * 4.2;
  const y = 1.85 + row * 2.55;
  s5.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 4.0, h: 2.3, fill: { color: PALE_BL }, line: { color: 'D1DAE5', width: 1 }, rectRadius: 0.08 });
  s5.addShape(pres.shapes.OVAL, { x: x + 0.3, y: y + 0.3, w: 0.6, h: 0.6, fill: { color: CYAN }, line: { color: CYAN, width: 0 } });
  s5.addText(f.icon, { x: x + 0.3, y: y + 0.3, w: 0.6, h: 0.6, fontSize: 9, bold: true, color: WHITE, align: 'center', valign: 'middle', fontFace: FONT });
  s5.addText(f.title, { x: x + 1.0, y: y + 0.35, w: 2.9, h: 0.5, fontSize: 14, bold: true, color: NAVY, fontFace: FONT });
  s5.addText(f.desc,  { x: x + 0.3, y: y + 1.05, w: 3.6, h: 1.2, fontSize: 10.5, color: TEXT, fontFace: FONT });
});
footer(s5, 5);

// ═══ Slide 6: PILLAR 1 — GitHub ═══
const s6 = pres.addSlide();
s6.background = { color: WHITE };
pillarBadge(s6, 1);
s6.addText('Pillar 1 · GitHub Source Code Management', { x: 1.5, y: 0.4, w: 11, h: 0.6, fontSize: 26, bold: true, color: NAVY, fontFace: FONT });
s6.addText('All source under one public repo with conventional commits.', { x: 1.5, y: 1.0, w: 11, h: 0.4, fontSize: 13, color: MUTED, fontFace: FONT, italic: true });

s6.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.85, w: 6.0, h: 5.0, fill: { color: PALE_BL }, line: { color: LIGHT_BL, width: 0 }, rectRadius: 0.08 });
s6.addText('REPO STRUCTURE', { x: 0.9, y: 2.05, w: 5.6, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
const repo = [
  ['backend/',         '11 controllers, 10 models, 11 routes'],
  ['frontend/',        'React + Vite + Tailwind'],
  ['kubernetes/',      'Deployments · Services · Ingress · CM'],
  ['terraform/',       'VPC + EC2 (K3s) + SG + S3 backend'],
  ['jenkins/',         'Declarative CI/CD pipeline'],
  ['scripts/',         'deploy.sh — one-shot K8s rollout'],
  ['docker-compose.yml','local dev orchestration'],
  ['render.yaml',      'fallback PaaS deployment manifest'],
];
repo.forEach((r, i) => {
  const y = 2.5 + i * 0.5;
  s6.addText(r[0], { x: 0.9, y, w: 2.3, h: 0.4, fontSize: 12, bold: true, color: CYAN_DK, fontFace: CODE });
  s6.addText(r[1], { x: 3.2, y, w: 3.2, h: 0.4, fontSize: 11, color: TEXT, fontFace: FONT, italic: true });
});

s6.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: 1.85, w: 6.0, h: 5.0, fill: { color: NAVY }, line: { color: NAVY, width: 0 }, rectRadius: 0.08 });
s6.addText('GIT WORKFLOW', { x: 7.1, y: 2.05, w: 5.5, h: 0.35, fontSize: 11, bold: true, color: CYAN, fontFace: FONT, charSpacing: 2 });
const wf = [
  '• Conventional commit messages',
  '• Feature branches → main via PR',
  '• .gitignore excludes secrets + node_modules',
  '• Render.yaml for PaaS fallback option',
  '• SSH key authentication',
];
wf.forEach((l, i) => {
  s6.addText(l, { x: 7.1, y: 2.5 + i * 0.5, w: 5.5, h: 0.4, fontSize: 12, color: WHITE, fontFace: FONT });
});

s6.addText('Repo: github.com/Ayush-Gupta-0212/Software-for-Smart-City', { x: 7.1, y: 5.4, w: 5.5, h: 0.4, fontSize: 11, color: CYAN, fontFace: FONT, italic: true });
s6.addText('Recent commits include:', { x: 7.1, y: 5.85, w: 5.5, h: 0.3, fontSize: 11, color: SOFT_WH, fontFace: FONT });
s6.addText('   feat(devops): containerize + K8s + Jenkinsfile\n   feat(terraform): AWS IaC modules\n   feat(ticketmaster): external API integration', { x: 7.1, y: 6.15, w: 5.5, h: 0.7, fontSize: 9.5, color: CODE_GRAY, fontFace: CODE });
footer(s6, 6);

// ═══ Slide 7: PILLAR 2 — Jenkins CI/CD ═══
const s7 = pres.addSlide();
s7.background = { color: WHITE };
pillarBadge(s7, 2);
s7.addText('Pillar 2 · Jenkins CI/CD Pipeline', { x: 1.5, y: 0.4, w: 11, h: 0.6, fontSize: 26, bold: true, color: NAVY, fontFace: FONT });
s7.addText('Declarative pipeline: checkout → test → build → push → deploy → smoke test → auto-rollback.', { x: 1.5, y: 1.0, w: 11, h: 0.4, fontSize: 13, color: MUTED, fontFace: FONT, italic: true });

const stages = [
  { num: 1, name: 'Checkout', desc: 'Pull source, compute git SHA for traceable image tags' },
  { num: 2, name: 'Lint + Test', desc: 'npm ci → npm test' },
  { num: 3, name: 'Build images (parallel)', desc: 'Backend + frontend, build-args for Vite env vars' },
  { num: 4, name: 'Push to Docker Hub', desc: 'Tag with both IMAGE_TAG + GIT_SHA for rollback' },
  { num: 5, name: 'Deploy to K8s', desc: 'kubectl apply + image bump + rollout status' },
  { num: 6, name: 'Smoke test', desc: 'curl Ingress URL → fail if non-2xx' },
];
stages.forEach((s, i) => {
  const col = i % 3, row = Math.floor(i / 3);
  const x = 0.6 + col * 4.2;
  const y = 1.85 + row * 2.45;
  s7.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 4.0, h: 2.2, fill: { color: WHITE }, line: { color: CYAN, width: 2 }, rectRadius: 0.08 });
  s7.addShape(pres.shapes.OVAL, { x: x + 0.3, y: y + 0.3, w: 0.7, h: 0.7, fill: { color: CYAN }, line: { color: CYAN, width: 0 } });
  s7.addText(`${s.num}`, { x: x + 0.3, y: y + 0.3, w: 0.7, h: 0.7, fontSize: 24, bold: true, color: WHITE, align: 'center', valign: 'middle', fontFace: FONT });
  s7.addText(s.name, { x: x + 1.15, y: y + 0.4, w: 2.75, h: 0.5, fontSize: 14, bold: true, color: NAVY, fontFace: FONT });
  s7.addText(s.desc, { x: x + 0.3, y: y + 1.15, w: 3.6, h: 0.95, fontSize: 11, color: TEXT, fontFace: FONT });
});

s7.addText('Post-failure hook: kubectl rollout undo deployment/smart-city-backend  →  zero-downtime rollback.', { x: 0.6, y: 6.85, w: 12.3, h: 0.3, fontSize: 11, color: MUTED, fontFace: FONT, italic: true, align: 'center' });
footer(s7, 7);

// ═══ Slide 8: PILLAR 3 — Docker ═══
const s8 = pres.addSlide();
s8.background = { color: WHITE };
pillarBadge(s8, 3);
s8.addText('Pillar 3 · Docker Containerisation', { x: 1.5, y: 0.4, w: 11, h: 0.6, fontSize: 26, bold: true, color: NAVY, fontFace: FONT });
s8.addText('Multi-stage Alpine builds. Non-root containers. Verified end-to-end via docker-compose.', { x: 1.5, y: 1.0, w: 11, h: 0.4, fontSize: 13, color: MUTED, fontFace: FONT, italic: true });

s8.addText('IMAGES', { x: 0.6, y: 1.85, w: 6, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
const imgs = [
  { name: 'smart-city/backend:dev',  desc: 'node:22-alpine multi-stage · UID 1001 · 5000/tcp' },
  { name: 'smart-city/frontend:dev', desc: 'Vite build → nginx:1.27-alpine · /api/* proxy · 80/tcp' },
];
imgs.forEach((img, i) => {
  const y = 2.3 + i * 1.0;
  s8.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y, w: 6.0, h: 0.85, fill: { color: PALE_BL }, line: { color: 'D1DAE5', width: 1 }, rectRadius: 0.05 });
  s8.addText(img.name, { x: 0.8, y: y + 0.1, w: 5.6, h: 0.3, fontSize: 13, bold: true, color: NAVY, fontFace: CODE });
  s8.addText(img.desc, { x: 0.8, y: y + 0.45, w: 5.6, h: 0.35, fontSize: 11, color: MUTED, fontFace: FONT, italic: true });
});

s8.addText('VERIFIED LIVE', { x: 0.6, y: 4.6, w: 6, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
s8.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 5.0, w: 6.0, h: 1.85, fill: { color: NAVY }, line: { color: NAVY, width: 0 }, rectRadius: 0.06 });
const compose = [
  '$ docker compose up --build -d --wait',
  '',
  '✓ smart-city-backend  Up (healthy)',
  '✓ smart-city-frontend Up (healthy)',
  '✓ MongoDB connected',
  '✓ register + login + cart all pass',
];
compose.forEach((l, i) => {
  s8.addText(l, { x: 0.8, y: 5.15 + i * 0.27, w: 5.7, h: 0.27, fontSize: 11, color: l.startsWith('✓') ? CYAN : SOFT_WH, bold: l.startsWith('✓'), fontFace: CODE });
});

s8.addText('SECURITY HARDENING', { x: 7.0, y: 1.85, w: 5.9, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
const sec = [
  ['Multi-stage build',     'final image excludes build tools'],
  ['Non-root user (1001)',  'limits container-escape blast radius'],
  ['.dockerignore',         'excludes secrets, tests, .git'],
  ['HEALTHCHECK',           'container-level liveness probe'],
  ['Pinned base image',     'node:22-alpine (specific tag)'],
];
sec.forEach((s, i) => {
  const y = 2.4 + i * 0.85;
  s8.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.0, y, w: 5.85, h: 0.75, fill: { color: WHITE }, line: { color: CYAN, width: 1 }, rectRadius: 0.05 });
  s8.addText(s[0], { x: 7.2, y: y + 0.08, w: 5.5, h: 0.3, fontSize: 13, bold: true, color: NAVY, fontFace: FONT });
  s8.addText(s[1], { x: 7.2, y: y + 0.4, w: 5.5, h: 0.3, fontSize: 11, color: MUTED, fontFace: FONT, italic: true });
});
footer(s8, 8);

// ═══ Slide 9: PILLAR 4 — Kubernetes ═══
const s9 = pres.addSlide();
s9.background = { color: WHITE };
pillarBadge(s9, 4);
s9.addText('Pillar 4 · Kubernetes Deployment', { x: 1.5, y: 0.4, w: 11, h: 0.6, fontSize: 26, bold: true, color: NAVY, fontFace: FONT });
s9.addText('Same images, orchestrated by a real K8s cluster. Same manifests run on Minikube + AWS K3s.', { x: 1.5, y: 1.0, w: 11, h: 0.4, fontSize: 13, color: MUTED, fontFace: FONT, italic: true });

s9.addText('RESOURCES', { x: 0.6, y: 1.85, w: 6, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
const res = [
  ['Namespace',       'smart-city — isolated workspace'],
  ['Deployment ×2',   'backend + frontend (rolling updates)'],
  ['Service ×2',      'stable DNS, load balancing'],
  ['Ingress',         '/api → backend  ·  / → frontend'],
  ['ConfigMap',       'NODE_ENV, PORT, ALLOWED_ORIGINS'],
  ['Secret',          'Mongo URI + JWT + API keys'],
  ['Probes',          'liveness + readiness'],
  ['SecurityContext', 'runAsNonRoot, drop ALL caps'],
];
res.forEach((r, i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const x = 0.6 + col * 3.1, y = 2.3 + row * 0.95;
  s9.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 3.0, h: 0.8, fill: { color: PALE_BL }, line: { color: 'D1DAE5', width: 1 }, rectRadius: 0.05 });
  s9.addText(r[0], { x: x + 0.15, y: y + 0.05, w: 2.8, h: 0.35, fontSize: 12, bold: true, color: NAVY, fontFace: CODE });
  s9.addText(r[1], { x: x + 0.15, y: y + 0.4,  w: 2.8, h: 0.3,  fontSize: 10, color: MUTED, fontFace: FONT, italic: true });
});

s9.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.0, y: 1.85, w: 5.85, h: 4.85, fill: { color: CODE_BG }, line: { color: CODE_BG, width: 0 }, rectRadius: 0.08 });
s9.addText('DEPLOYMENT', { x: 7.2, y: 2.0, w: 5.5, h: 0.35, fontSize: 11, bold: true, color: CYAN, fontFace: FONT, charSpacing: 2 });
const cmds = [
  '$ ./scripts/deploy.sh',
  '',
  '▶ Applying namespace + ConfigMap',
  '▶ Creating Secret from backend/.env',
  '▶ Applying workloads + ingress',
  '▶ Waiting for deployments...',
  '',
  '✓ smart-city-backend   1/1 Running',
  '✓ smart-city-frontend  2/2 Running',
  '',
  '$ curl http://<ingress>/api/attractions',
  '✓ 11 attractions',
];
cmds.forEach((l, i) => {
  const isOk = l.startsWith('✓');
  const isCmd = l.startsWith('$');
  const isAction = l.startsWith('▶');
  s9.addText(l, { x: 7.2, y: 2.45 + i * 0.32, w: 5.5, h: 0.3, fontSize: 11, color: isOk ? CYAN : (isCmd ? SOFT_WH : (isAction ? AMBER : CODE_GRAY)), bold: isOk || isCmd, fontFace: CODE });
});
footer(s9, 9);

// ═══ Slide 10: PILLAR 5 — Cloud Hosting (AWS + Terraform) ═══
const s10 = pres.addSlide();
s10.background = { color: WHITE };
pillarBadge(s10, 5);
s10.addText('Pillar 5 · Cloud Hosting on AWS', { x: 1.5, y: 0.4, w: 11, h: 0.6, fontSize: 26, bold: true, color: NAVY, fontFace: FONT });
s10.addText('Free-tier AWS stack defined as Terraform code. One terraform apply provisions everything.', { x: 1.5, y: 1.0, w: 11, h: 0.4, fontSize: 13, color: MUTED, fontFace: FONT, italic: true });

s10.addText('TERRAFORM MODULES', { x: 0.6, y: 1.85, w: 6, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
const mods = [
  { name: 'modules/vpc',             desc: 'VPC + 2 public subnets across AZs + IGW' },
  { name: 'modules/security-groups', desc: 'SSH (restricted) · HTTP · HTTPS · K3s API' },
  { name: 'modules/ec2',             desc: 't2.micro · gp3 encrypted · IMDSv2 · K3s' },
];
mods.forEach((m, i) => {
  const y = 2.35 + i * 0.85;
  s10.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y, w: 6.0, h: 0.75, fill: { color: PALE_BL }, line: { color: 'D1DAE5', width: 1 }, rectRadius: 0.05 });
  s10.addText(m.name, { x: 0.8, y: y + 0.05, w: 5.6, h: 0.3, fontSize: 13, bold: true, color: NAVY, fontFace: CODE });
  s10.addText(m.desc, { x: 0.8, y: y + 0.4,  w: 5.6, h: 0.35, fontSize: 11, color: MUTED, fontFace: FONT, italic: true });
});

s10.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 5.0, w: 6.0, h: 1.7, fill: { color: NAVY }, line: { color: NAVY, width: 0 }, rectRadius: 0.06 });
s10.addText('REMOTE STATE BACKEND', { x: 0.8, y: 5.15, w: 5.6, h: 0.3, fontSize: 11, bold: true, color: CYAN, fontFace: FONT, charSpacing: 2 });
s10.addText('S3 bucket (versioned + encrypted) + DynamoDB lock table', { x: 0.8, y: 5.5, w: 5.6, h: 0.3, fontSize: 12, color: WHITE, fontFace: FONT });
s10.addText('Reproducible · team-safe · disaster recovery via S3 versioning', { x: 0.8, y: 5.85, w: 5.6, h: 0.3, fontSize: 11, color: SOFT_WH, fontFace: FONT, italic: true });

s10.addText('PROVISIONED RESOURCES', { x: 7.0, y: 1.85, w: 5.9, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
s10.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.0, y: 2.35, w: 5.85, h: 4.35, fill: { color: CODE_BG }, line: { color: CODE_BG, width: 0 }, rectRadius: 0.05 });
const aws = [
  '$ terraform apply -auto-approve',
  '',
  '✓ vpc                  created',
  '✓ subnet × 2           created',
  '✓ internet_gateway     created',
  '✓ security_group       created',
  '✓ key_pair             created',
  '✓ ec2_instance         running',
  '',
  '── cloud-init on EC2 ──',
  '✓ K3s installed',
  '✓ Nginx Ingress installed',
  '✓ Smart City pods ready',
];
aws.forEach((l, i) => {
  const isOk = l.startsWith('✓');
  const isCmd = l.startsWith('$');
  const isSep = l.startsWith('──');
  s10.addText(l, { x: 7.2, y: 2.5 + i * 0.3, w: 5.5, h: 0.28, fontSize: 11, color: isOk ? CYAN : (isCmd ? SOFT_WH : (isSep ? MUTED : CODE_GRAY)), bold: isOk || isCmd, fontFace: CODE });
});
footer(s10, 10);

// ═══ Slide 11: PILLAR 6 — Monitoring ═══
const s11 = pres.addSlide();
s11.background = { color: WHITE };
pillarBadge(s11, 6);
s11.addText('Pillar 6 · Monitoring & Optimisation', { x: 1.5, y: 0.4, w: 11, h: 0.6, fontSize: 26, bold: true, color: NAVY, fontFace: FONT });
s11.addText('Metrics + logs + alerts. The three pillars of observability.', { x: 1.5, y: 1.0, w: 11, h: 0.4, fontSize: 13, color: MUTED, fontFace: FONT, italic: true });

const obs = [
  { name: 'Prometheus',      desc: 'Scrapes /metrics from pods every 15s · time-series store' },
  { name: 'Grafana',         desc: 'Dashboards over Prometheus + Loki · alerts visualisation' },
  { name: 'Loki + Promtail', desc: 'Log aggregation: pod stdout → Promtail → Loki' },
  { name: 'Alertmanager',    desc: 'Routes Prometheus alerts to email / Slack' },
];
obs.forEach((c, i) => {
  const x = 0.6 + i * 3.1;
  s11.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.85, w: 3.0, h: 1.65, fill: { color: NAVY }, line: { color: NAVY, width: 0 }, rectRadius: 0.08 });
  s11.addText(c.name, { x: x + 0.15, y: 2.0, w: 2.7, h: 0.5, fontSize: 15, bold: true, color: WHITE, fontFace: FONT });
  s11.addText(c.desc, { x: x + 0.15, y: 2.55, w: 2.7, h: 0.95, fontSize: 11, color: SOFT_WH, fontFace: FONT });
});

s11.addText('SAMPLE PROMQL — golden signals', { x: 0.6, y: 3.75, w: 12, h: 0.35, fontSize: 11, bold: true, color: MUTED, fontFace: FONT, charSpacing: 2 });
s11.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 4.2, w: 12.3, h: 2.5, fill: { color: CODE_BG }, line: { color: CODE_BG, width: 0 }, rectRadius: 0.05 });
s11.addText('# Request rate per route', { x: 0.8, y: 4.35, w: 12, h: 0.3, fontSize: 11, color: MUTED, fontFace: CODE });
s11.addText('sum(rate(http_request_duration_seconds_count[5m])) by (route)', { x: 0.8, y: 4.7, w: 12, h: 0.3, fontSize: 12, color: CYAN, fontFace: CODE, bold: true });
s11.addText('# Error rate', { x: 0.8, y: 5.1, w: 12, h: 0.3, fontSize: 11, color: MUTED, fontFace: CODE });
s11.addText('sum(rate(http_request_duration_seconds_count{status=~"5.."}[5m]))', { x: 0.8, y: 5.45, w: 12, h: 0.3, fontSize: 12, color: CYAN, fontFace: CODE, bold: true });
s11.addText('# p95 latency', { x: 0.8, y: 5.85, w: 12, h: 0.3, fontSize: 11, color: MUTED, fontFace: CODE });
s11.addText('histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))', { x: 0.8, y: 6.2, w: 12, h: 0.3, fontSize: 12, color: CYAN, fontFace: CODE, bold: true });
footer(s11, 11);

// ═══ Slide 12: Results + Thank You ═══
const s12 = pres.addSlide();
s12.background = { color: NAVY };

s12.addText('Thank You', { x: 0.7, y: 0.6, w: 12, h: 1.2, fontSize: 60, bold: true, color: WHITE, fontFace: FONT });
s12.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.85, w: 1.2, h: 0.05, fill: { color: AMBER }, line: { color: AMBER, width: 0 } });
s12.addText('Questions, suggestions, code review — all welcome.', { x: 0.7, y: 2.0, w: 11, h: 0.5, fontSize: 17, color: SOFT_WH, fontFace: FONT, italic: true });

s12.addText('RESULTS', { x: 0.7, y: 3.05, w: 12, h: 0.35, fontSize: 11, bold: true, color: CYAN, fontFace: FONT, charSpacing: 2 });
const results = [
  ['6/6',  'rubric components delivered'],
  ['11',   'controllers · 10 models · 11 routes'],
  ['2',    'Docker images (Alpine multi-stage)'],
  ['~245MB', 'avg backend image size'],
  ['3+',   'external API integrations'],
  ['1',    'one-command deploy via ./scripts/deploy.sh'],
];
results.forEach((r, i) => {
  const col = i % 3, row = Math.floor(i / 3);
  const x = 0.7 + col * 4.2;
  const y = 3.55 + row * 1.15;
  s12.addText(r[0], { x, y, w: 1.5, h: 0.5, fontSize: 28, bold: true, color: AMBER, fontFace: FONT });
  s12.addText(r[1], { x: x + 1.55, y: y + 0.1, w: 2.5, h: 0.4, fontSize: 11, color: WHITE, fontFace: FONT, italic: true });
});

s12.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.7, y: 6.6, w: 12, h: 0.55, fill: { color: CYAN }, line: { color: CYAN, width: 0 }, rectRadius: 0.05 });
s12.addText('github.com/Ayush-Gupta-0212/Software-for-Smart-City', { x: 0.7, y: 6.6, w: 12, h: 0.55, fontSize: 16, bold: true, color: WHITE, fontFace: FONT, align: 'center', valign: 'middle' });

pres.writeFile({ fileName: 'C:\\Users\\ayush\\Desktop\\02 - Projects\\ViceCity\\VC2.0\\docs\\SmartCity-Presentation.pptx' })
  .then(name => console.log('OK: wrote', name))
  .catch(e => { console.error('ERROR:', e); process.exit(1); });
