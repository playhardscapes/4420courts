// Configure Cloudinary - using environment variables
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dqgy5mfvd';

export interface CloudinaryImageTransform {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb' | 'limit' | 'mfit' | 'mpad';
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  gravity?: 'auto' | 'center' | 'face' | 'faces';
  fetchFormat?: 'auto';
}

/**
 * Get optimized Cloudinary URL for an image
 */
export function getCloudinaryUrl(
  publicId: string, 
  transformations: CloudinaryImageTransform = {}
): string {
  if (!publicId) {
    return '/4420courtslogowide.jpg'; // fallback to default image
  }

  // Remove any existing cloudinary URL prefix if present
  const cleanPublicId = publicId.replace(/^https?:\/\/.*?\/image\/upload\//, '').replace(/^v\d+\//, '');

  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  // Build transformation string
  const transforms = [];
  
  if (transformations.width) transforms.push(`w_${transformations.width}`);
  if (transformations.height) transforms.push(`h_${transformations.height}`);
  if (transformations.crop) transforms.push(`c_${transformations.crop}`);
  if (transformations.quality) transforms.push(`q_${transformations.quality}`);
  if (transformations.format) transforms.push(`f_${transformations.format}`);
  if (transformations.gravity) transforms.push(`g_${transformations.gravity}`);
  if (transformations.fetchFormat) transforms.push(`fetch_format_${transformations.fetchFormat}`);

  const transformString = transforms.length > 0 ? `/${transforms.join(',')}` : '';
  
  return `${baseUrl}${transformString}/${cleanPublicId}`;
}

/**
 * Get optimized product image URL
 */
export function getProductImageUrl(publicId: string, size: 'thumbnail' | 'medium' | 'large' = 'medium'): string {
  const sizeConfig = {
    thumbnail: { width: 300, height: 300, crop: 'fill' as const },
    medium: { width: 600, height: 400, crop: 'fill' as const },
    large: { width: 1200, height: 800, crop: 'fill' as const }
  };

  return getCloudinaryUrl(publicId, {
    ...sizeConfig[size],
    quality: 'auto',
    format: 'auto',
    fetchFormat: 'auto'
  });
}

/**
 * Get responsive image srcset for different screen sizes
 */
export function getResponsiveImageUrls(publicId: string): {
  src: string;
  srcSet: string;
  sizes: string;
} {
  if (!publicId) {
    return {
      src: '/4420courtslogowide.jpg',
      srcSet: '',
      sizes: ''
    };
  }

  const baseTransforms = {
    quality: 'auto' as const,
    format: 'auto' as const,
    crop: 'fill' as const
  };

  const srcSet = [
    `${getCloudinaryUrl(publicId, { ...baseTransforms, width: 300, height: 300 })} 300w`,
    `${getCloudinaryUrl(publicId, { ...baseTransforms, width: 600, height: 400 })} 600w`,
    `${getCloudinaryUrl(publicId, { ...baseTransforms, width: 900, height: 600 })} 900w`,
    `${getCloudinaryUrl(publicId, { ...baseTransforms, width: 1200, height: 800 })} 1200w`
  ].join(', ');

  return {
    src: getProductImageUrl(publicId, 'medium'),
    srcSet,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  };
}

/**
 * Extract public ID from Cloudinary URL
 */
export function extractPublicId(cloudinaryUrl: string): string {
  if (!cloudinaryUrl) return '';
  
  // Handle full Cloudinary URLs
  const match = cloudinaryUrl.match(/\/image\/upload\/(?:v\d+\/)?(.+)$/);
  if (match && match[1]) {
    return match[1].replace(/\.[^.]+$/, ''); // remove file extension
  }
  
  // Handle public IDs directly
  return cloudinaryUrl;
}

/**
 * Check if a string is a valid Cloudinary URL or public ID
 */
export function isCloudinaryAsset(url: string): boolean {
  return Boolean(url && (
    url.includes('cloudinary.com') || 
    url.includes('res.cloudinary.com') ||
    // Assume it's a public ID if it doesn't start with http
    (!url.startsWith('http') && url.length > 0)
  ));
}