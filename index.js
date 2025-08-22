// Create Login Tracker 

function createLoginTracker(userInfo) {
  // Variables
  let attemptCount = 0; 
  const maxAttempts = 3;
  let locked = false; 

  // Arrow Function 
  const attemptLogin = (passwordAttempt) => {
    // Check if already locked
    if (locked) {
      return 'Account locked due to too many failed login attempts';
    }

    // Add Attempts 
    attemptCount++; 

    // Check if Password Matches 
    if (passwordAttempt === userInfo.password) {
      // Reset if Correct 
      attemptCount = 0;
      return 'Login successful';

    }

    // Password Failure 
    if (attemptCount >= maxAttempts) {
      locked = true; 
      return `Attempt ${attemptCount}: Login failed`;
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }

  };

  // Return 
  return attemptLogin;  

}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};