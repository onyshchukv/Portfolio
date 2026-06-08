/**
 * Computes the display dimensions for an image scaled to fit within a container,
 * preserving aspect ratio and enforcing a minimum display width of 80px.
 */
export function computeImageDisplaySize(
  originalWidth: number,
  originalHeight: number,
  containerWidth: number
): { displayWidth: number; displayHeight: number } {
  const minWidth = 80;
  const aspectRatio = originalHeight / originalWidth;

  let displayWidth = Math.min(originalWidth, containerWidth);
  displayWidth = Math.max(displayWidth, minWidth);
  displayWidth = Math.min(displayWidth, containerWidth);

  const displayHeight = Math.round(displayWidth * aspectRatio);

  return { displayWidth, displayHeight };
}
