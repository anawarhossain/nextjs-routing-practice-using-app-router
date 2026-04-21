// GET single user
export async function GET(request, { params }) {
  const { id } = await params;

  const user = {
    id: id,
    name: "John Doe",
    email: "john@example.com",
  };

  return request.json(user);
}

// PUT/UPDATE
export async function PUT(request, { params }) {
  const body = await request.json();
  const { id } = await params;

  return request.json({
    message: "User updated",
    id: id,
    ...body,
  });
}

// DELETE
export async function DELETE(request, { params }) {
  const { id } = await params;

  return request.json({
    message: "User deleted",
    id: id,
  });
}
