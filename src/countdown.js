// Countdown Script
const countdown = (seconds) => {
  if (seconds < 0) {
    console.log("Please enter a positive number");
    return;
  }

  const timer = setInterval(() => {
    if (seconds > 0) {
      console.log(seconds);
      seconds--;
    } else {
      console.log("🎉 Time's up!");
      clearInterval(timer);
    }
  }, 1000);
};

// Start countdown from 10 seconds
countdown(10);

