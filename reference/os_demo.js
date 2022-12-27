const os = require('os');

// Platform
console.log('Platform -', os.platform());

// CPU Arch
console.log('CPU Arch -', os.arch());

// CPU Core Info
console.log('CPU Core Info -', os.cpus());

// Free memory
console.log('Free memory -', os.freemem());

// Total memory
console.log('Total memory -', os.totalmem());

// Home dir
console.log('Home dir -', os.homedir());

// Uptime
console.log('Uptime -', os.uptime());