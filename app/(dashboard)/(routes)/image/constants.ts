import * as z from "zod"

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: 'Image Prompt is required'
    })
})

export const amountOptions = [
    {
        value: '1',
        label: '1 Photo',
    },
    {
        value: '2',
        label: '2 Photos',
    },
    {
        value: '3',
        label: '3 Photos',
    },
    {
        value: '4',
        label: '4 Photos',
    },
]

export const resolutionOptions = [
    {
        value: '512x512',
        label: '512x512',
    },
    {
        value:  '768x768',
        label:  '768x768',
    },
]