Build an App with Angular & Webpack

This sets up a Node project, creates an Angular application and make calls to an external API.

The app is bundled using webpack.

Link to article:<br>
https://www.twilio.com/blog/2018/03/building-an-app-from-scratch-with-angular-and-webpack.html


More about webpack:<br>
Webpack is a module bundler, but you can also use it running tasks as well.<br>
Webpack relies on a dependency graph underneath. Webpack traverses through the source to construct the graph, and it uses this information and configuration to generate bundles.<br>
Webpack relies on loaders and plugins. Loaders operate on a module level, while plugins rely on hooks provided by webpack and have the best access to its execution process.<br>
Webpack’s configuration describes how to transform assets of the graphs and what kind of output it should generate. Part of this information can be included in the source itself if features like code splitting are used.<br>
Hot Module Replacement (HMR) helped to popularize webpack. It's a feature that can enhance the development experience by updating code in the browser without needing a full page refresh.<br>
Webpack can generate hashes for filenames allowing you to invalidate past bundles as their contents change.<br>