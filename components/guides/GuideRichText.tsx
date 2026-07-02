import type { ReactNode } from "react";
import TransitionLink from "@/components/common/TransitionLink";

type RichTextNode = {
    tag?: string;
    props?: Record<string, string>;
    children: RichTextNode[];
    text?: string;
};

function createTextNode(text: string): RichTextNode {
    return { text, children: [] };
};

function parseRichText(content: string): RichTextNode[] {
    const root: RichTextNode[] = [];
    const stack: RichTextNode[][] = [root];
    const tagPattern = /<\/?(i|u|b|h|a|ul|ol|li|br)(?:\s+[^>]*)?>/gi;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = tagPattern.exec(content)) !== null) {
        const raw = match[0];
        const tagName = match[1].toLowerCase();
        const text = content.slice(lastIndex, match.index);

        if (text) {
            stack[stack.length - 1].push(createTextNode(text));
        }

        if (raw.startsWith("</")) {
            if (stack.length > 1) {
                stack.pop();
            }
        } else {
            const props = parseAttributes(raw);
            const node: RichTextNode = { tag: tagName, props, children: [] };
            stack[stack.length - 1].push(node);
            if (tagName !== "br") {
                stack.push(node.children);
            }
        }

        lastIndex = match.index + raw.length;
    }

    const remaining = content.slice(lastIndex);
    if (remaining) {
        stack[stack.length - 1].push(createTextNode(remaining));
    }

    return root;
}

function parseAttributes(rawTag: string): Record<string, string> {
    const props: Record<string, string> = {};
    const attributePattern = /([a-zA-Z0-9:-]+)\s*=\s*["']([^"']*)["']/g;
    let match: RegExpExecArray | null;

    while ((match = attributePattern.exec(rawTag)) !== null) {
        props[match[1].toLowerCase()] = match[2];
    }

    return props;
}

function renderNode(node: RichTextNode, index: number): ReactNode {
    if (node.text !== undefined) {
        return node.text;
    }

    const children = node.children.map((child, childIndex) => renderNode(child, childIndex));

    switch (node.tag) {
        case "i":
            return <em key={index}>{children}</em>;
        case "u":
            return <u key={index}>{children}</u>;
        case "b":
            return <strong key={index}>{children}</strong>;
        case "h":
            return <h3 key={index} className="text-base font-semibold text-foreground">{children}</h3>;
        case "a": {
            const route = node.props?.route ?? node.props?.href ?? "#";
            return (
                <TransitionLink key={index} route={route} className="text-primary underline hover:text-primary-foreground">
                    {children}
                </TransitionLink>
            );
        }
        case "ul":
            return <ul key={index} className="ml-5 list-disc space-y-1 my-2">{children}</ul>;
        case "ol":
            return <ol key={index} className="ml-5 list-decimal space-y-1 my-2">{children}</ol>;
        case "li":
            return <li key={index}>{children}</li>;
        case "br":
            return <br key={index} />;
        default:
            return <>{children}</>;
    }
}

export function GuideRichText({ content, className }: { content: string; className?: string }) {
    const nodes = parseRichText(content);

    return <div className={className}>{nodes.map((node, index) => renderNode(node, index))}</div>;
}
