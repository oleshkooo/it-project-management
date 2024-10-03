import { useDebounce } from '@uidotdev/usehooks'
import { memo, useCallback, useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './components/ui/card'
import { BASE_URL } from './lib/constants'

type AppProps = unknown
export const App: React.FC<AppProps> = memo(() => {
    const [text, setText] = useState<string>('')
    const [response, setResponse] = useState<
        Array<{
            word: string
            qty: number
        }>
    >([])

    const debouncedText = useDebounce(text, 300)

    const handleTextAreaChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setText(e.target.value)
    }, [])

    useEffect(() => {
        ;(async () => {
            if (text == null || text.length === 0) {
                return
            }

            const response: Record<string, number> = await fetch(`${BASE_URL}/frequency`, {
                method: 'POST',
                body: JSON.stringify({ text }),
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .catch(error => {
                    console.error(error)
                })
            setResponse(
                Object.entries(response).map(([word, qty]) => ({
                    word,
                    qty,
                })),
            )
        })()
    }, [debouncedText])

    return (
        <div className="w-screen h-screen bg-slate-800 justify-center items-center flex gap-20">
            <textarea
                value={text}
                onChange={handleTextAreaChange}
                placeholder="Enter your text here..."
                className="shadow-lg rounded-lg p-10 bg-slate-500 text-white w-96 h-52 min-h-52"
            />
            <Card>
                <CardHeader />
                <CardContent className="flex flex-col">
                    {response.length === 0 && 'Enter some text to get frequency analysis'}
                    {response.map(({ word, qty }) => (
                        <span>
                            {word}: {qty}
                        </span>
                    ))}
                </CardContent>
                <CardFooter />
            </Card>
        </div>
    )
})
App.displayName = 'App'
