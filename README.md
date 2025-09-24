# React File Upload UI Demo

This repository contains a demo of a modern file uploader built with **React, TypeScript, Tailwind CSS, and Filestack**.  
It demonstrates how to build a clean, accessible upload component with cloud storage integration, multiple file source options, and user-friendly status messages.

---

## Features

- **Multiple Sources**: Upload from local files, Google Drive, Dropbox, OneDrive, GitHub, and more.  
- **File Restrictions**: Accepts only images and PDFs (configurable).  
- **Batch Uploads**: Upload up to 5 files at once.  
- **Accessible by Design**:  
  - Screen-reader friendly status updates with `aria-live`.  
  - Error messages announced automatically.  
  - Full keyboard navigation in Filestack modal (`Tab`, `Shift+Tab`, `Enter`, `Space`).  
- **Responsive UI**: Styled with Tailwind for a modern look.  

---

## How to Run

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd file-upload-ui
  ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Add Your Filestack API Key**

   Create a `.env` file in the project root:

   ```bash
   VITE_FILESTACK_API_KEY=your_filestack_api_key
   ```

4. **Start the App**

   ```bash
   npm run dev
   ```

That’s it! The demo will be running locally.

---

## Resources for Further Learning

- [WebAIM: Accessible File Uploads](https://webaim.org/techniques/fileupload/)
- [MDN: Accessibility Best Practices](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [MDN Web Docs: File API](https://developer.mozilla.org/en-US/docs/Web/API/File)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Accessibility Testing Tools](https://www.a11yproject.com/resources/#testing-tools)

