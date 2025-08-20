# Contribution Guidelines

Any PRs that don't adhere to these guidelines will not be merged. Changes to these guidelines (in the form of PRs) are welcome, but would mandate a codebase refactor to ensure adherance.

## Directory Structure

The following directory structure should be strictly followed.

## `assets` folder:

Any assets like photos, videos, etc that shouldn't be **publicly** accessible. Should be prefferred over `public` folder to reduce the number of requests. The items in this folder are further optimised by the bundler to improve page load times.

## `components` folder:

This folder contains all the **commonly** used components of the application. These include logos, navbar, input fields, modals, etc. All the components must be sorted into folders grouped by the type. If the component doesn't belong to any specific category or type, place them into the `common` folder.

**NOTE**: For each folder in components directory (or really any directory), it is advised to have an `index.ts` file that re-exports the default export of the file that actually contains your component. This would allow you to avoid confusion that can possibly be caused by naming all your component files `index.tsx`.

Component/index.ts

```jsx
export { default } from "./Component";
```

Component/Component.tsx

```jsx
function Component {
    return <div>
      Hello World!
    </div>
}

export default Component;
```

## `docs` directory:

This directory contains documentation for all the components, hooks, utility function and apis created in a PR. It is necessary to add these details to avoid making the same components twice.

## `features` folder:

This folder contains all the features of the web page. A feature is typically a page itself. It can contain the following folders:

- `assets`
- `components`
- `layouts`
- `themes`
- `hooks`

These page take on meanings of their global counterparts but in the context of the feature/page. For example, assets folder will contain page-specific assets and similarly components will contain page specific components.

**Note**: The creator of the component

## `hooks` folder:

Any hooks created will be added to this folder

## `public` folder:

Any assets that are specifically intended to be publicly accessible. eg: favicon, brochures, pdfs, etc. Items in this folder will be automatically routed.

**NOTE**: Anything except the favicon should be placed in the `public/assets` folder to avoid conflicts with page routes.

## `pages` folder:

This folder contains all the pages for our website. `NextJs` automatically renders the components present in this folder based on the directory sturcture.

**NOTE**: The `pages/api` folder is used to create server side apis, quite similar to how expressJs works.

## `styles` folder:

This folder contains the global styles as well as module styles. This styles can be in CSS format.

## `themes` folder:

This folder contains all the MUI styles that are used throughout the application.

# Commit Guidelines

# TODO Guidelines
