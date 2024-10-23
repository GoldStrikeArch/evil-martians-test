const users = new Map([
  ["test@test.com", "asd1234%"],
  ["someOtherUser@gmail.com", "qwerty123"],
]);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const emailValidation = (email: string) => users.has(email);
const passwordValidation = (email: string, password: string) =>
  users.get(email) === password;

export const login = async (email: string, password: string) => {
  await sleep(2000);

  if (Math.random() < 0.5) {
    return Promise.reject(new Error("Network error"));
  }

  if (!emailValidation(email) || !passwordValidation(email, password)) {
    return new Response(
      "Invalid credentials, please check your email and password",
      { status: 401 },
    );
  }

  return new Response("OK, you are logged in!", { status: 200 });
};
