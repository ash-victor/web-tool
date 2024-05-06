import React from 'react';

const Header = () => {
    return (
        <div style={{
            backgroundColor: '#333', // Dark background for contrast
            color: 'white', // White text for high contrast
            padding: '20px 50px', // Increased vertical padding for better visual balance
            textAlign: 'center', // Center aligned text
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)', // Adds depth with a shadow
            fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', // A more modern font stack
            fontSize: '1.5rem', // Larger font size for the title
            textShadow: '0 2px 4px rgba(0,0,0,0.5)', // Subtle text shadow for a 3D effect
            border: '1px solid #444', // Subtle border for definition
            borderRadius: '5px', // Rounded corners for a smoother look
        }}>
            <h1 style={{ margin: '0', padding: '0' }}> Digital Health Equity Index (DHEI) Geospatial Web Tool (prototype) </h1>  
            <p style={{
                fontSize: '1rem', // Smaller font size for the subtitle
                fontWeight: 'normal', // Normal weight to differentiate from the title
                marginTop: '5px', // Margin top to create space between title and subtitle
                opacity: 0.75  // Slightly transparent for less emphasis
            }}>
                Our project is a work-in-progress prototype for a geospatial web tool integrating the DHEI. This prototype focuses on one state (Alaska) and one variable (people without health insurance), whereas the finished tool will comprise all 50 states and 20 total variables. We used American Community Survey (ACS) data across all Alaskan census tracts to rank them from least to most at risk based on the number of people without health insurance. Using decile ranking, a user can hover over a tract and see the raw data and its ranking compared to other Alaskan tracts. Once all variables are integrated, healthcare providers, policymakers, and researchers can quickly observe which areas are most in need of attention within the digital health domain, which includes social, physical access, and digital factors combined. 
            </p>
        </div>
    );
};

export default Header;
