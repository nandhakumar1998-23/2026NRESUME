import React, { useState } from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import {
  ArrowUpRight,
  Calendar,
  Check,
  Copy,
  Download,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenInterview: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SERVICE_OPTIONS = [
  'Full-Time Software Engineering Role',
  'Full-Stack Web Application',
  'React Native Mobile App',
  'UI / UX Design System',
  'Technical SEO & Growth Audit',
];

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInterview }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const composedMailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry (${form.service}) — ${form.name || 'New Opportunity'}`
  )}&body=${encodeURIComponent(
    [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.whatsapp ? `WhatsApp / Phone: ${form.whatsapp}` : '',
      `Topic: ${form.service}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')
  )}`;

  const composedWhatsApp = `${PERSONAL_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hi Nandha, I'm ${form.name || 'reaching out'} (${form.email}) regarding ${form.service}: ${form.message}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#090E1A] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Resume Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="mb-20 rounded-2xl border border-white/[0.09] bg-gradient-to-r from-[#0B111E] via-[#10192B] to-[#0B111E] p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs font-mono text-[#F5A623] mb-2">Curriculum Vitae · Updated 2026</p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Download Complete Engineering Resume
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-300 max-w-xl">
              Review my full employment history at Yectra Technologies, Violet Infotech, and Thiran Infotech, technical
              skill matrix, and MCA/BCA academic background in PDF format.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <Button
              component="a"
              href={PERSONAL_INFO.resumePdfUrl}
              download="Nandha_Kumar_B_Resume_2026.pdf"
              variant="contained"
              color="primary"
              startIcon={<Download className="w-4 h-4" />}
              sx={{ borderRadius: '9999px', px: 3.25, py: 1.4 }}
            >
              Download Resume (PDF)
            </Button>
            <Button
              variant="outlined"
              onClick={onOpenInterview}
              startIcon={<Calendar className="w-4 h-4" />}
              sx={{
                borderRadius: '9999px',
                px: 3,
                py: 1.4,
                borderColor: 'rgba(255,255,255,0.18)',
                color: '#F8FAFC',
                '&:hover': {
                  borderColor: '#F5A623',
                  backgroundColor: 'rgba(245, 166, 35, 0.08)',
                },
              }}
            >
              Schedule Interview
            </Button>
          </div>
        </motion.div>

        {/* Main Contact 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Columns: Direct Verified Contact Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-mono text-[#F5A623] tracking-wider mb-3">06. Direct Contact</p>
            <h2
              className="font-display font-bold tracking-tight text-[#F8FAFC]"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
            >
              Open to full-time engineering roles &amp; product collaborations.
            </h2>
            <p className="mt-4 text-[15px] text-slate-300/90 leading-[1.7]">
              Looking for a dedicated Full-Stack &amp; React/Next.js Engineer to strengthen your team? Reach out
              directly via email, phone, WhatsApp, or book an interview slot on Google Calendar.
            </p>

            {/* Verified Contact Rows */}
            <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              <div className="py-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-mono text-slate-400">Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="mt-0.5 block text-sm sm:text-[15px] font-medium text-[#F8FAFC] hover:text-[#F5A623] transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/12 text-xs font-medium text-slate-300 hover:text-white hover:border-[#F5A623] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-slate-400">Phone &amp; WhatsApp</p>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="mt-0.5 block font-mono tabular-nums text-sm sm:text-[15px] font-medium text-[#F8FAFC] hover:text-[#F5A623] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/12 text-xs font-medium text-slate-300 hover:text-white hover:border-[#F5A623] transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/12 text-xs font-medium text-slate-300 hover:text-white hover:border-[#F5A623] transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-slate-400">Location</p>
                  <p className="mt-0.5 text-sm sm:text-[15px] font-medium text-slate-200">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-semibold">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#F5A623] transition-colors whitespace-nowrap"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span aria-hidden="true" className="text-slate-600">
                ·
              </span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#F5A623] transition-colors whitespace-nowrap"
              >
                <span>GitHub (@nandhakumar1998-23)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right 7 Columns: Interactive MUI Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0B111E] p-6 sm:p-9"
          >
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/40 flex items-center justify-center text-[#F5A623] mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F8FAFC]">
                  Inquiry Ready to Dispatch
                </h3>
                <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{form.name}</strong>. Choose your preferred direct channel
                  below to deliver your message immediately to Nandha Kumar B:
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
                  <Button
                    component="a"
                    href={composedMailto}
                    variant="contained"
                    color="primary"
                    startIcon={<Mail className="w-4 h-4" />}
                    sx={{ borderRadius: '9999px', px: 3 }}
                  >
                    Send via Email App
                  </Button>
                  <Button
                    component="a"
                    href={composedWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<MessageSquare className="w-4 h-4" />}
                    sx={{
                      borderRadius: '9999px',
                      px: 3,
                      borderColor: 'rgba(255,255,255,0.2)',
                      color: '#F8FAFC',
                    }}
                  >
                    Send on WhatsApp
                  </Button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      email: '',
                      whatsapp: '',
                      service: SERVICE_OPTIONS[0],
                      message: '',
                    });
                  }}
                  className="mt-6 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#F8FAFC]">
                    Send a Direct Message
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    Share role details, project requirements, or technical timelines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    label="Full Name"
                    required
                    fullWidth
                    size="medium"
                    value={form.name}
                    onChange={handleChange('name')}
                  />
                  <TextField
                    label="Email Address"
                    type="email"
                    required
                    fullWidth
                    size="medium"
                    value={form.email}
                    onChange={handleChange('email')}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    label="Phone / WhatsApp (Optional)"
                    type="tel"
                    fullWidth
                    size="medium"
                    placeholder="+91 98765 43210"
                    value={form.whatsapp}
                    onChange={handleChange('whatsapp')}
                  />
                  <TextField
                    select
                    label="Inquiry Type"
                    fullWidth
                    size="medium"
                    value={form.service}
                    onChange={handleChange('service')}
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <TextField
                  label="Your Message"
                  required
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Tell me about the engineering role, team, or project scope..."
                  value={form.message}
                  onChange={handleChange('message')}
                />

                <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    Direct response within 24 hours · Coimbatore (IST)
                  </p>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<Send className="w-4 h-4" />}
                    sx={{ borderRadius: '9999px', px: 3.5, py: 1.35 }}
                  >
                    Prepare Message
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
