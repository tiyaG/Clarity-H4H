// Design based on research: Soft contrast which will be the main theme that we will utlize throughout our app
export const Theme = {
  colors: {
    background: '#faf8f3', // Soft cream [cite: 102, 103]
    text: '#3a3a3a',       // Dark gray main text [cite: 105, 106]
    primary: '#4a5568',    // Soft gray-blue for buttons [cite: 108, 109]
    secondary: '#e8dfc8',  // Warm beige accents [cite: 111, 112]
    border: 'rgba(58, 58, 58, 0.15)', // Subtle borders [cite: 125, 126]
  },
  typography: {
    fontSize: 18,          // Large font for readability [cite: 78]
    lineHeight: 1.5,       // Increased spacing [cite: 71, 86]
    letterSpacing: 1.5,    // Better word separation [cite: 72]
  }
  
};

export const accessibilityStyles = {
  text: {
    textAlign: 'left',      // Essential for tracking
    lineHeight: 26,         // 1.5x - 1.6x spacing
    letterSpacing: 0.5,     // Helps distinguish characters
    fontSize: 18,           // Large and clear
  }
};
