// content.js

// Inject custom CSS to style the scroll bar
const style = document.createElement('style');
style.textContent = `
  ::-webkit-scrollbar {
    width: 8px; /* Adjust the width as needed */
    height: 8px; /* Adjust the height as needed */
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.5); /* Adjust the color as needed */
    border-radius: 5px; /* Adjust the border-radius as needed */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Add shadow for depth */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(150, 150, 150, 0.7); /* Adjust the hover color as needed */
  }
`;

// Append the style to the document
document.head.appendChild(style);
