# Report for Integrum ESG interview - Card App 🎴🃏

### By Navya Prakash

The GitHub repository can be found [here](https://github.com/theSatNav/card-app-typescript-test)

##

## Introduction

### Tasks Completed

In this task I have successfully completed 2 out of the 3 tasks, namely:

- implementing a settings dialog for dark mode
- adding scheduled date to the application. As mentioned in the brief, I chose to prioritise the quality of changes.

### Time Spent

Since I have no previous experience with React, TypeScript, or Tailwind CSS (although I do have experience with Kotlin and JavaScript which made life easier), I spent some time trying to understand the code and how it worked.

#### Approximate Time Breakdown

- 1.5 hours spent looking at the repository and planning my implementation.
- 3 hours completing the tasks
- 1 hour trying to understand and use fastify

##

## Task 1: Adding Dark Mode via a Settings Dialog

### Part 1: Understanding Tailwind CSS

Interestingly, rather than storing component level styling and colour details, TailwindCSS uses utility classes which allow inline styling for each component. This mean You can see the features of each component by going directly to its typescript code or page where it located. The className attribute calls these classes and applies the styling to each component.

### Part 2: Implementing Basic Dark Mode (browser settings)

In the official [documentation](https://tailwindcss.com/docs/dark-mode), Tailwind CSS explain how to implement dark mode features with the use of a 'dark' variant that can be added to a component in the className area.

Here is an example from the modified NavBar:

```
<NavLink
        className="m-3 p-4 text-xl bg-blue-400 dark:bg-gray-700 hover:bg-blue-500 rounded-md font-medium text-white"
        to={"/"}
      >
        All Entries
      </NavLink>
```

The original background is blue shown with `bg-blue-400` and the background colour for dark mode is written with `dark:bg-gray-700`

I first implemented alternative background and text colours for items in the `NavBar.tsx`, `AllEntries.tsx`, `EditEntry.tsx` and `NewEntry.tsx` files.

After this, I modified `tailwind.config.js` to include `darkMode: "media"` so I could use chrome developer tools to change the browser mode to light or dark mode and see if the changes were reflected.

### Part 3: Creating a Settings Dialog

The instructions mentioned creating a settings dialog to set dark mode. This took some research and the following tutorials and sources on dialogs and modals were very useful:

- [Build a Modal Component purely in ReactJS and TailwindCSS](https://www.youtube.com/watch?v=dEGbXY-8YtU)
- [Dark mode with TailwindCSS in under 7 minutes](https://www.youtube.com/watch?v=NxIBnvb8B7Y&list=PLF9tDQKEfQw9UZ8YwxqWjZTAHXerGl3Bs&index=2)
- [Create a Persisting Dark Mode with React](https://www.pullrequest.com/blog/create-a-persisting-dark-mode-with-react/) and this [solution](https://www.reddit.com/r/learnreactjs/comments/o3gvu9/how_to_create_a_persisting_dark_mode_with_react/) for one of the issues
  To set class based changing of dark mode I needed to change `darkMode: "media"` to `darkMode: "class"` in `tailwind.config.js`.

I created a settings button that opened a dialog with a button for light mode and dark mode respectively.

### Part 4: Modifications

I initially tried to follow the existing coding style and created two separate component files under `\frontend\components` named `Settings.tsx` and `Dialog.tsx` so that only `<Settings><\Settings>` and `<Dialog></Dialog>` had to be added to `App.tsx`

However, the way TailwindCSS's dark mode works is by detecting the `dark` class in a layout component and activating dark mode on it and its children items. I was unable to handle the scope of returning the state variables from `Settings.tsx` to `Dialog.tsx` back to `App.tsx` and so only the settings bar would go into dark mode instead of the entire application.

To fix this I put the contents of `Settings.tsx` directly in `App.tsx`. In the future, for readability and consistency, this should probably be rewritten to follow the abstraction pattern present in the rest of the app.

##

## Task 2: Adding a scheduled date to the cards

### Part 1: Modifying the database

I first modified the Prisma database schema(`/backend/prisma/schema.prisma`) and SQL migration file (`/backend/prisma/migrations/migration.sql`) to include a new field called `scheduled_at` which is a `NOT NULL DATETIME` field.

Upon inspection, the files in (`/backend/src`) did not require modification.

### Part 2: Modifying the Frontend

First I modified
`frontend/src/@types/context.d.ts` ro include the new field `scheduled_date : Date | string;`

Next, I added the appropriate code such as input fields and text on the cards to display the new field in `AllEntries.tsx`, `NewEntry.tsx` and `EditEntry.tsx`.

##

## Final Words

I greatly appreciate your consideration for this role and I really enjoyed working on this. I learned many new things and am proud of what I have achieved so I would like to thank you for creating this task.
