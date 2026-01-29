# Solana Developer Marketing - Content Calendar

A React application for planning and managing Solana developer marketing content. Features an interactive 30-day content calendar with inline editing capabilities.

## Features

- **30-Day Content Calendar**: Visual calendar with daily content plans
- **Event Details Modal**: Click any event to view full content, notes, and metadata
- **Inline Editing**: Edit calendar content directly in the app
- **Authentication**: Password + TouchID/Passkey support for secure editing
- **Export to Code**: Export edits back to source for deployment

## Editing Content

### Authentication

The app supports two authentication methods for editing:

1. **Password**: `solana2026`
2. **TouchID/Passkey**: Set up once per device for faster authentication

### Session Management

- Sessions last **1 hour** after authentication
- During an active session, you can edit any event without re-authenticating
- Session indicator shows remaining time in the modal header
- Sessions are stored in `sessionStorage` (cleared when browser tab closes)

### Making Edits

1. Click any calendar event to open the detail modal
2. Click "Edit" button
3. Authenticate (password or TouchID)
4. Make your changes
5. Click "Save Changes"

Edits are stored in browser `localStorage` and persist across page reloads.

### Sharing Edits with Others

Edits stored in `localStorage` are local to your browser. To share edits:

1. Make your edits on the deployed site
2. While authenticated, click the **"Export Edits"** button (bottom-right corner)
3. The full `calendarEvents.ts` code is copied to your clipboard
4. Paste into `src/data/calendarEvents.ts` (replace entire file)
5. Commit and push to deploy

```bash
# After pasting exported code
git add src/data/calendarEvents.ts
git commit -m "Update calendar content"
git push
```

## Technical Details

### Storage Keys

| Key | Storage | Purpose |
|-----|---------|---------|
| `solana-calendar-edits` | localStorage | Content edits (persists) |
| `solana-calendar-session` | sessionStorage | Auth session timestamp |
| `solana-calendar-passkey` | localStorage | WebAuthn credential ID |

### Session Duration

Sessions expire after **60 minutes** (configurable in `Modal.tsx`):

```typescript
const SESSION_DURATION_MS = 60 * 60 * 1000; // 1 hour
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Stack

- React 19
- TypeScript
- Vite
- CSS Modules
