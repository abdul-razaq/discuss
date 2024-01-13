// We generally don't use these handlers and instead we use server actions. Unless an outside server wants to access our app programatically e.g The Github OAuth API. We generally just use server actions within our app.
// export async function GET() {}

// export async function POST() {}

export { GET, POST } from '@/auth';
