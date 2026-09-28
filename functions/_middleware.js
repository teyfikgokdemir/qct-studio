export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.qctstudio.com' || url.protocol === 'http:') {
    url.protocol = 'https:';
    url.hostname = 'qctstudio.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
