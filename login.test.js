//Just checking cI Trigger 
const login = require('./login');

test('valid credentials redirects to Dashboard', () => {
  expect(login('admin', 'password123')).toBe('Dashboard');
});

test('invalid credentials returns error', () => {
  expect(login('user', 'wrongpass')).toBe('Invalid credentials');
});
