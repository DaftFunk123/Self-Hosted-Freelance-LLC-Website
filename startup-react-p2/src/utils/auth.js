export const AuthState = {
  Unknown: 'unknown',
  Authenticated: 'authenticated',
  Unauthenticated: 'unauthenticated'
};

export function saveAuth(userName) {
  localStorage.setItem('userName', userName);
  localStorage.setItem('authState', AuthState.Authenticated);
}

export function clearAuth() {
  localStorage.removeItem('userName');
  localStorage.removeItem('authState');
}

export function loadAuth() {
  const userName = localStorage.getItem('userName');
  const authState = localStorage.getItem('authState') || AuthState.Unauthenticated;
  return { userName, authState };
}
