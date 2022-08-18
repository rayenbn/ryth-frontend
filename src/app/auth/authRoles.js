export const authRoles = {
  sa: ['SA'],
  admin: ['SA', 'ADMIN'],
  editor: ['SA', 'ADMIN', 'EDITOR'],
  guest: ['SA', 'ADMIN', 'EDITOR', 'GUEST'],
  normalClient: ['normal_client', 'ADMIN', 'EDITOR', 'GUEST'],
  investor: ['ADMIN', 'EDITOR', 'GUEST'],
}

export default authRoles;
