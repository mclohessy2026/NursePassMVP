# NursePass MVP Build Changes

## Fixed launch / project issues
- Added missing Expo app assets (`icon.png`, adaptive icon, splash, favicon).
- Renamed the app to NursePass and replaced prototype bundle identifiers.
- Removed prototype-builder telemetry and runtime monkey patches.
- Trimmed unused dependencies from the project.
- Added EAS build configuration and project documentation.

## Unified the product state
- Replaced demo/fake seeded statistics with a clean first-run state.
- Bumped local storage to `nursepass.state.v2` so the new data model starts cleanly.
- Preserved premium/trial state when study progress is reset.
- Added persistent exam-date settings.

## Practice + results
- Fixed the incompatible Quiz -> Result navigation payload.
- Session length now respects the number of matching questions.
- Result review supports multiple choice, select-all-that-apply, and matrix items.
- Missed-question review now shows the user's answer, the correct answer, and rationale.
- Fixed session category labeling.
- Verified all 40 starter questions against their declared item schema and grading logic.

## Readiness
- Rebuilt Readiness against the current AppContext data model.
- Connected the existing category/subcategory heat map.
- Added weak-area drill shortcuts.
- Reworked readiness wording so it is presented as a study trend, not an NCLEX pass prediction.
- Rebalanced the readiness formula so one or two correct answers cannot instantly create an unrealistically high score.

## Games
- Replaced four placeholder games with three functional NursePass study modes:
  - Pharm Boss Battle
  - 60-Second Sprint
  - Clinical Survival
- Connected best scores, plays, and wins to persistent app state.

## Tutor
- Connected Ada to persistent chat state.
- Added quick prompts and clear-chat behavior.
- Kept the tutor explicitly educational rather than patient-care guidance.
- The MVP tutor remains an offline knowledge-base tutor; no private API key is embedded in the app.

## Pricing
- Connected the pricing screen to the current plan/trial state.
- Removed calls to the nonexistent premium setter.
- Made it explicit that checkout is an MVP flow and does not process a real charge yet.

## Settings
- Added exam-date entry and quick-set choices.
- Added local progress reset with confirmation.
- Added clear MVP/readiness/tutor disclosures.

## Validation completed
- JavaScript syntax check on every source file.
- JSON validation for package/app/EAS configuration.
- Navigation target audit.
- Dependency/import declaration audit.
- Question-bank schema and grading audit.
- App-asset existence and dimension check.

## Validation not completed in this environment
`npm install` could not reach the npm registry before the execution timeout, so Metro/Expo runtime launch was not available here. Run `npm install` followed by `npm run start` on a normal development machine for the final device launch check.
