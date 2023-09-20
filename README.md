# react-heatmapjs
React for the user interface, Tailwind CSS for styling, and CSS Grid for layout. A heatmap is a data visualization technique that uses color to represent the magnitude of values within a two-dimensional grid or matrix.

## For developers
### Getting the Source Code
Clone the Heatmap Package repository from GitHub:
```
git clone https://github.com/hex909/react-heatmapjs.git
```

### Installing Dependencies
Navigate to the package's root directory and install the required dependencies:
```
cd react-heatmapjs
npm install
```
### Testing Locally with npm link
To test this Package locally, you can use npm link to create a symbolic link between your local development directory and your application. Follow these steps:

1. Navigate to the root directory of this Package project.
2. Run the following command to build the package:
 ```
npm run build
 ```
3. Run the following command to create a global link for your package:
```
npm link
```
4. Navigate to the directory of your application where you want to test the local package.
5. Run the following command to link this Package to your application:
```
npm link react-heatmapjs
```

