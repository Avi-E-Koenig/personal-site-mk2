# Next.js 16 Migration Plan

**Current Version:** Next.js 15.1.8  
**Target Version:** Next.js 16.x  
**Status:** Planning Phase

---

## Overview

Next.js 16 introduces several breaking changes and new features. This document outlines the migration plan for upgrading from Next.js 15 to Next.js 16.

---

## Key Breaking Changes

### 1. Async Request APIs (Critical)

**What Changed:**
- `cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are now **fully async** (no synchronous fallback)
- Must use `await` when accessing these APIs

**Impact on Our Codebase:**
- ✅ `lib/i18n/server.ts` - Already using `await cookies()` - **No change needed**
- ✅ `app/layout.tsx` - Already using `await getLocale()` - **No change needed**
- ⚠️ Need to verify all usages are async

**Action Required:**
- [ ] Audit all files for `cookies()`, `headers()`, `params`, `searchParams` usage
- [ ] Ensure all are properly awaited
- [ ] Run codemod to auto-fix if available

---

### 2. Middleware → Proxy Rename

**What Changed:**
- `middleware.ts` file renamed to `proxy.ts`
- `middleware` export renamed to `proxy`
- Config option `skipMiddlewareUrlNormalize` → `skipProxyUrlNormalize`

**Impact on Our Codebase:**
- ✅ **No middleware file exists** - No action needed

**Action Required:**
- [ ] None (we don't use middleware)

---

### 3. React 19.2 Features

**What Changed:**
- Next.js 16 uses React 19.2 (canary)
- New features: View Transitions, `useEffectEvent`, Activity

**Impact on Our Codebase:**
- ✅ Already using React 19.0.0 - Should be compatible
- ⚠️ May need to update to React 19.2

**Action Required:**
- [ ] Update React to 19.2
- [ ] Update `@types/react` and `@types/react-dom` if needed
- [ ] Test for any breaking changes

---

### 4. Image Generation Metadata

**What Changed:**
- `params` and `id` in image generation functions are now async

**Impact on Our Codebase:**
- ✅ **No image generation functions** - No action needed

**Action Required:**
- [ ] None

---

### 5. Sitemap Generation

**What Changed:**
- `id` parameter in sitemap generation is now async

**Impact on Our Codebase:**
- ✅ **No sitemap generation** - No action needed

**Action Required:**
- [ ] None

---

## New Features in Next.js 16

### 1. React 19.2 Integration
- View Transitions for smooth navigation
- `useEffectEvent` hook
- Activity component for background rendering

### 2. Improved Performance
- Better caching strategies
- Enhanced server components

### 3. Developer Experience
- Better error messages
- Improved TypeScript support

---

## Migration Steps

### Phase 1: Preparation

1. **Backup Current State**
   ```bash
   git checkout -b nextjs-16-migration
   git commit -am "Pre-migration state"
   ```

2. **Update Dependencies**
   ```bash
   npm install next@latest react@latest react-dom@latest
   npm install -D @types/react@latest @types/react-dom@latest
   ```

3. **Run Codemod (Automated Migration)**
   ```bash
   npx @next/codemod@canary upgrade latest
   ```
   This will:
   - Update `next.config.js` if needed
   - Migrate ESLint configuration
   - Remove `unstable_` prefixes
   - Fix async API usage where possible

### Phase 2: Code Review & Manual Fixes

1. **Audit Async APIs**
   - [ ] Check all `cookies()` usage - ensure `await`
   - [ ] Check all `headers()` usage - ensure `await`
   - [ ] Check all `params` usage - ensure `await`
   - [ ] Check all `searchParams` usage - ensure `await`

2. **Review Current Code**
   ```bash
   # Find all async API usages
   grep -r "cookies()" app/ lib/
   grep -r "headers()" app/ lib/
   grep -r "params" app/ --include="*.tsx" --include="*.ts"
   grep -r "searchParams" app/ --include="*.tsx" --include="*.ts"
   ```

3. **Fix Any Issues**
   - Update any synchronous usage to async
   - Add `await` where needed
   - Update TypeScript types if needed

### Phase 3: Testing

1. **Build Test**
   ```bash
   npm run build
   ```
   - [ ] Verify build succeeds
   - [ ] Check for TypeScript errors
   - [ ] Check for runtime warnings

2. **Development Test**
   ```bash
   npm run dev
   ```
   - [ ] Test all pages load correctly
   - [ ] Test language switching (EN ↔ HE)
   - [ ] Test RTL layout in Hebrew
   - [ ] Test navigation
   - [ ] Test PDF viewer

3. **Functionality Test**
   - [ ] Home page
   - [ ] How I Work page
   - [ ] Experience page
   - [ ] Resume page
   - [ ] Contact page
   - [ ] Language switcher
   - [ ] Cookie persistence

### Phase 4: Verification

1. **Type Check**
   ```bash
   npx tsc --noEmit
   ```

2. **Lint Check**
   ```bash
   npm run lint
   ```

3. **Production Build**
   ```bash
   npm run build && npm start
   ```
   - [ ] Test production build locally
   - [ ] Verify all routes work
   - [ ] Check performance

---

## Current Codebase Analysis

### Files Using Async APIs

**✅ Already Async (No Changes Needed):**
- `lib/i18n/server.ts` - Uses `await cookies()` correctly
- `app/layout.tsx` - Uses `await getLocale()` correctly

**Files to Review:**
- All page components (`app/**/page.tsx`)
- Layout files (`app/layout.tsx`)
- Any utility functions that use cookies/headers

### Dependencies Status

**Current:**
- `next`: `^15.1.8`
- `react`: `^19.0.0`
- `react-dom`: `^19.0.0`
- `@types/react`: `^19.0.3`
- `@types/react-dom`: `^19.0.1`

**Target:**
- `next`: `^16.0.0` (or latest)
- `react`: `^19.2.0` (or latest compatible)
- `react-dom`: `^19.2.0` (or latest compatible)
- `@types/react`: `^19.2.0` (or latest)
- `@types/react-dom`: `^19.2.0` (or latest)

---

## Risk Assessment

### Low Risk
- ✅ No middleware to migrate
- ✅ No image generation functions
- ✅ No sitemap generation
- ✅ Already using async patterns in critical paths

### Medium Risk
- ⚠️ Need to verify all async API usage
- ⚠️ React 19.2 may have minor breaking changes
- ⚠️ Third-party packages (next-intl) compatibility

### High Risk
- ⚠️ None identified

---

## Compatibility Check

### Third-Party Packages

**next-intl (`^3.22.4`)**
- [ ] Check Next.js 16 compatibility
- [ ] Update if needed
- [ ] Test i18n functionality

**react-cookie (`^8.0.1`)**
- [ ] Check React 19.2 compatibility
- [ ] Verify cookie handling still works

**Other Dependencies**
- [ ] `clsx` - Should be fine
- [ ] `tailwind-merge` - Should be fine
- [ ] `tailwindcss` - Should be fine

---

## Rollback Plan

If issues arise:

1. **Revert Git Changes**
   ```bash
   git checkout main
   git branch -D nextjs-16-migration
   ```

2. **Restore Dependencies**
   ```bash
   npm install next@^15.1.8 react@^19.0.0 react-dom@^19.0.0
   ```

3. **Verify Functionality**
   ```bash
   npm run build
   npm run dev
   ```

---

## Timeline Estimate

- **Phase 1 (Preparation):** 15-30 minutes
- **Phase 2 (Code Review):** 30-60 minutes
- **Phase 3 (Testing):** 30-60 minutes
- **Phase 4 (Verification):** 15-30 minutes

**Total Estimated Time:** 1.5 - 3 hours

---

## Post-Migration Checklist

- [ ] All pages load correctly
- [ ] Language switching works (EN ↔ HE)
- [ ] RTL layout works in Hebrew
- [ ] Navigation works
- [ ] PDF viewer works
- [ ] Cookie persistence works
- [ ] Build succeeds without errors
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Performance is acceptable
- [ ] All functionality tested

---

## Resources

- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-16)
- [React 19.2 Release Notes](https://react.dev/blog)
- [Next.js Codemod](https://nextjs.org/docs/app/building-your-application/upgrading/codemods)

---

## Notes

- The migration should be relatively straightforward since we're already using async patterns
- Main focus will be on verifying all async API usage
- React 19.2 compatibility should be good since we're already on React 19
- Third-party package compatibility is the main unknown

---

**Status:** Ready to begin migration  
**Last Updated:** Based on Next.js 16 documentation review

