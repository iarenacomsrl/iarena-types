export function encodeBearerToken(token: string): string {
  return `Bearer ${token}`;
}

export function decodeBearerToken(bearerToken: string): string {
  return bearerToken.replace("Bearer ", "");
}
