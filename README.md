# Assignment-State-Management-with-useImmer-Hook

## Overview
This project demonstrates how to manage complex nested state in React using the useImmer hook. It simplifies updating deeply nested objects while maintaining immutability.

## Features
- Update user name
- Update contact details (phone, address)
- Toggle newsletter subscription
- Real-time state display

## Technologies
- React
- Vite
- Immer (use-immer)

## How to Run

git clone https://github.com/YOUR-USERNAME/user-profile-immer.git
cd user-profile-immer
npm install
npm run dev

## Key Concepts
- useImmer hook
- Nested state updates
- Immutable state handling
- Controlled inputs in React

## Test Cases

### Normal Cases
1. Update name → reflects instantly
2. Update phone/address → updates nested state
3. Toggle newsletter → switches true/false

### Edge Cases
1. Empty inputs → app does not crash
2. Rapid typing → state updates smoothly
3. Toggle repeatedly → state remains consistent

## Demo Video

