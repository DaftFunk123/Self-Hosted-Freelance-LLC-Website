// Mock WebSocket notifications using setInterval
const subscribers = [];

export function addNotificationListener(callback) {
  subscribers.push(callback);
  return () => {
    const index = subscribers.indexOf(callback);
    if (index > -1) subscribers.splice(index, 1);
  };
}

export function startMockNotifications() {
  const mockMessages = [
    { type: 'booking', user: 'John', service: 'Math Tutoring', time: '2:00 PM' },
    { type: 'payment', user: 'Sarah', amount: 200, status: 'completed' },
    { type: 'cancellation', user: 'Mike', service: 'Music Lesson' },
    { type: 'reminder', user: 'Emily', service: 'Bounce House', time: 'tomorrow' },
    { type: 'booking', user: 'Alex', service: 'Math Tutoring', time: '4:30 PM' },
    { type: 'payment', user: 'Lisa', amount: 75, status: 'processing' }
  ];

  return setInterval(() => {
    const randomMsg = mockMessages[Math.floor(Math.random() * mockMessages.length)];
    console.log('í´” Mock notification:', randomMsg);
    subscribers.forEach(callback => callback(randomMsg));
  }, 8000); // New notification every 8 seconds
}
