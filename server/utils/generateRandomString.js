function generateRandomString() {
  const characters = "ABCDEFGHIJ091276837829290qrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const randomString = generateRandomString();
export default randomString;
