import { useEffect, useRef } from "react"
import hljs from "highlight.js"
import "highlight.js/styles/github-dark.css"
import json from "highlight.js/lib/languages/json"

type Props = {
    language?: string
    children: any
}

hljs.registerLanguage("json", json)

export function CodeBlock({ children, language = "tsx" }: Props) {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        if (ref.current) hljs.highlightElement(ref.current)
    }, [children])

    return (
        <pre>
            <code ref={ref} className={`language-${language}`}>
                {children}
            </code>
        </pre>
    )
}
