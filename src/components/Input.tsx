"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"


const FormSchema = z.object({
    task: z.string().min(2, {
        message: "A atividade deve conter no mínimo 2 caracteres",
    }),
})

export function InputForm({ addTask }: any) {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            task: "",
        },
    })

    function onSubmitForm(data: z.infer<typeof FormSchema>) {
        addTask(data.task)
        toast({
            title: "Uma nova atividade foi adicionada a lista",
        })
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)} className="flex  space-x-2">
                <FormField
                    control={form.control}
                    name="task"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Nova atividade" {...field} />
                            </FormControl>
                         
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Adicionar</Button>
            </form>
        </Form>
    )
}
