import setupQuestionTable from "@/models/server/question.collection";

export async function GET() {
  await setupQuestionTable();
  return Response.json({ success: true });
}
