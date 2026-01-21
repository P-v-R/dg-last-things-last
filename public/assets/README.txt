DELTA GREEN ASSETS FOLDER
=========================

Place your images here. They will be accessible in the app.

USAGE:
------
1. Add an image to this folder (e.g., "evidence_photo.jpg")

2. Reference it in sample-containers.ts using:
   imageUrl: '/assets/evidence_photo.jpg'

EXAMPLE:
--------
{
  id: 'my-photo',
  name: 'Crime_Scene_Photo.jpg',
  type: 'photo',
  priority: false,
  dateModified: '03/15/2009',
  size: '2.4 MB',
  imageUrl: '/assets/crime_scene.jpg',
  content: `Description of what the photo shows...`
}

SUPPORTED FORMATS:
------------------
- .jpg / .jpeg
- .png
- .gif
- .webp

NOTE: Images are served from /assets/ path (no "public" in the URL)
