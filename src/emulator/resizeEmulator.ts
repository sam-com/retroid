export function calculateAspectRatioFit(
  container: HTMLElement,
  keepRatio: boolean
) {
  const { offsetWidth: w, offsetHeight: h } = container;

  if (!keepRatio) return [w, h];

  const { innerWidth: maxW, innerHeight: maxH } = window;
  const ratio = Math.min(maxW / w, maxH / h);

  return [w * ratio, h * ratio];
}
