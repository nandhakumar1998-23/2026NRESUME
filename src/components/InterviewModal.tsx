import React, { useMemo, useState } from 'react';
import { Button, Dialog, IconButton, MenuItem, TextField } from '@mui/material';
import { Calendar, Check, ExternalLink, Mail, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface InterviewModalProps {
  open: boolean;
  onClose: () => void;
}

const ROLE_OPTIONS = [
  'Full Stack Developer',
  'Frontend / React Developer',
  'Next.js Software Engineer',
  'UI/UX Engineer',
  'Technical SEO Specialist',
  'Other Engineering Role',
];

const DURATION_OPTIONS = [
  { label: '30 minutes', minutes: 30 },
  { label: '45 minutes', minutes: 45 },
  { label: '60 minutes', minutes: 60 },
  { label: '90 minutes', minutes: 90 },
];

const MODE_OPTIONS = ['Google Meet', 'Zoom', 'Microsoft Teams', 'Phone Call', 'In Person'];

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function formatGCalDate(d: Date): string {
  return `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}T${pad2(d.getHours())}${pad2(
    d.getMinutes()
  )}00`;
}

export const InterviewModal: React.FC<InterviewModalProps> = ({ open, onClose }) => {
  const todayIso = useMemo(() => new Date().toISOString().split('T')[0], []);

  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    role: ROLE_OPTIONS[0],
    date: todayIso,
    time: '11:00',
    durationMinutes: 60,
    mode: MODE_OPTIONS[0],
    meetingLink: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);

  const handleField =
    (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = key === 'durationMinutes' ? Number(e.target.value) : e.target.value;
      setFields((prev) => ({ ...prev, [key]: value }));
      if (errors[key]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[key];
          return next;
        });
      }
    };

  const gcalUrl = useMemo(() => {
    const start = new Date(`${fields.date || todayIso}T${fields.time || '11:00'}`);
    const validStart = Number.isNaN(start.getTime()) ? new Date() : start;
    const end = new Date(validStart.getTime() + fields.durationMinutes * 60 * 1000);

    const details = [
      'Interview Appointment with Nandha Kumar B',
      '-----------------------------------------',
      `Interviewer : ${fields.name}`,
      `Email       : ${fields.email}`,
      `Company     : ${fields.company}`,
      `Role        : ${fields.role}`,
      `Mode        : ${fields.mode}`,
      fields.meetingLink ? `Meeting URL : ${fields.meetingLink}` : '',
      fields.notes ? `Notes       : ${fields.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `Interview: ${fields.role} @ ${fields.company || 'Company'}`,
      dates: `${formatGCalDate(validStart)}/${formatGCalDate(end)}`,
      location: fields.meetingLink || fields.mode,
      details,
      add: PERSONAL_INFO.email,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }, [fields, todayIso]);

  const mailtoConfirmUrl = useMemo(() => {
    const subject = `Interview Invitation: ${fields.role} at ${fields.company}`;
    const body = [
      `Hi Nandha,`,
      ``,
      `We would like to schedule an interview with you:`,
      `• Company: ${fields.company}`,
      `• Role: ${fields.role}`,
      `• Date & Time: ${fields.date} at ${fields.time} (${fields.durationMinutes} mins)`,
      `• Mode: ${fields.mode}`,
      fields.meetingLink ? `• Meeting Link: ${fields.meetingLink}` : '',
      fields.notes ? `• Notes: ${fields.notes}` : '',
      ``,
      `Best regards,`,
      `${fields.name} (${fields.email})`,
    ]
      .filter(Boolean)
      .join('\n');

    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [fields]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (fields.name.trim().length < 2) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      nextErrors.email = 'Please enter a valid work email.';
    }
    if (fields.company.trim().length < 2) nextErrors.company = 'Please enter the company name.';
    if (!fields.date || fields.date < todayIso) nextErrors.date = 'Select today or a future date.';
    if (!fields.time) nextErrors.time = 'Select an interview time.';
    if (fields.meetingLink.trim() && !/^https?:\/\/\S+$/i.test(fields.meetingLink.trim())) {
      nextErrors.meetingLink = 'Link should start with http:// or https://';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setConfirmed(true);
  };

  const handleResetAndClose = () => {
    setConfirmed(false);
    setErrors({});
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleResetAndClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="schedule-interview-title"
    >
      <div className="bg-[#0B111E] text-[#F8FAFC] p-6 sm:p-8 relative">
        <IconButton
          onClick={handleResetAndClose}
          aria-label="Close interview dialog"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: '#94A3B8',
            width: 38,
            height: 38,
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <X className="w-4 h-4" />
        </IconButton>

        {confirmed ? (
          <div className="py-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-[#F8FAFC]">
              Interview Slot Prepared
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              <strong className="text-white">{fields.company}</strong> ·{' '}
              <strong className="text-white">{fields.role}</strong> on{' '}
              <span className="font-mono">{fields.date}</span> at{' '}
              <span className="font-mono">{fields.time}</span>. Add directly to Google Calendar with{' '}
              <span className="text-[#F5A623]">{PERSONAL_INFO.email}</span> invited:
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                component="a"
                href={gcalUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                startIcon={<Calendar className="w-4 h-4" />}
                endIcon={<ExternalLink className="w-3.5 h-3.5" />}
                sx={{ borderRadius: '9999px', px: 3 }}
              >
                Open in Google Calendar
              </Button>
              <Button
                component="a"
                href={mailtoConfirmUrl}
                variant="outlined"
                startIcon={<Mail className="w-4 h-4" />}
                sx={{
                  borderRadius: '9999px',
                  px: 2.75,
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: '#F8FAFC',
                }}
              >
                Send Email Invite
              </Button>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-6 text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="pr-10">
              <p className="text-xs font-mono text-[#F5A623] mb-1">Interview Appointment</p>
              <h2 id="schedule-interview-title" className="font-display text-2xl font-bold text-[#F8FAFC]">
                Schedule an Interview
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                Pick date, time, company, and role — generates a Google Calendar invite with Nandha Kumar B.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <TextField
                label="Your Name"
                required
                fullWidth
                size="small"
                value={fields.name}
                onChange={handleField('name')}
                error={Boolean(errors.name)}
                helperText={errors.name}
              />
              <TextField
                label="Work Email"
                type="email"
                required
                fullWidth
                size="small"
                value={fields.email}
                onChange={handleField('email')}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField
                label="Company"
                required
                fullWidth
                size="small"
                value={fields.company}
                onChange={handleField('company')}
                error={Boolean(errors.company)}
                helperText={errors.company}
              />
              <TextField
                select
                label="Role"
                fullWidth
                size="small"
                value={fields.role}
                onChange={handleField('role')}
              >
                {ROLE_OPTIONS.map((r) => (
                  <MenuItem key={r} value={r}>
                    {r}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField
                label="Date"
                type="date"
                required
                fullWidth
                size="small"
                slotProps={{ inputLabel: { shrink: true }, htmlInput: { min: todayIso } }}
                value={fields.date}
                onChange={handleField('date')}
                error={Boolean(errors.date)}
                helperText={errors.date}
              />
              <TextField
                label="Time (IST)"
                type="time"
                required
                fullWidth
                size="small"
                slotProps={{ inputLabel: { shrink: true } }}
                value={fields.time}
                onChange={handleField('time')}
                error={Boolean(errors.time)}
                helperText={errors.time}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField
                select
                label="Duration"
                fullWidth
                size="small"
                value={fields.durationMinutes}
                onChange={handleField('durationMinutes')}
              >
                {DURATION_OPTIONS.map((d) => (
                  <MenuItem key={d.minutes} value={d.minutes}>
                    {d.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Interview Mode"
                fullWidth
                size="small"
                value={fields.mode}
                onChange={handleField('mode')}
              >
                {MODE_OPTIONS.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <TextField
              label="Meeting Link (Optional)"
              type="url"
              fullWidth
              size="small"
              placeholder="https://meet.google.com/..."
              value={fields.meetingLink}
              onChange={handleField('meetingLink')}
              error={Boolean(errors.meetingLink)}
              helperText={errors.meetingLink}
            />

            <TextField
              label="Notes (Optional)"
              fullWidth
              size="small"
              multiline
              rows={2}
              value={fields.notes}
              onChange={handleField('notes')}
            />

            <div className="pt-2 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="outlined"
                onClick={handleResetAndClose}
                sx={{
                  borderRadius: '9999px',
                  borderColor: 'rgba(255,255,255,0.16)',
                  color: '#CBD5E1',
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ borderRadius: '9999px', px: 3.25 }}
              >
                Generate Calendar Slot
              </Button>
            </div>
          </form>
        )}
      </div>
    </Dialog>
  );
};
