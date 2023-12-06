//User Class
class User {
  constructor(username, password, role){
    this.username = username;
    this.password = password;
    this.role = role;
  }

  verifyPassword(enteredPassword) {
    return this.password === enteredPassword;
  }
}
//Access Manager Class
class AccessManager {
  grantAccess(user, action) {
    switch (user.role) {
      case 'admin':
        console.log(`${user.username} granted access to ${action}.`);
        break;
      case 'editor':
        if (['create', 'read', 'update'].includes(action)) {
          console.log(`${user.username} granted access to ${action}.`);
        } else {
          console.log(`${user.username} does not have permission to ${action}.`);
        }
        break;
      case 'viewer':
        if (action === 'read') {
          console.log(`${user.username} granted access to ${action}.`);
        } else {
          console.log(`${user.username} does not have permission to ${action}.`);
        }
        break;
      default:
        console.log(`${user.username} does not have a valid role.`);
    }
  }
}


// Testing
const adminUser = new User('adminUser', 'adminPass123', 'admin');
const editorUser = new User('editorUser', 'editorPass123', 'editor');
const viewerUser = new User('viewerUser', 'viewerPass123', 'viewer');

const accessManager = new AccessManager();

accessManager.grantAccess(adminUser, 'create');
accessManager.grantAccess(editorUser, 'update'); 
accessManager.grantAccess(viewerUser, 'update');
accessManager.grantAccess(adminUser, 'delete');
