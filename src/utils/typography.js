import Typography from 'typography';

const typography = new Typography({
    headerFontFamily: ['Roboto', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif'],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
