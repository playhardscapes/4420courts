# 🏀 4420 Courts - Cloudinary Upload Tool

A standalone image upload application for managing and uploading images to Cloudinary for the 4420 Courts project.

## 🚀 Quick Start

### Option 1: Use the startup script
```bash
./start.sh
```

### Option 2: Manual start
```bash
npm install
npm start
```

Then open your browser and go to: **http://localhost:3001**

## ✨ Features

- **📸 Professional Upload Interface** - Clean, modern UI designed for 4420 Courts
- **🔗 Multiple Upload Sources** - Local files, URLs, camera, Google Drive, Dropbox, Unsplash
- **✂️ Built-in Image Editing** - Crop, rotate, and optimize images before upload
- **📂 Auto Organization** - All uploads go to `4420courts-uploads` folder
- **🏷️ Smart Tagging** - Automatically tagged with `4420courts` and `playhardscapes`
- **📋 Easy URL Copying** - One-click copy for all image URLs and metadata
- **📱 Mobile Friendly** - Works on desktop, tablet, and mobile devices
- **⚡ Real-time Results** - See upload progress and results immediately

## 🔧 Configuration

The app comes pre-configured with your Cloudinary settings:
- **Cloud Name**: `dqgy5mfvd`
- **Upload Preset**: `ml_default`

You can modify these in the web interface if needed.

## 📁 File Structure

```
upload-app/
├── server.js          # Express server
├── index.html         # Main upload interface
├── package.json       # Dependencies
├── start.sh          # Startup script
└── README.md         # This file
```

## 🛠️ Technical Details

- **Server**: Node.js with Express
- **Port**: 3001
- **Upload Widget**: Cloudinary Upload Widget (latest version)
- **File Types**: JPG, PNG, GIF, WebP, BMP, SVG, MP4, MOV, AVI, WMV
- **Max File Size**: 10MB for images, 100MB for videos
- **Max Files**: 20 files per upload session

## 🔒 Security

- Uses unsigned upload preset for simplicity
- Files are automatically organized in dedicated folder
- All uploads include proper tagging for identification

## 📞 Support

For any issues or questions about the upload tool, check the browser console for error messages or contact the development team.

## 🎯 Usage Tips

1. **Batch Uploads** - Select multiple files for efficient bulk uploading
2. **Image Optimization** - Use the cropping tool to optimize images before upload
3. **URL Management** - Copy the direct URLs for immediate use in websites
4. **Mobile Uploads** - Use the camera source for direct mobile photo uploads
5. **Organization** - All uploads are automatically tagged and organized

---

**🏀 4420 Courts | Play Hardscapes | Professional Court Solutions**