

// GET request
export async function GET(request) {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  return request.json(users);
}

// POST request
export async function POST(request) {
  const body = await request.json();

  return request.json(
    {
      message: "User created",
      user: body,
    },
    { status: 201 },
  );
}
