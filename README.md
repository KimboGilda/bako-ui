# kimbogilda-ui

Small React + Tailwind component library: a button and a table.

## Install

```bash
npm install kimbogilda-ui
```

Requires React 18 or newer.

## Setup

Import the stylesheet once, at the root of your app (for example `main.tsx`):

```tsx
import "kimbogilda-ui/styles.css";
```

You don't need Tailwind in your own project. The styles are precompiled.

## Usage

```tsx
import { ButtonBak, TableBak } from "kimbogilda-ui";

function App() {
  return (
    <>
      <TableBak columns={["A", "B"]} rows={["One", "Two"]} />
      <ButtonBak variant="primary" size="md" onClick={() => console.log("hi")}>
        New
      </ButtonBak>
    </>
  );
}
```

## Components

### ButtonBak

| Prop      | Type                                  | Required | Description                         |
| --------- | ------------------------------------- | -------- | ----------------------------------- |
| `variant` | `"primary" \| "destroy" \| "disabled"` | yes      | Visual style. `disabled` also disables the button. |
| `size`    | `"sm" \| "md" \| "lg"`                 | yes      | Button size.                        |
| `className` | `string`                            | no       | Extra classes added to the button.  |

It also accepts every native `<button>` prop (`onClick`, `type`, `aria-label`, and so on).

### TableBak

| Prop      | Type       | Required | Description                 |
| --------- | ---------- | -------- | --------------------------- |
| `columns` | `string[]` | yes      | Column header labels.       |
| `rows`    | `string[]` | yes      | Row header labels.          |

## TypeScript

Prop types are exported:

```tsx
import type { ButtonBakProps, TableBakProps } from "kimbogilda-ui";
```

## License

MIT