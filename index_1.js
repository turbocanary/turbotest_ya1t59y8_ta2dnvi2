function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffix = window.crypto.getRandomValues(new Uint32Array(1))[0];
  var password = "sssAAAA" + suffix;
  return password;
}