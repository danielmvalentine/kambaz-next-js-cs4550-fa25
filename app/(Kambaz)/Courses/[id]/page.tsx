import { redirect } from "next/navigation";

export default async function CoursesPage({ 
  params 
}: { 
  params: Promise<{ id: string }>; 
}) {
  const { id } = await params;
  redirect(`/Courses/${id}/Home`); 
}