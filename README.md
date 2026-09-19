NursePass MVP

NursePass is a mobile-first NCLEX study app built with Expo + React Native.

Included in this build

Adaptive practice sessions with MC, SATA, and NGN matrix items

Rationales and missed-question review

Persistent progress with AsyncStorage

Readiness score and blueprint heat map

Weak-area practice shortcuts

Three study games: Pharm Boss Battle, 60-Second Sprint, Clinical Survival

Ada study tutor with an offline nursing-topic knowledge base

Local premium/trial state for testing the paywall UX

NursePass app icon, adaptive icon, splash screen, and production-style bundle IDs

Run it

Requirements: Node 20.19+ and the Expo Go app, Android Studio, or Xcode.

npm install
npm run start

Then scan the Expo QR code or press a / i for a configured emulator/simulator.

For a clean Metro cache:

npm run start:clear

Important MVP limitations

Question bank: this repository contains 40 starter questions. Expand only with clinically reviewed, licensed/original content.

Tutor: Ada is currently an offline knowledge-base tutor. It does not call a remote LLM.

Payments: the pricing screen is a product-flow demo. It does not charge users. Before release, integrate Apple App Store / Google Play billing and server-side entitlement validation.

Accounts/cloud sync: progress is stored on-device only. Add authentication and a backend before multi-device release.

Medical review: all educational clinical content should be reviewed by qualified nursing educators before publication.

Readiness: the readiness score is a NursePass study metric, not an official NCLEX pass prediction.

Recommended production path

Add Supabase/Firebase authentication and cloud progress sync.

Move the question bank to a versioned backend with editorial review status.

Add secure server-side AI tutoring with source-grounded answers and moderation.

Add RevenueCat or native StoreKit/Google Play Billing entitlements.

Add analytics, crash reporting, privacy policy, terms, account deletion, and support links.

Run npx expo-doctor and complete EAS preview builds before store submission.

App identifiers

iOS: com.marquislearning.nursepass

Android: com.marquislearning.nursepass

Change these before store submission if the identifiers are already registered elsewhere.
