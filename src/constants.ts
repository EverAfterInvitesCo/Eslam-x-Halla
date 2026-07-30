import { InvitationData } from './types';

import silkBgAsset from './assets/images/ivory_silk_bg_1785327681883.jpg';
import envelopeIntroAsset from './assets/images/envelope_intro_1785332362014.jpg';

const base = import.meta.env.BASE_URL;

export const DEFAULT_INVITATION: InvitationData = {
  coupleNames: 'Halla & Eslam',
  brideName: 'Halla',
  groomName: 'Eslam',
  eventTitle: 'A LOVE LETTER FROM',
  weddingDate: '2027-06-21T12:30:00',
  displayDate: '19.11.2026',
  dateFormatted: 'ON Thursday, 19 Novemeber 2026',
  timeFormatted: '7:00 PM',
  locationName: '6th of October City',
  venueDetails: 'Mountain rose / one view',
  couplePhoto: `${base}img1.jpg`,
  bridePhoto: `${base}img2.jpg`,
  silkBgPhoto: silkBgAsset,
  envelopeImage: envelopeIntroAsset,
  musicEnabled: true,
}; 
