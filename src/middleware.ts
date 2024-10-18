import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const userSession = request.cookies.get('authjs.session-token');

  if (!userSession) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ['/profile', '/checkout', '/checkout/address'],
};
