import { InvitationData } from './types';

export const DEFAULT_INVITATION: InvitationData = {
  coupleNames: "Halla & Eslam",
  brideName: "Halla",
  groomName: "Eslam",
  eventTitle: "A LETTER FROM",
  displayDate: "19.11.2026",
  eventDate: "2026-11-19T18:00:00",
  venueName: "Wedding Hall",
  venueAddress: "Hadiya, Al Ahmadi Governorate, Kuwait",
  venueMapUrl: "https://maps.app.goo.gl/x5rsGxkJNT94fo1H8?g_st=ic",
  couplePhoto: `${import.meta.env.BASE_URL}img1.jpg`,
  bridePhoto: `${import.meta.env.BASE_URL}img2.jpg`,
  groomPhoto: `${import.meta.env.BASE_URL}img1.jpg`,
  storyText: "Together with our families, we invite you to share in our joy as we begin our new life together.",
  musicEnabled: false,
};
