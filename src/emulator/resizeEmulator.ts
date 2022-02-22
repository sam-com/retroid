export function calculateAspectRatioFit(
  w: number,
  h: number,
  maxW: number,
  maxH: number
) {
  var ratio = Math.min(maxW / w, maxH / h);

  return [w * ratio, h * ratio];
}
