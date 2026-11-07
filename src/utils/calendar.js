/**
 * Calendar export utilities for Vistara events
 * Native zero-dependency implementation for iCalendar (.ics) and Google Calendar
 */

/**
 * Format date for iCalendar format (YYYYMMDDTHHmmssZ)
 */
function formatDateToICS(dateString) {
  const d = new Date(dateString);
  return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

/**
 * Generates and downloads a .ics file directly in the browser
 */
export function downloadICSFile(event) {
  const startDate = formatDateToICS(event.date || event.eventDate);
  // Default duration of 3 hours for the calendar entry
  const endDateObj = new Date(new Date(event.date || event.eventDate).getTime() + 3 * 60 * 60 * 1000);
  const endDate = formatDateToICS(endDateObj);

  const title = event.name || event.eventName;
  const description = event.shortDescription || `Reservation pass confirmed for ${title}.`;
  const location = event.venue;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Vistara//Moments That Matter//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:vistara-${event.id || Date.now()}@vistara.events`,
    `DTSTAMP:${formatDateToICS(new Date())}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${title.replace(/[^a-zA-Z0-9]/g, '_')}_Pass.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Returns a direct Google Calendar web intent link
 */
export function getGoogleCalendarUrl(event) {
  const title = encodeURIComponent(event.name || event.eventName);
  const details = encodeURIComponent(event.shortDescription || `Pass confirmed via Vistara for ${event.name || event.eventName}.`);
  const location = encodeURIComponent(event.venue);

  const start = formatDateToICS(event.date || event.eventDate);
  const endObj = new Date(new Date(event.date || event.eventDate).getTime() + 3 * 60 * 60 * 1000);
  const end = formatDateToICS(endObj);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

