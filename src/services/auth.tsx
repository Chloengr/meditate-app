export interface Auth {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Auth> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "ajsdhflajkshdkfljaldsfhkajsfdklaskdjhlajsdhf",
        user: {
          id: 1,
          name: "John",
          email: "john@mail.com",
        },
      });
    }, 2000);
  });
}
