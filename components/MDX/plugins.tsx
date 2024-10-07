import rehypeShiki from '@shikijs/rehype';

const shikiPlugin = [
    rehypeShiki,
    {
        theme: 'github-light'
    }
]

export const rehypePlugin = [shikiPlugin]