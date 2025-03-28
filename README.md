ui-base-kit
===========

ui-base-kit is a flexible and customizable React component library designed to help you build modern UIs quickly and efficiently. It offers a set of ready-to-use components, styled and optimized for ReactJS/NextJS applications.

✨ Features
----------

*   A collection of reusable React UI components

*   Built with React 19, Rollup, SCSS, and PostCSS
    
*   Peer dependencies for React and ReactDOM to avoid version conflicts
    
*   Includes essential UI elements like Button, Card, Input, and more
    
*   Fully compatible with Storybook for isolated development and testing
    

📦 Installation
---------------

To install the ui-base-kit in your React project:

### Using npm (for production/normal usage)

`npm install ui-base-kit`

Make sure your project has the following **peer dependencies** installed:

`npm install react@^19.0.0 react-dom@^19.0.0 prop-types@^15.8.1`

🛠️ Active Development with yalc
--------------------------------

If you're working on ui-base-kit and want live development in a consuming project:

### 1\. Install dependencies (in ui-base-kit)

`npm install  npm install -D concurrently chokidar-cli yalc`

### 2\. Link it to your main app using yalc

In the ui-base-kit repo:

`yalc publish`

In your **main project** where you want to use ui-base-kit:

`yalc add ui-base-kit`

> **Note:** This will copy the package to your main project’s node\_modules.

### 3\. Enable live updates

Run this in the ui-base-kit repo:

`npm run dev-yalc`

This does:

*   📦 Runs Rollup in watch mode to rebuild dist/
    
*   🔁 Watches dist/ and automatically runs yalc push on changes
    

This way, changes in ui-base-kit immediately reflect in your main project without needing manual pushes.

🧪 Running Storybook
--------------------

You can explore all components in isolation using Storybook:

`npm run storybook`

🧹 Build for Production
-----------------------

To generate the build in dist/:

`npm run build`

📁 Output Files
---------------

When you build, the following files are generated:

*   dist/index.es.js – Main module entry
    
*   dist/index.es.css – Exported styles (referenced in exports)
    

💡 Notes
--------

*   Make sure to **import index.css** in your main project if you want the styles applied.
    
*   This library is optimized for projects using **React 19+**.