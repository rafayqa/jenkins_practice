//Just checking cI Trigger 
//Triggering the Email Notifications yes we are doing this yes this is update
const login = require('./login');

test('valid credentials redirects to Dashboard', () => {
  expect(login('admin', 'password123')).toBe('Dashboard');
});

test('invalid credentials returns error', () => {
  expect(login('user', 'wrongpass')).toBe('Invalid credentials');
});

test('Intentional failure to test Jenkins HTML report', () => {
  expect(1 + 1).toBe(3); 
});

test('Intentional failure with login validation', () => {
  // We know "admin/password123" returns "Dashboard"
  const result = login("admin", "password123");
  expect(result).toBe("Home"); 
});
