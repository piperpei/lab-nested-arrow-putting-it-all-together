// Create Login Tracker 

function createLoginTracker(userInfo) {
  // Variables
  let attemptCount = 0; 
  const maxAttempts = 3;
  let locked = false; 

  // Arrow Function 
  const attmeptLogin = (passwordAttempt) => {
    // Check if Locked
    if (locked) {
      return 'Account Locked After Three Failed Attempts';
    }

    // Add Attempts 
    attemptCount++; 

    // Check if Password Matches 
    if (passwordAttempt === userInfo.password) {
      // Reset if Correct 
      attemptCount = 0;
      return 'Login Successful';

    // Password Failure 
    if (attemptCount >= maxAttempts)
    }

  };

  // Return 
  return attmeptLogin;  

}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};