export const scrollToSection = (sectionId: string) => {
  // Remove the '#' if present
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
  const element = document.getElementById(id);
  if (!element) return;

  // scrollIntoView respects CSS scroll-padding-top (set to 90px on html)
  // and uses the browser's native smooth scroll
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
