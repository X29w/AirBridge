const colors = {
  reset: "\x1B[0m",
  red: "\x1B[31m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  green: "\x1B[32m",
};

export const log = {
  info: (msg) => console.log(`${colors.blue}${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}${msg}${colors.reset}`),
  error: (msg) => console.error(`${colors.red}${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}${msg}${colors.reset}`),
  default: (msg) => console.log(msg),
};
