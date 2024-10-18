# boyeon-blog

주소: [boyeon-blog](https://boyeon-blog.vercel.app).

## 폴더 구조
```
boyeon-blog/
├── app/
│   ├── (posts)/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   ├── category/
│   │   ├── [category]/
│   │   └── page/
│   │       └── [page]/
│   └── page/
│   │   └── [page]/
│   └── components/
├── package.json
├── README.md
└── ...
```

[slug]를 `first-post`으로 한다면 URL에서 `/first-post` 으로 접근할 수 있습니다.
