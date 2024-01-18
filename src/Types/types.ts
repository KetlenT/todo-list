import { Card } from "@/components/ui/card";

export type Task = {
    id:string,
    taskName: string;
}

export type CardProps = React.ComponentProps<typeof Card>