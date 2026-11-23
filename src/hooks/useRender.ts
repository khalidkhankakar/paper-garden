import { useEffect, useState, type ReactElement } from "react";
import { render } from "@hyper-elements/react";

interface Rendered {
    html: string;
    plainText: string;
}

const nothing: Rendered = { html: "", plainText: "" };

/**
 * What render() gives for a template. render() is async: the result is empty
 * until it resolves, and a result for a template no longer asked for is dropped.
 * Give it a stable element (a constant, or from useMemo), or it renders each time.
 */
export function useRender(element: ReactElement | null): Rendered {
    const [rendered, setRendered] = useState<{
        element: ReactElement | null;
        result: Rendered;
    }>({
        element: null,
        result: nothing,
    });

    useEffect(() => {
        if (!element) {
            return;
        }

        let current = true;
        render(element).then(
            ({ html, text }) => {
                if (current) {
                    setRendered({ element, result: { html, plainText: text } });
                }
            },
            (e: unknown) => {
                const message = e instanceof Error ? e.message : String(e);
                if (current) {
                    setRendered({
                        element,
                        result: {
                            html: `<!-- Render error: ${message} -->`,
                            plainText: `Render error: ${message}`,
                        },
                    });
                }
            }
        );

        return () => {
            current = false;
        };
    }, [element]);

    return rendered.element === element ? rendered.result : nothing;
}