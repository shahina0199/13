// pages/api/auth.js

import { NextResponse } from 'next/server'; // Hypothetical import, not an actual package

export default function handler(req, res) {
  // Get the existing "Authorization" header
  const existingToken = req.headers['authorization'];

  // Prefix the token with "Bearer "
  const modifiedToken = `Bearer ${existingToken}`;

  // Add the modified "Authorization" header to the response
  const response = new NextResponse();
  response.headers.set('Authorization', modifiedToken);

  // Continue with the Next.js routing
  return response.next();
}
