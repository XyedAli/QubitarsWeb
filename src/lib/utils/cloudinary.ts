/**
 * Cloudinary Image Optimization Utility
 * Adds optimization parameters to Cloudinary URLs for better performance
 */

export interface CloudinaryOptimizationOptions {
  quality?: number; // 1-100, default: auto
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'limit';
  fetchFormat?: 'auto';
}

/**
 * Optimizes a Cloudinary URL with performance parameters
 * @param url - The Cloudinary image URL
 * @param options - Optimization options
 * @returns Optimized Cloudinary URL
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: CloudinaryOptimizationOptions = {}
): string {
  // If not a Cloudinary URL, return as is
  if (!url.includes('res.cloudinary.com')) {
    return url;
  }

  const {
    quality = 'auto',
    format = 'auto',
    width,
    height,
    crop = 'fill',
    fetchFormat = 'auto',
  } = options;

  // Parse the Cloudinary URL
  // Format: https://res.cloudinary.com/{cloud_name}/image/upload/{transformations}/{version}/{public_id}.{format}
  const urlParts = url.split('/upload/');
  
  if (urlParts.length !== 2) {
    return url; // Invalid Cloudinary URL format
  }

  const baseUrl = urlParts[0] + '/upload';
  const pathAfterUpload = urlParts[1];

  // Build transformation parameters
  const transformations: string[] = [];

  // Add quality
  if (quality !== 'auto') {
    transformations.push(`q_${quality}`);
  } else {
    transformations.push('q_auto');
  }

  // Add format
  if (format === 'auto' || fetchFormat === 'auto') {
    transformations.push('f_auto');
  } else {
    transformations.push(`f_${format}`);
  }

  // Add dimensions if provided
  if (width || height) {
    const dims = [];
    if (width) dims.push(`w_${width}`);
    if (height) dims.push(`h_${height}`);
    if (crop) dims.push(`c_${crop}`);
    transformations.push(dims.join(','));
  }

  // Add other optimizations
  transformations.push('fl_progressive'); // Progressive JPEG
  transformations.push('dpr_auto'); // Device pixel ratio

  // Construct the optimized URL
  const transformationString = transformations.join(',');
  return `${baseUrl}/${transformationString}/${pathAfterUpload}`;
}

/**
 * Optimizes Cloudinary URL for hero/background images
 * Uses best settings for large background images
 */
export function optimizeHeroImage(url: string): string {
  return optimizeCloudinaryUrl(url, {
    quality: 85,
    format: 'auto',
    fetchFormat: 'auto',
  });
}

/**
 * Optimizes Cloudinary URL for regular content images
 */
export function optimizeContentImage(url: string, width?: number): string {
  return optimizeCloudinaryUrl(url, {
    quality: 80,
    format: 'auto',
    width,
    crop: 'limit',
    fetchFormat: 'auto',
  });
}

/**
 * Optimizes Cloudinary URL for SVG/vector icons/logos
 * Preserves quality for vector graphics - CRITICAL: SVGs should not be rasterized
 */
export function optimizeIconImage(url: string, width?: number): string {
  // For SVGs, we MUST avoid transformations that rasterize them
  // Cloudinary rasterizes SVGs when we apply width/height constraints
  // Solution: Return original URL without transformations to preserve vector format
  if (url.includes('.svg')) {
    // Return original URL for SVGs - this ensures HD quality and preserves vector format
    // Cloudinary will serve the SVG directly without rasterization
    // No transformations = maximum quality
    return url;
  }
  
  // For other formats (PNG, JPG), use maximum quality settings
  // Use very high width (4K) for maximum clarity
  return optimizeCloudinaryUrl(url, {
    quality: 100, // Maximum quality
    format: 'auto',
    width: width || 4000, // 4K width for maximum HD quality
    crop: 'limit', // Don't crop, just limit size
    fetchFormat: 'auto',
  });
}
