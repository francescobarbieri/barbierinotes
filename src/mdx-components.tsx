import Link from 'next/link';
import { highlight } from 'sugar-high';
import type {MDXComponents} from 'mdx/types';
import React, {ComponentPropsWithoutRef} from 'react';

type HeadingProps     = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps   = ComponentPropsWithoutRef<'p'>;
type ListProps        = ComponentPropsWithoutRef<'ul'>;
type ListItemProps    = ComponentPropsWithoutRef<'li'>;
type AnchorProps      = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps  = ComponentPropsWithoutRef<'blockquote'>;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className='font-medium pt-12 mb-0' {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className='text-gray-800 font-medium mt-8 mb-4' {...props} />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="text-gray-800 leading-7" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="text-gray-800 list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-gray-800 list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-blue-500 hover:text-blue-700 hover:bg-blue-50';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

export function useMDXComponents(
  otherCompoents: MDXComponents,
): MDXComponents {
  return {
    ...otherCompoents,
    ...components,
  }
}