import { NextResponse } from "next/server";

console.log(process.env.TOKEN);
console.log(process.env.SECRET_KEY);

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req) {
  const { nombre, apellido } = await req.json();
  console.log(nombre, apellido);
  return NextResponse.json({ message: "Creando datos" });
}

export function PUT() {
  return NextResponse.json({ message: "Actualizando datos" });
}
export function DELETE() {
  return NextResponse.json({ message: "Eliminando datos" });
}
