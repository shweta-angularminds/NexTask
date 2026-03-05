import { Card, CardContent } from "@/components/ui/card";

export default function BoardCard({ board }: any) {
  return (
    <Card className="cursor-pointer hover:shadow-md">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{board.title}</h3>
      </CardContent>
    </Card>
  );
}
