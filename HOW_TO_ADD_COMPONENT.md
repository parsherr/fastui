# How to Add a New Component to Documentation

Follow these 5 steps to add a new component to the documentation with a live preview.

## 1. Create the Component File
Create the actual component code that users will copy.
*   **Location:** `components/ui/your-component.tsx`

## 2. Create the Preview Component
Create a demo component that shows how the component is used. This will be rendered on the documentation page.
*   **Location:** `components/previews/your-component-preview.tsx`
*   **Content:** Import your component and export a default function that renders it with some example usage.

```tsx
import { YourComponent } from "@/components/ui/your-component";

export default function YourComponentPreview() {
  return <YourComponent>Hello World</YourComponent>;
}
```

## 3. Register the Preview Component (Important)
You must register the preview component to use it inside `.mdx` files.
*   **File:** `components/mdx-components.tsx`

**Steps:**
1.  Import your preview component at the top of the file:
    ```tsx
    import YourComponentPreview from "@/components/previews/your-component-preview";
    ```
2.  Add it to the `components` object:
    ```tsx
    const components = {
      // ... other components
      YourComponentPreview, // Add this line
      // ...
    };
    ```

## 4. Create the Documentation Page (MDX)
Create the `.mdx` file content including title, description, and the preview/code tabs.
*   **Location:** `content/docs/components/your-component.mdx`

**Template:**

```mdx
---
title: Your Component
description: Description of what this component does.
---

<Tabs defaultValue="preview">
  <TabsList>
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview" className="p-10 min-h-[350px] flex items-center justify-center border rounded-md mt-2">
    <YourComponentPreview />
  </TabsContent>
  <TabsContent value="code">

```tsx
// Paste the code from your preview component here
```

  </TabsContent>
</Tabs>

## Installation

<Tabs defaultValue="cli">
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
    <TabsTrigger value="manual">Manual</TabsTrigger>
  </TabsList>
  <TabsContent value="cli">

```bash
npx shadcn@latest add your-component
```

  </TabsContent>
  <TabsContent value="manual">

  1. Install dependencies if any.

  2. Copy and paste the following code into your project.

```tsx title="components/ui/your-component.tsx"
// Paste the full component code here
```

  </TabsContent>
</Tabs>
```

## 5. Add to Sidebar
Add the link to the sidebar navigation so users can find it.
*   **File:** `config/docs.ts`
*   **Action:** Add a new item to the `sidebarNav` under the appropriate category (e.g., "Components").

```ts
{
  title: 'Your Component',
  href: '/docs/components/your-component', // Must match the MDX file path
  items: [],
},
```
