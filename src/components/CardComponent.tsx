"use client"

import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { InputForm } from "./Input"
import { useState } from "react"
import { CardProps, Task } from "@/Types/types"
import { DataTable } from "./DataTableComponent"
import { columns } from "@/constants/columns"
import { v4 as uuidv4 } from 'uuid';

export function CardDemo({ className, ...props }: CardProps) {
    const [toDoList, setToDoList] = useState<Task | any>([])

    const addTask = (taskName: string) => {
        const newTask = { id: uuidv4(), taskName };
        setToDoList([...toDoList, newTask].reverse())
    }

    const deletTask = (id: string) => {
        setToDoList(toDoList.filter((task: Task) => task.id !== id))
    }

    return (
        <Card className={cn("w-[450px] ", className)} {...props}>
            <CardHeader>
                <CardTitle>Lista de Atividades</CardTitle>
                <CardDescription>Organize suas atividades.</CardDescription>
            </CardHeader>
            <CardContent >
                <InputForm addTask={addTask} />
            </CardContent>
            <CardFooter>
                <DataTable columns={columns} data={toDoList} deletTask={deletTask} />
            </CardFooter>
        </Card>
    )
}
