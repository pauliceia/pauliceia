---
name: Fix
about: Plan or track the correction of an identified defect or malfunction
title: "[FIX] "
labels: "bug"
assignees: ""
---

## Objective

Describe clearly what defect or issue will be fixed.

## Context / Root cause

Explain the known problem, related bug report (if any), and the suspected or identified cause.

## Proposed solution

Describe how the fix should be implemented and which files/components are affected.

## Repositories involved

Select the components that may be affected:

- [ ] pauliceia (frontend)
- [ ] VGIWS
- [ ] GeocodingAPI
- [ ] database
- [ ] big_table_processing
- [ ] pdc
- [ ] edit
- [ ] Other

## Validation / Testing

Describe how to verify that the fix works and does not introduce regressions.

## Definition of done

- [ ] Fix implemented
- [ ] Linter and build validated (`npm run lint` / `npm run build`)
- [ ] Manual or automated tests performed
- [ ] PR created and linked to this Issue
- [ ] PR reviewed
