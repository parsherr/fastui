import React from 'react';

const BlogTemplatePreview = () => {
  return (
    <img
      src="https://raw.githubusercontent.com/magicuidesign/blog-template/main/public/preview.png"
      alt="Blog Template Preview"
      style={{
        borderRadius: '1rem',
        boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
        width: '100%',
        maxWidth: 800,
        margin: '2rem auto',
        display: 'block',
      }}
    />
  );
};

export { BlogTemplatePreview };
