/**
 * Sparrowhawk Release Notes Data
 *
 * To add a new release, copy the template below and paste it at the top of the array:
 * {
 *   "version": "X.X.X",
 *   "date": "Month Day, Year",
 *   "notes": [
 *     "Change one",
 *     "Change two"
 *   ]
 * },
 */
const SPARROWHAWK_RELEASES = [
  {
    "version": "1.0.2",
    "date": "May 17, 2026",
    "notes": [
      "Fixed intermittent startup crashes related to SQLCipher initialization.",
      "Improved database security migration logic with dummy queries.",
      "Added native library loading checks before database access."
    ]
  },
  {
    "version": "1.0.1",
    "date": "May 13, 2026",
    "notes": [
      "Added support for automatic feed discovery via website URLs.",
      "Implemented OPML import and export functionality.",
      "Updated UI with Material 3 dynamic color support."
    ]
  },
  {
    "version": "1.0.0",
    "date": "April 26, 2026",
    "notes": [
      "Initial public release of Sparrowhawk RSS Reader.",
      "Clean Material 3 interface with professional typography.",
      "Privacy-focused local-only storage using Room database."
    ]
  }
];
