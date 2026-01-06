/**
 * Centralised list of service areas for Jamie Robertson Joiners.
 * Update this single file to change areas across the entire site.
 */
export const serviceAreas = [
  'Stirling',
  'Bridge of Allan',
  'Dunblane',
  'Bannockburn',
  'Doune',
  'Callander',
  'Cowie',
  'Plean',
  'Thornhill',
  'Deanston',
  'Aberfoyle',
  'Fallin',
  'Cambusbarron',
  'St Ninians',
  'Alloa',
  'Tullibody',
  'Kippen',
  'Blair Drummond',
  'The Trossachs',
] as const;

export type ServiceArea = (typeof serviceAreas)[number];
