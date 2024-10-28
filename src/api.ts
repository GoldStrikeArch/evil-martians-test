const users = new Map([
  ["test@test.com", "123456"],
  ["someOtherUser@gmail.com", "qwerty123"],
]);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const emailValidation = (email: string) => users.has(email);
const passwordValidation = (email: string, password: string) =>
  users.get(email) === password;

export const login = async (email: string, password: string) => {
  await sleep(1500);

  if (Math.random() < 0.2) {
    return Promise.reject(new Error("Network error"));
  }

  if (!emailValidation(email) || !passwordValidation(email, password)) {
    return new Response(null, {
      status: 401,
      statusText: "Invalid credentials, please check your email and password",
    });
  }

  return new Response("OK, you are logged in!", { status: 200 });
};
