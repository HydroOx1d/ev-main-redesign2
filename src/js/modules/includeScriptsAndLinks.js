export function getScripts(src) {
  const script = document.createElement('script');

  script.src = src;

  return script;
}

export function getLink(href) {
  const link = document.createElement('link');

  link.href = href;

  return link;
}